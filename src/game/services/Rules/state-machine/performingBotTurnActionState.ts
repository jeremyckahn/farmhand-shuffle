import { assertEvent, enqueueActions } from 'xstate'

import { randomNumber } from '../../../../services/RandomNumber'
import { BOT_ACTION_DELAY } from '../../../config'
import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import {
  BotTurnActionEvent,
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
      // FIXME: Finish this conversion
      [BotTurnActionState.PLANT_CROPS]: {
        on: {
          [BotTurnActionEvent.PHASE_COMPLETE]: BotTurnActionState.WATER_CROPS,
        },
        entry: enqueueActions(
          ({ event, context, context: { game }, enqueue }) => {
            assertEvent(event, GameEvent.START_TURN)

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const areCropsToPlay = context.cropsToPlayDuringBotTurn > 0

            if (areCropsToPlay) {
              const cropIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
                game,
                currentPlayerId
              )
              const cardIdx = randomNumber.chooseElement(cropIdxsInPlayerHand)

              /* c8 ignore start */
              if (cardIdx === undefined) {
                throw new GameStateCorruptError(
                  `areCropsToPlay is true but there are no crops in the hand of bot player ${currentPlayerId}`
                )
              }
              /* c8 ignore stop */

              enqueue.raise(
                {
                  type: GameEvent.PLAY_CROP,
                  playerId: currentPlayerId,
                  cardIdx,
                },
                { delay: BOT_ACTION_DELAY }
              )
            } else {
              context = {
                ...context,
                fieldCropIndicesToWaterDuringBotTurn:
                  botLogic.getCropCardIndicesToWater(game, currentPlayerId),
              }

              enqueue.raise({ type: BotTurnActionEvent.PHASE_COMPLETE })
            }

            enqueue.assign({
              ...context,
              game,
            })
          }
        ),
      },
      [BotTurnActionState.WATER_CROPS]: {
        on: {
          [BotTurnActionEvent.PHASE_COMPLETE]: BotTurnActionState.PLAY_EVENTS,
        },
        entry: enqueueActions(
          ({ event, context, context: { game }, enqueue }) => {
            assertEvent(event, BotTurnActionEvent.PHASE_COMPLETE)

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const areWaterCardsToPlay =
              context.fieldCropIndicesToWaterDuringBotTurn.length > 0

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
              enqueue.raise({ type: BotTurnActionEvent.PHASE_COMPLETE })
            }

            enqueue.assign({
              ...context,
              game,
            })
          }
        ),
      },
      [BotTurnActionState.PLAY_EVENTS]: {
        on: {
          [BotTurnActionEvent.PHASE_COMPLETE]: BotTurnActionState.PLAY_TOOLS,
        },
        entry: enqueueActions(
          ({ event, context, context: { game }, enqueue }) => {
            assertEvent(event, BotTurnActionEvent.PHASE_COMPLETE)

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            if (context.eventCardsThatCanBePlayed > 0) {
              const eventCardIdxToPlay = botLogic.getEventCardIndexToPlay(
                game,
                currentPlayerId
              )

              /* c8 ignore start */
              if (eventCardIdxToPlay === undefined) {
                throw new GameStateCorruptError(
                  `areEventCardsToPlay is true but there are no events in the hand of bot player ${currentPlayerId}`
                )
              }
              /* c8 ignore stop */

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
              enqueue.raise({ type: BotTurnActionEvent.PHASE_COMPLETE })
            }

            enqueue.assign({
              ...context,
              game,
            })
          }
        ),
      },
      [BotTurnActionState.PLAY_TOOLS]: {
        on: {
          [BotTurnActionEvent.PHASE_COMPLETE]: BotTurnActionState.HARVEST_CROPS,
        },
        entry: enqueueActions(
          ({ event, context, context: { game }, enqueue }) => {
            assertEvent(event, BotTurnActionEvent.PHASE_COMPLETE)

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            if (context.toolCardsThatCanBePlayed > 0) {
              const toolCardIdxToPlay = botLogic.getToolCardIndexToPlay(
                game,
                currentPlayerId
              )

              /* c8 ignore start */
              if (toolCardIdxToPlay === undefined) {
                throw new GameStateCorruptError(
                  `areToolsToPlay is true but there are no tool in the hand of bot player ${currentPlayerId}`
                )
              }
              /* c8 ignore stop */

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
              enqueue.raise({ type: BotTurnActionEvent.PHASE_COMPLETE })
            }

            enqueue.assign({
              ...context,
              game,
            })
          }
        ),
      },
      [BotTurnActionState.HARVEST_CROPS]: {
        on: {
          [BotTurnActionEvent.PHASE_COMPLETE]: BotTurnActionState.DONE,
        },
        entry: enqueueActions(
          ({ event, context, context: { game }, enqueue }) => {
            assertEvent(event, BotTurnActionEvent.PHASE_COMPLETE)

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            context = {
              ...context,
              cropCardIndicesToHarvest: botLogic.getCropCardIndicesToHarvest(
                game,
                currentPlayerId
              ),
            }

            const areCropsToHarvest =
              context.cropCardIndicesToHarvest.length > 0

            if (areCropsToHarvest) {
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
            } else {
              enqueue.raise({ type: BotTurnActionEvent.PHASE_COMPLETE })
            }

            enqueue.assign({
              ...context,
              game,
            })
          }
        ),
      },
      [BotTurnActionState.DONE]: {
        type: 'final',

        entry: enqueueActions(
          ({ event, context, context: { game }, enqueue }) => {
            assertEvent(event, BotTurnActionEvent.PHASE_COMPLETE)

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            // NOTE: Returns control back to the player
            enqueue.raise({
              type: GameEvent.START_TURN,
            })

            enqueue.assign({
              ...context,
              game,
            })
          }
        ),
      },
    },

    // TODO: Reimplement this as a child state machine: https://stately.ai/docs/parent-states#child-final-states
    entry: enqueueActions(({ event, context, context: { game }, enqueue }) => {
      {
        try {
          switch (event.type) {
            case GameEvent.START_TURN: {
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

              break
            }

            /* c8 ignore start */
            case GameEvent.OPERATION_ABORTED: {
              // const { currentPlayerId } = game
              // assertCurrentPlayer(currentPlayerId)
              //
              // game = removeTurnCardsPlayed(game, currentPlayerId, 1)
              //
              // break

              // NOTE: It is the responsibility of card implementations to,
              // when played by a bot, avoid initiating actions that might need
              // to be aborted. This may not be possible as card designs and
              // implementations evolve. In that case, the logic above should
              // be uncommented and tested. It is currently commented out
              // because there is no way to test the code path.
              throw new GameStateCorruptError(
                `Unhandled OPERATION_ABORTED event thrown by bot player ${game.currentPlayerId}`
              )
            }
            /* c8 ignore stop */

            default:
          }

          const { currentPlayerId } = game
          assertCurrentPlayer(currentPlayerId)

          const areCropsToPlay = context.cropsToPlayDuringBotTurn > 0
          let areWaterCardsToPlay = false
          let areCropsToHarvest = false
          let areEventCardsToPlay = false
          let areToolsToPlay = false

          // PHASE 1: Plant crops
          if (areCropsToPlay) {
            const cropIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
              game,
              currentPlayerId
            )
            const cardIdx = randomNumber.chooseElement(cropIdxsInPlayerHand)

            /* c8 ignore start */
            if (cardIdx === undefined) {
              throw new GameStateCorruptError(
                `areCropsToPlay is true but there are no crops in the hand of bot player ${currentPlayerId}`
              )
            }
            /* c8 ignore stop */

            enqueue.raise(
              {
                type: GameEvent.PLAY_CROP,
                playerId: currentPlayerId,
                cardIdx,
              },
              { delay: BOT_ACTION_DELAY }
            )
          } else {
            context = {
              ...context,
              fieldCropIndicesToWaterDuringBotTurn:
                botLogic.getCropCardIndicesToWater(game, currentPlayerId),
            }

            areWaterCardsToPlay =
              context.fieldCropIndicesToWaterDuringBotTurn.length > 0
          }

          // PHASE 2: Water crops
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
          }

          // PHASE 3: Play events
          if (!areCropsToPlay && !areWaterCardsToPlay) {
            if (context.eventCardsThatCanBePlayed > 0) {
              areEventCardsToPlay = true

              const eventCardIdxToPlay = botLogic.getEventCardIndexToPlay(
                game,
                currentPlayerId
              )

              /* c8 ignore start */
              if (eventCardIdxToPlay === undefined) {
                throw new GameStateCorruptError(
                  `areEventCardsToPlay is true but there are no events in the hand of bot player ${currentPlayerId}`
                )
              }
              /* c8 ignore stop */

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
          }

          // PHASE 4: Play tools
          if (!areCropsToPlay && !areWaterCardsToPlay && !areEventCardsToPlay) {
            if (context.toolCardsThatCanBePlayed > 0) {
              areToolsToPlay = true
              const toolCardIdxToPlay = botLogic.getToolCardIndexToPlay(
                game,
                currentPlayerId
              )

              /* c8 ignore start */
              if (toolCardIdxToPlay === undefined) {
                throw new GameStateCorruptError(
                  `areToolsToPlay is true but there are no tool in the hand of bot player ${currentPlayerId}`
                )
              }
              /* c8 ignore stop */

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
          }

          // PHASE 5: Harvest any mature crops
          if (
            !areCropsToPlay &&
            !areWaterCardsToPlay &&
            !areEventCardsToPlay &&
            !areToolsToPlay
          ) {
            context = {
              ...context,
              cropCardIndicesToHarvest: botLogic.getCropCardIndicesToHarvest(
                game,
                currentPlayerId
              ),
            }

            areCropsToHarvest = context.cropCardIndicesToHarvest.length > 0
          }

          if (areCropsToHarvest) {
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
          }

          // PHASE 6: If nothing left to do, end the turn
          const doActionsRemain =
            areCropsToPlay ||
            areWaterCardsToPlay ||
            areEventCardsToPlay ||
            areToolsToPlay ||
            areCropsToHarvest

          if (!doActionsRemain) {
            // NOTE: Returns control back to the player
            enqueue.raise({
              type: GameEvent.START_TURN,
            })
          }
        } catch (error) {
          if (error instanceof PlayerOutOfFundsError) {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            // FIXME: Port this to child state machine
            enqueue.raise({
              type: GameEvent.PLAYER_RAN_OUT_OF_FUNDS,
              playerId: currentPlayerId,
            })
            /* c8 ignore start */
          } else {
            console.error(error)
            throw new GameStateCorruptError('Unexpected bot logic error')
          }
          /* c8 ignore stop */
        }

        enqueue.assign({
          ...context,
          game,
        })
      }
    }),

    exit: enqueueActions(({ event, context: { game }, enqueue }) => {
      {
        game = recordCardPlayEvents(game, event)

        enqueue.assign({ game })
      }
    }),
  },
}
