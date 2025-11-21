import { enqueueActions } from 'xstate'

import { randomNumber } from '../../../../services/RandomNumber'
import { BOT_ACTION_DELAY } from '../../../config'
import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import {
  BotTurnActionState,
  GameEvent,
  GameState,
  isToolCardInstance,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { botLogic } from '../../BotLogic'
import { lookup } from '../../Lookup'
import { GameStateCorruptError, PlayerOutOfFundsError } from '../errors'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'

export const performingBotTurnActionState: RulesMachineConfig['states'] = {
  [GameState.PERFORMING_BOT_TURN_ACTION]: {
    initial: 'initializing',

    on: {
      [GameEvent.PLAYER_RAN_OUT_OF_FUNDS]: GameState.GAME_OVER,

      [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,

      [GameEvent.PLAY_WATER]: GameState.PERFORMING_BOT_CROP_WATERING,

      [GameEvent.PLAY_EVENT]: GameState.PLAYING_EVENT,

      [GameEvent.PLAY_TOOL]: GameState.PLAYING_TOOL,

      [GameEvent.HARVEST_CROP]: GameState.PERFORMING_BOT_CROP_HARVESTING,

      [GameEvent.START_TURN]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    exit: enqueueActions(({ event, context: { game }, enqueue }) => {
      game = recordCardPlayEvents(game, event)
      enqueue.assign({ game })
    }),

    states: {
      initializing: {
        on: {
          [GameEvent.BOT_TURN_INITIALIZED]: BotTurnActionState.PLAYING_CROPS,
        },
        entry: enqueueActions(
          ({ event, context, context: { game }, enqueue }) => {
            if (event.type === GameEvent.START_TURN) {
              try {
                const previousTurnGameState = game
                game = incrementPlayer(game)

                const { currentPlayerId } = game
                assertCurrentPlayer(currentPlayerId)

                const previousTurnStateForCurrentPlayer =
                  previousTurnGameState.table.players[currentPlayerId]

                for (const cardPlayedDuringTurn of previousTurnStateForCurrentPlayer.cardsPlayedDuringTurn) {
                  if (isToolCardInstance(cardPlayedDuringTurn)) {
                    context =
                      cardPlayedDuringTurn.onStartFollowingTurn?.(context) ??
                      context
                  }
                }

                game = startTurn(
                  game,
                  currentPlayerId,
                  context.cardsToDrawAtTurnStart
                )

                context = {
                  ...context,
                  cropsToPlayDuringBotTurn: botLogic.getNumberOfCropCardsToPlay(
                    game,
                    currentPlayerId
                  ),
                  eventCardsThatCanBePlayed:
                    botLogic.getNumberOfEventCardsToPlay(game, currentPlayerId),
                  toolCardsThatCanBePlayed: botLogic.getNumberOfToolCardsToPlay(
                    game,
                    currentPlayerId
                  ),
                }

                enqueue.assign({ ...context, game })
                enqueue.raise({ type: GameEvent.BOT_TURN_INITIALIZED })
              } catch (error) {
                if (error instanceof PlayerOutOfFundsError) {
                  const { currentPlayerId } = game
                  assertCurrentPlayer(currentPlayerId)

                  enqueue.raise({
                    type: GameEvent.PLAYER_RAN_OUT_OF_FUNDS,
                    playerId: currentPlayerId,
                  })
                } else {
                  console.error(error)
                  throw new GameStateCorruptError('Unexpected bot logic error')
                }
              }
            } else {
              // If we re-enter initializing without START_TURN (shouldn't happen due to parent transition, but just in case)
              // We should probably proceed if initialized, or wait.
              // But given the parent state transitions on START_TURN to here, event.type should be START_TURN.
              // If we come back from a child state (like after planting crop), we re-enter performingBotTurnActionState?
              // No, PLANTING_CROP transitions to PERFORMING_BOT_TURN_ACTION (parent state).
              // So it re-enters parent. Parent initial state is initializing.
              // But the event triggering re-entry is PROMPT_BOT_FOR_TURN_ACTION.
              // So event.type is NOT START_TURN.
              // In that case, we should skip initialization logic and go straight to checking?
              // Ah! The original logic handled START_TURN specifically for initialization.
              // But for subsequent phases (after playing a card), it just fell through to checks.
              // So if event is NOT START_TURN, we should immediately
              // transition to BotTurnActionEvent.checkingCropsToPlay.
              enqueue.raise({ type: GameEvent.BOT_TURN_INITIALIZED })
            }
          }
        ),
      },

      [BotTurnActionState.PLAYING_CROPS]: {
        entry: enqueueActions(({ context, context: { game }, enqueue }) => {
          if (context.cropsToPlayDuringBotTurn > 0) {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const cropIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
              game,
              currentPlayerId
            )
            const cardIdx = randomNumber.chooseElement(cropIdxsInPlayerHand)

            if (cardIdx === undefined) {
              throw new GameStateCorruptError(
                `areCropsToPlay is true but there are no crops in the hand of bot player ${currentPlayerId}`
              )
            }

            enqueue.raise(
              {
                type: GameEvent.PLAY_CROP,
                playerId: currentPlayerId,
                cardIdx,
              },
              { delay: BOT_ACTION_DELAY }
            )
          }
        }),
        always: [
          {
            guard: ({ context }) => context.cropsToPlayDuringBotTurn <= 0,
            target: BotTurnActionState.PLAYING_WATER,
          },
        ],
      },

      [BotTurnActionState.PLAYING_WATER]: {
        entry: enqueueActions(({ context, context: { game }, enqueue }) => {
          const { currentPlayerId } = game
          assertCurrentPlayer(currentPlayerId)

          const fieldCropIndicesToWaterDuringBotTurn =
            botLogic.getCropCardIndicesToWater(game, currentPlayerId)

          if (fieldCropIndicesToWaterDuringBotTurn.length > 0) {
            const waterCardIdxsInPlayerHand =
              lookup.findWaterIndexesInPlayerHand(game, currentPlayerId)

            enqueue.raise(
              {
                type: GameEvent.PLAY_WATER,
                cardIdx: waterCardIdxsInPlayerHand[0],
                playerId: currentPlayerId,
              },
              {
                delay: BOT_ACTION_DELAY,
              }
            )
          }

          enqueue.assign({
            ...context,
            fieldCropIndicesToWaterDuringBotTurn,
          })
        }),
        always: [
          {
            guard: ({ context }) =>
              context.fieldCropIndicesToWaterDuringBotTurn.length <= 0,
            target: BotTurnActionState.PLAYING_EVENTS,
          },
        ],
      },

      [BotTurnActionState.PLAYING_EVENTS]: {
        entry: enqueueActions(({ context, context: { game }, enqueue }) => {
          if (context.eventCardsThatCanBePlayed > 0) {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const eventCardIdxToPlay = botLogic.getEventCardIndexToPlay(
              game,
              currentPlayerId
            )

            if (eventCardIdxToPlay === undefined) {
              throw new GameStateCorruptError(
                `areEventCardsToPlay is true but there are no events in the hand of bot player ${currentPlayerId}`
              )
            }

            enqueue.raise(
              {
                type: GameEvent.PLAY_EVENT,
                cardIdx: eventCardIdxToPlay,
                playerId: currentPlayerId,
              },
              {
                delay: BOT_ACTION_DELAY,
              }
            )
          }
        }),
        always: [
          {
            guard: ({ context }) => context.eventCardsThatCanBePlayed <= 0,
            target: BotTurnActionState.PLAYING_TOOLS,
          },
        ],
      },

      [BotTurnActionState.PLAYING_TOOLS]: {
        entry: enqueueActions(({ context, context: { game }, enqueue }) => {
          if (context.toolCardsThatCanBePlayed > 0) {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const toolCardIdxToPlay = botLogic.getToolCardIndexToPlay(
              game,
              currentPlayerId
            )

            if (toolCardIdxToPlay === undefined) {
              throw new GameStateCorruptError(
                `areToolsToPlay is true but there are no tool in the hand of bot player ${currentPlayerId}`
              )
            }

            enqueue.raise(
              {
                type: GameEvent.PLAY_TOOL,
                cardIdx: toolCardIdxToPlay,
                playerId: currentPlayerId,
              },
              {
                delay: BOT_ACTION_DELAY,
              }
            )
          }
        }),
        always: [
          {
            guard: ({ context }) => context.toolCardsThatCanBePlayed <= 0,
            target: BotTurnActionState.HARVESTING_CROPS,
          },
        ],
      },

      [BotTurnActionState.HARVESTING_CROPS]: {
        entry: enqueueActions(({ context, context: { game }, enqueue }) => {
          const { currentPlayerId } = game
          assertCurrentPlayer(currentPlayerId)

          const cropCardIndicesToHarvest = botLogic.getCropCardIndicesToHarvest(
            game,
            currentPlayerId
          )

          if (cropCardIndicesToHarvest.length > 0) {
            enqueue.raise(
              {
                type: GameEvent.HARVEST_CROP,
                playerId: currentPlayerId,
                cropIdxInFieldToHarvest: cropCardIndicesToHarvest[0],
              },
              {
                delay: BOT_ACTION_DELAY,
              }
            )
          }

          enqueue.assign({
            ...context,
            cropCardIndicesToHarvest,
          })
        }),
        always: [
          {
            guard: ({ context }) =>
              context.cropCardIndicesToHarvest.length <= 0,
            target: BotTurnActionState.DONE,
          },
        ],
      },

      [BotTurnActionState.DONE]: {
        entry: enqueueActions(({ enqueue }) => {
          enqueue.raise({
            type: GameEvent.START_TURN,
          })
        }),
        type: 'final',
      },
    },
  },
}
