import { enqueueActions } from 'xstate'

import { randomNumber } from '../../../../services/RandomNumber'
import { BOT_ACTION_DELAY } from '../../../config'
import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import { GameEvent, GameState, isToolCardInstance } from '../../../types'
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
        entry: enqueueActions(({ event, context, context: { game }, enqueue }) => {
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
                eventCardsThatCanBePlayed: botLogic.getNumberOfEventCardsToPlay(
                  game,
                  currentPlayerId
                ),
                toolCardsThatCanBePlayed: botLogic.getNumberOfToolCardsToPlay(
                  game,
                  currentPlayerId
                ),
              }

              enqueue.assign({ ...context, game })
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
          }
        }),
        always: 'checkingCropsToPlay',
      },

      checkingCropsToPlay: {
        always: [
          {
            guard: ({ context }) => context.cropsToPlayDuringBotTurn > 0,
            target: 'waitingForActionCompletion',
            actions: enqueueActions(({ context: { game }, enqueue }) => {
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
            }),
          },
          {
            target: 'checkingWaterToPlay',
          },
        ],
      },

      checkingWaterToPlay: {
        entry: enqueueActions(({ context, context: { game }, enqueue }) => {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const fieldCropIndicesToWaterDuringBotTurn = botLogic.getCropCardIndicesToWater(game, currentPlayerId)

            enqueue.assign({
                ...context,
                fieldCropIndicesToWaterDuringBotTurn
            })
        }),
        always: [
          {
            guard: ({ context }) => context.fieldCropIndicesToWaterDuringBotTurn.length > 0,
            target: 'waitingForActionCompletion',
            actions: enqueueActions(({ context: { game }, enqueue }) => {
                const { currentPlayerId } = game
                assertCurrentPlayer(currentPlayerId)

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
            })
          },
          {
            target: 'checkingEventsToPlay'
          }
        ]
      },

      checkingEventsToPlay: {
        always: [
            {
                guard: ({ context }) => context.eventCardsThatCanBePlayed > 0,
                target: 'waitingForActionCompletion',
                actions: enqueueActions(({ context: { game }, enqueue }) => {
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
                })
            },
            {
                target: 'checkingToolsToPlay'
            }
        ]
      },

      checkingToolsToPlay: {
          always: [
              {
                  guard: ({ context }) => context.toolCardsThatCanBePlayed > 0,
                  target: 'waitingForActionCompletion',
                  actions: enqueueActions(({ context: { game }, enqueue }) => {
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
                  })
              },
              {
                  target: 'checkingCropsToHarvest'
              }
          ]
      },

      checkingCropsToHarvest: {
          entry: enqueueActions(({ context, context: { game }, enqueue }) => {
              const { currentPlayerId } = game
              assertCurrentPlayer(currentPlayerId)

              const cropCardIndicesToHarvest = botLogic.getCropCardIndicesToHarvest(
                game,
                currentPlayerId
              )

              enqueue.assign({
                  ...context,
                  cropCardIndicesToHarvest
              })
          }),
          always: [
              {
                  guard: ({ context }) => context.cropCardIndicesToHarvest.length > 0,
                  target: 'waitingForActionCompletion',
                  actions: enqueueActions(({ context, context: { game }, enqueue }) => {
                      const { currentPlayerId } = game
                      assertCurrentPlayer(currentPlayerId)

                      enqueue.raise(
                        {
                          type: GameEvent.HARVEST_CROP,
                          playerId: currentPlayerId,
                          cropIdxInFieldToHarvest: context.cropCardIndicesToHarvest[0],
                        },
                        {
                          delay: BOT_ACTION_DELAY,
                        }
                      )
                  })
              },
              {
                  target: 'endingTurn'
              }
          ]
      },

      endingTurn: {
          entry: enqueueActions(({ enqueue }) => {
             enqueue.raise({
                 type: GameEvent.START_TURN
             })
          }),
          type: 'final'
      },

      waitingForActionCompletion: {
          // Just wait for the raised event to trigger parent transition
      }
    },
  },
}
