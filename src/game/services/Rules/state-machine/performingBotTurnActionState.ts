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
import { GameStateCorruptError } from '../errors'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'
import { withBotErrorHandling } from './withBotErrorHandling'

export const performingBotTurnActionState: RulesMachineConfig['states'] = {
  [GameState.PERFORMING_BOT_TURN_ACTION]: {
    initial: BotTurnActionState.INITIALIZING,

    exit: enqueueActions(({ event, context: { game }, enqueue }) => {
      game = recordCardPlayEvents(game, event)
      enqueue.assign({ game })
    }),

    on: {
      [GameEvent.PLAYER_RAN_OUT_OF_FUNDS]: GameState.GAME_OVER,

      [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,

      [GameEvent.PLAY_WATER]: GameState.PERFORMING_BOT_CROP_WATERING,

      [GameEvent.PLAY_EVENT]: GameState.PLAYING_EVENT,

      [GameEvent.PLAY_TOOL]: GameState.PLAYING_TOOL,

      [GameEvent.HARVEST_CROP]: GameState.PERFORMING_BOT_CROP_HARVESTING,

      [GameEvent.START_TURN]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    states: {
      [BotTurnActionState.INITIALIZING]: {
        on: {
          [GameEvent.BOT_TURN_INITIALIZED]: BotTurnActionState.PLAYING_CROPS,
        },
        entry: enqueueActions(
          withBotErrorHandling(
            ({ event, context, context: { botState, game }, enqueue }) => {
              switch (event.type) {
                case GameEvent.START_TURN: {
                  const previousTurnGameState = game
                  game = incrementPlayer(game)

                  const { currentPlayerId } = game
                  assertCurrentPlayer(currentPlayerId)

                  const previousTurnStateForCurrentPlayer =
                    previousTurnGameState.table.players[currentPlayerId]

                  for (const cardPlayedDuringTurn of previousTurnStateForCurrentPlayer.cardsPlayedDuringTurn) {
                    if (
                      isToolCardInstance(cardPlayedDuringTurn) &&
                      cardPlayedDuringTurn.onStartFollowingTurn
                    ) {
                      const newContext =
                        cardPlayedDuringTurn.onStartFollowingTurn({
                          ...context,
                          // NOTE: Updated game instance is passed explicitly
                          // here so that the stale context.game reference is not
                          // used.
                          game,
                        })

                      game = newContext.game
                    }
                  }

                  game = startTurn(
                    game,
                    currentPlayerId,
                    game.cardsToDrawAtTurnStart
                  )

                  game = {
                    ...game,
                    eventCardsThatCanBePlayed:
                      botLogic.getNumberOfEventCardsToPlay(
                        game,
                        currentPlayerId
                      ),
                    toolCardsThatCanBePlayed:
                      botLogic.getNumberOfToolCardsToPlay(
                        game,
                        currentPlayerId
                      ),
                  }
                  botState = {
                    ...botState,
                    cropsToPlayDuringTurn: botLogic.getNumberOfCropCardsToPlay(
                      game,
                      currentPlayerId
                    ),
                  }

                  break
                }

                default:
              }

              enqueue.assign({ botState, game })
              enqueue.raise({ type: GameEvent.BOT_TURN_INITIALIZED })
            }
          )
        ),
      },

      [BotTurnActionState.PLAYING_CROPS]: {
        on: {
          [GameEvent.BOT_TURN_PHASE_COMPLETE]: BotTurnActionState.PLAYING_WATER,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, game }, enqueue }) => {
            const areCropsToPlay = botState.cropsToPlayDuringTurn > 0

            if (areCropsToPlay) {
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
            } else {
              enqueue.raise({ type: GameEvent.BOT_TURN_PHASE_COMPLETE })
            }
          })
        ),
      },

      [BotTurnActionState.PLAYING_WATER]: {
        on: {
          [GameEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.PLAYING_EVENTS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, game }, enqueue }) => {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const fieldCropIndicesToWaterDuringTurn =
              botLogic.getCropCardIndicesToWater(game, currentPlayerId)
            const areWaterCardsToPlay =
              fieldCropIndicesToWaterDuringTurn.length > 0

            if (areWaterCardsToPlay) {
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
            } else {
              enqueue.raise({ type: GameEvent.BOT_TURN_PHASE_COMPLETE })
            }

            enqueue.assign({
              botState: {
                ...botState,
                fieldCropIndicesToWaterDuringTurn,
              },
            })
          })
        ),
      },

      [BotTurnActionState.PLAYING_EVENTS]: {
        on: {
          [GameEvent.BOT_TURN_PHASE_COMPLETE]: BotTurnActionState.PLAYING_TOOLS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { game }, enqueue }) => {
            const areEventCardsToPlay = game.eventCardsThatCanBePlayed > 0

            if (areEventCardsToPlay) {
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
            } else {
              enqueue.raise({ type: GameEvent.BOT_TURN_PHASE_COMPLETE })
            }
          })
        ),
      },

      [BotTurnActionState.PLAYING_TOOLS]: {
        on: {
          [GameEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.HARVESTING_CROPS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { game }, enqueue }) => {
            const areToolsToPlay = game.toolCardsThatCanBePlayed > 0

            if (areToolsToPlay) {
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
            } else {
              enqueue.raise({ type: GameEvent.BOT_TURN_PHASE_COMPLETE })
            }
          })
        ),
      },

      [BotTurnActionState.HARVESTING_CROPS]: {
        on: {
          [GameEvent.BOT_TURN_PHASE_COMPLETE]: BotTurnActionState.DONE,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, game }, enqueue }) => {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const cropCardIndicesToHarvest =
              botLogic.getCropCardIndicesToHarvest(game, currentPlayerId)
            const areCropsToHarvest = cropCardIndicesToHarvest.length > 0

            if (areCropsToHarvest) {
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
            } else {
              enqueue.raise({ type: GameEvent.BOT_TURN_PHASE_COMPLETE })
            }

            enqueue.assign({
              botState: {
                ...botState,
                cropCardIndicesToHarvest,
              },
            })
          })
        ),
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
