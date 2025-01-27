import { setup, enqueueActions, assertEvent, assign } from 'xstate'

import { addCropToField } from '../../reducers/add-crop-to-field'
import { incrementPlayer } from '../../reducers/increment-player'
import { moveFromHandToDiscardPile } from '../../reducers/move-from-hand-to-discard-pile'
import { startTurn } from '../../reducers/start-turn'
import { updatePlayedCrop } from '../../reducers/update-played-crop'
import {
  IGame,
  GameEventPayload,
  GameEventPayloadKey,
  GameState,
  GameEvent,
  IPlayedCrop,
  GameStateGuard,
} from '../../types'
import { factory } from '../Factory'
import { lookup } from '../Lookup'
import { moveCropFromHandToField } from '../../reducers/move-crop-from-hand-to-field'
import { setUpCpuPlayer } from '../../reducers/cpu/set-up-player'
import { assertCurrentPlayer } from '../../types/guards'

export const { createMachine } = setup({
  types: {
    context: {} as { game: IGame },
    events: {} as GameEventPayload[GameEventPayloadKey],
  },

  guards: {
    [GameStateGuard.HAVE_PLAYERS_COMPLETED_SETUP]({
      event,
      context: { game },
    }) {
      assertEvent(event, GameEvent.START_TURN)

      if (game.currentPlayerId === null) {
        throw new TypeError('currentPlayerId is null')
      }

      return Object.values(game.table.players).every(
        player => player.field.crops.length > 0
      )
    },
  },
})

type RulesMachineConfig = Omit<Parameters<typeof createMachine>[0], 'context'>

export const machineConfig: RulesMachineConfig = {
  initial: GameState.UNINITIALIZED,

  on: {
    // NOTE: Used to override the internal game context of the state machine.
    // This should only be used for test setup and debugging.
    [GameEvent.DANGEROUSLY_SET_CONTEXT]: {
      actions: enqueueActions(({ event, enqueue }) => {
        assertEvent(event, GameEvent.DANGEROUSLY_SET_CONTEXT)

        const { type, ...context } = event

        enqueue.assign(context)
      }),
    },
  },

  states: {
    [GameState.UNINITIALIZED]: {
      on: {
        [GameEvent.INIT]: {
          actions: enqueueActions(({ event, enqueue }) => {
            assertEvent(event, GameEvent.INIT)

            const { playerSeeds, userPlayerId } = event
            const game = factory.buildGameForSession(playerSeeds, userPlayerId)

            enqueue.assign({ game })
            enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_SETUP })
          }),
        },

        [GameEvent.PROMPT_PLAYER_FOR_SETUP]:
          GameState.WAITING_FOR_PLAYER_SETUP_ACTION,
      },
    },

    [GameState.WAITING_FOR_PLAYER_SETUP_ACTION]: {
      on: {
        [GameEvent.START_TURN]: {
          target: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
          guard: GameStateGuard.HAVE_PLAYERS_COMPLETED_SETUP,
        },

        [GameEvent.PROMPT_PLAYER_FOR_SETUP]: {
          actions: enqueueActions(({ event, context: { game }, enqueue }) => {
            assertEvent(event, GameEvent.PROMPT_PLAYER_FOR_SETUP)

            game = incrementPlayer(game)

            const { currentPlayerId, sessionOwnerPlayerId } = game

            assertCurrentPlayer(currentPlayerId)

            if (currentPlayerId !== sessionOwnerPlayerId) {
              game = setUpCpuPlayer(game, currentPlayerId)

              // TODO: Randomize who goes first instead of just having the player go first
              game = incrementPlayer(game)
            }

            const currentPlayerField = game.table.players[currentPlayerId].field

            enqueue.assign({ game })

            if (currentPlayerField.crops.length > 0) {
              enqueue.raise({
                type: GameEvent.START_TURN,
              })
            }
          }),
        },

        [GameEvent.PLAY_CROP]: {
          actions: assign({
            game: ({ event, context: { game } }) => {
              assertEvent(event, GameEvent.PLAY_CROP)

              const { cardIdx, playerId } = event

              game = moveCropFromHandToField(game, playerId, cardIdx)

              return game
            },
          }),
        },
      },

      entry: enqueueActions(({ event, context: { game }, enqueue }) => {
        switch (event.type) {
          case GameEvent.PROMPT_PLAYER_FOR_SETUP: {
            const { currentPlayerId } = game

            if (currentPlayerId === null) {
              throw new TypeError(
                '[TypeError] currentPlayerId must not be null'
              )
            }

            const currentPlayerField = game.table.players[currentPlayerId].field

            if (currentPlayerField.crops.length > 0) {
              enqueue.raise({
                type: GameEvent.START_TURN,
              })
            }

            break
          }
          default:
        }
      }),

      exit: assign({
        game: ({ event, context: { game } }) => {
          switch (event.type) {
            case GameEvent.PROMPT_PLAYER_FOR_SETUP: {
              game = incrementPlayer(game)

              break
            }

            default:
          }

          return game
        },
      }),
    },

    // TODO: Implement ending the turn
    [GameState.WAITING_FOR_PLAYER_TURN_ACTION]: {
      on: {
        [GameEvent.PLAY_CARD]: GameState.PLAYING_CARD,

        [GameEvent.START_TURN]: {
          actions: assign({
            game: ({ context: { game } }) => {
              game = incrementPlayer(game)

              return game
            },
          }),
        },
      },

      entry: assign({
        game: ({ event, context: { game } }) => {
          switch (event.type) {
            case GameEvent.START_TURN: {
              if (game.currentPlayerId === null) {
                throw new TypeError('currentPlayerId is null')
              }

              game = startTurn(game, game.currentPlayerId)

              break
            }

            default:
          }

          return game
        },
      }),
    },

    [GameState.PLAYING_CARD]: {
      on: {
        [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,
        [GameEvent.PLAY_WATER]: GameState.WATERING_CROP,
      },

      entry: enqueueActions(({ event, context: { game }, enqueue }) => {
        assertEvent(event, GameEvent.PLAY_CARD)

        const { playerId, cardIdx } = event
        const card = lookup.getCardFromHand(game, playerId, cardIdx)

        const gameEventPayload = card.onPlayFromHand(game, playerId, cardIdx)

        enqueue.raise(gameEventPayload)
      }),
    },

    [GameState.PLANTING_CROP]: {
      on: {
        [GameEvent.CROP_PLANTED]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,

        [GameEvent.OPERATION_ABORTED]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
      },

      entry: enqueueActions(({ event, context: { game }, enqueue }) => {
        assertEvent(event, GameEvent.PLAY_CROP)

        const { playerId, cardIdx } = event

        try {
          const card = lookup.getCropFromHand(game, playerId, cardIdx)
          const playedCrop = factory.buildPlayedCrop(card)

          game = addCropToField(game, playerId, playedCrop)
          game = moveFromHandToDiscardPile(game, playerId, cardIdx)

          enqueue.assign({ game })
          enqueue.raise({ type: GameEvent.CROP_PLANTED })
        } catch (e) {
          console.error(e)
          enqueue.raise({ type: GameEvent.OPERATION_ABORTED })
        }
      }),
    },

    [GameState.WATERING_CROP]: {
      on: {
        [GameEvent.SELECT_CROP_TO_WATER]:
          GameState.WAITING_FOR_PLAYER_TURN_ACTION,

        [GameEvent.OPERATION_ABORTED]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
      },

      entry: enqueueActions(({ event, enqueue }) => {
        assertEvent(event, GameEvent.PLAY_WATER)

        const { playerId, cardIdx } = event

        enqueue.raise({
          type: GameEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER,
          playerId,
          waterCardInHandIdx: cardIdx,
        })
      }),

      exit: assign({
        game: ({ event, context: { game } }) => {
          const previousGame = game

          switch (event.type) {
            case GameEvent.SELECT_CROP_TO_WATER: {
              try {
                const { playerId, waterCardInHandIdx, cropIdxInFieldToWater } =
                  event

                const playedCrop =
                  game.table.players[playerId].field.crops[
                    cropIdxInFieldToWater
                  ]

                const newPlayedCrop: IPlayedCrop = {
                  ...playedCrop,
                  waterCards: playedCrop.waterCards + 1,
                }

                game = updatePlayedCrop(
                  game,
                  playerId,
                  cropIdxInFieldToWater,
                  newPlayedCrop
                )

                game = moveFromHandToDiscardPile(
                  game,
                  playerId,
                  waterCardInHandIdx
                )
              } catch (e) {
                console.error(e)
                return previousGame
              }

              break
            }

            default:
          }

          return game
        },
      }),
    },
  },
}
