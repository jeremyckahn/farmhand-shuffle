import { enqueueActions } from 'xstate'

import { rules } from '..'
import { randomNumber } from '../../../../services/RandomNumber'
import { toolCards } from '../../../cards'
import { BOT_ACTION_DELAY, STANDARD_FIELD_SIZE } from '../../../config'
import { harvestCrop } from '../../../reducers/harvest-crop'
import { incrementPlayer } from '../../../reducers/increment-player'
import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { startTurn } from '../../../reducers/start-turn'
import { updatePlayedCrop } from '../../../reducers/update-played-crop'
import {
  BotTurnActionState,
  IPlayedCrop,
  MatchEvent,
  MatchState,
  ShellNotificationType,
  isToolCardInstance,
  isWaterCardInstance,
} from '../../../types'
import {
  assertIsNonNullable,
  assertIsPlayedCrop,
  assertIsToolCardId,
} from '../../../types/assertions'
import { botLogic } from '../../BotLogic'
import { lookup } from '../../Lookup'
import { GameStateCorruptError, MatchStateCorruptError } from '../errors'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'
import { withBotErrorHandling } from './withBotErrorHandling'

export const performingBotTurnActionState: RulesMachineConfig['states'] = {
  [MatchState.PERFORMING_BOT_TURN_ACTION]: {
    initial: BotTurnActionState.INITIALIZING,

    exit: enqueueActions(({ event, context: { botState, match }, enqueue }) => {
      match = recordCardPlayEvents(match, event)

      // NOTE: Some events (SELECT_CARD_POSITION, PLAY_EVENT, PLAY_TOOL) hand
      // control off to a state shared with the player, exiting
      // MatchState.PERFORMING_BOT_TURN_ACTION entirely. Recording which bot
      // turn phase was in progress here, in one place, lets
      // BotTurnActionState.INITIALIZING resume that phase instead of
      // restarting from BotTurnActionState.PLAYING_CROPS.
      let { currentBotTurnPhase } = botState

      switch (event.type) {
        case MatchEvent.SELECT_CARD_POSITION:
          currentBotTurnPhase = BotTurnActionState.PLAYING_CROPS
          break

        case MatchEvent.PLAY_EVENT:
          currentBotTurnPhase = BotTurnActionState.PLAYING_EVENTS
          break

        case MatchEvent.PLAY_TOOL:
          currentBotTurnPhase = BotTurnActionState.PLAYING_TOOLS
          break

        default:
      }

      enqueue.assign({ match, botState: { ...botState, currentBotTurnPhase } })
    }),

    on: {
      [MatchEvent.PLAYER_RAN_OUT_OF_FUNDS]: MatchState.GAME_OVER,

      [MatchEvent.SELECT_CARD_POSITION]: MatchState.PLANTING_CARD,

      [MatchEvent.PLAY_EVENT]: MatchState.PLAYING_EVENT,

      [MatchEvent.PLAY_TOOL]: MatchState.PLAYING_TOOL,

      [MatchEvent.START_TURN]: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    states: {
      [BotTurnActionState.INITIALIZING]: {
        on: {
          // NOTE: BotTurnActionState.WATERING_CROPS and .HARVESTING_CROPS
          // are not resumption targets here: unlike PLAYING_CROPS,
          // PLAYING_EVENTS, and PLAYING_TOOLS, their card-effect substates
          // (WATERING_CROP, HARVESTING_CROP) are nested directly under
          // PERFORMING_BOT_TURN_ACTION and never exit it, so this state is
          // never re-entered while those phases are in progress.
          [MatchEvent.BOT_TURN_INITIALIZED]: [
            {
              guard: ({ context: { botState } }) =>
                botState.currentBotTurnPhase ===
                BotTurnActionState.PLAYING_EVENTS,
              target: BotTurnActionState.PLAYING_EVENTS,
            },
            {
              guard: ({ context: { botState } }) =>
                botState.currentBotTurnPhase ===
                BotTurnActionState.PLAYING_TOOLS,
              target: BotTurnActionState.PLAYING_TOOLS,
            },
            // NOTE: Covers both a fresh MatchEvent.START_TURN (where
            // currentBotTurnPhase is reset to undefined below) and resuming
            // BotTurnActionState.PLAYING_CROPS after placing a crop.
            { target: BotTurnActionState.PLAYING_CROPS },
          ],
        },
        entry: enqueueActions(
          withBotErrorHandling(
            ({ event, context, context: { botState, match }, enqueue }) => {
              switch (event.type) {
                case MatchEvent.START_TURN: {
                  const previousTurnMatchState = match

                  match = incrementPlayer(match)

                  const { currentPlayerId } = match

                  assertIsNonNullable(currentPlayerId)

                  const previousTurnStateForCurrentPlayer =
                    previousTurnMatchState.table.players[currentPlayerId]

                  if (previousTurnStateForCurrentPlayer) {
                    for (const cardPlayedDuringTurn of previousTurnStateForCurrentPlayer.cardsPlayedDuringTurn) {
                      if (
                        isToolCardInstance(cardPlayedDuringTurn) &&
                        cardPlayedDuringTurn.onStartFollowingTurn
                      ) {
                        const newContext =
                          cardPlayedDuringTurn.onStartFollowingTurn({
                            ...context,
                            // NOTE: Updated match instance is passed explicitly
                            // here so that the stale context.match reference is not
                            // used.
                            match,
                          })

                        match = newContext.match
                      }
                    }
                  }

                  match = startTurn(
                    match,
                    currentPlayerId,
                    match.cardsToDrawAtTurnStart
                  )

                  context = rules.applyDailyEffects({ ...context, match })
                  match = context.match

                  match = {
                    ...match,
                    eventCardsThatCanBePlayed:
                      botLogic.getNumberOfEventCardsToPlay(
                        match,
                        currentPlayerId
                      ),
                  }
                  botState = {
                    ...botState,
                    cropsToPlayDuringTurn: botLogic.getNumberOfCropCardsToPlay(
                      match,
                      currentPlayerId
                    ),
                    currentBotTurnPhase: undefined,
                    toolCardsThatCanBePlayed:
                      botLogic.getNumberOfToolCardsToPlay(
                        match,
                        currentPlayerId
                      ),
                  }

                  break
                }

                default:
              }

              enqueue.assign({ botState, match })
              enqueue.raise({ type: MatchEvent.BOT_TURN_INITIALIZED })
            }
          )
        ),
      },

      [BotTurnActionState.PLAYING_CROPS]: {
        on: {
          [MatchEvent.PLAY_CROP]: BotTurnActionState.PLACING_CROP,

          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.WATERING_CROPS,
        },
        entry: enqueueActions(
          withBotErrorHandling(
            ({
              context: {
                botState: { cropsToPlayDuringTurn },
                match,
              },
              enqueue,
            }) => {
              const areCropsToPlay = cropsToPlayDuringTurn > 0

              if (areCropsToPlay) {
                const { currentPlayerId } = match

                assertIsNonNullable(currentPlayerId)

                const cropIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
                  match,
                  currentPlayerId
                )
                const cardIdxInHand =
                  randomNumber.chooseElement(cropIdxsInPlayerHand)

                if (cardIdxInHand === undefined) {
                  throw new MatchStateCorruptError(
                    `areCropsToPlay is true but there are no crops in the hand of bot player ${currentPlayerId}`
                  )
                }

                enqueue.raise(
                  {
                    type: MatchEvent.PLAY_CROP,
                    playerId: currentPlayerId,
                    cardIdxInHand,
                  },
                  { delay: BOT_ACTION_DELAY }
                )
              } else {
                enqueue.raise({ type: MatchEvent.BOT_TURN_PHASE_COMPLETE })
              }
            }
          )
        ),
      },

      [BotTurnActionState.PLACING_CROP]: {
        on: {
          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.PLAYING_CROPS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, match }, enqueue }) => {
            const { cropsToPlayDuringTurn } = botState
            const areCropsToPlay = cropsToPlayDuringTurn > 0

            if (areCropsToPlay) {
              const { currentPlayerId } = match

              assertIsNonNullable(currentPlayerId)

              const cropIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
                match,
                currentPlayerId
              )
              const cardIdx = randomNumber.chooseElement(cropIdxsInPlayerHand)

              if (cardIdx === undefined) {
                throw new MatchStateCorruptError(
                  `areCropsToPlay is true but there are no crops in the hand of bot player ${currentPlayerId}`
                )
              }

              const openFieldPositionIdx = botLogic.getOpenFieldPosition(
                match,
                currentPlayerId
              )

              if (typeof openFieldPositionIdx === 'undefined') {
                throw new GameStateCorruptError(
                  `${MatchEvent.BOT_TURN_PHASE_COMPLETE} event occurred for a full field`
                )
              }

              enqueue.raise(
                {
                  type: MatchEvent.SELECT_CARD_POSITION,
                  playerId: currentPlayerId,
                  cardIdxInHand: cardIdx,
                  fieldIdxToPlace: openFieldPositionIdx,
                },
                { delay: BOT_ACTION_DELAY }
              )
            } else {
              enqueue.raise({ type: MatchEvent.BOT_TURN_PHASE_COMPLETE })
            }
          })
        ),
      },

      [BotTurnActionState.WATERING_CROPS]: {
        on: {
          [MatchEvent.PLAY_WATER]: BotTurnActionState.WATERING_CROP,

          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.PLAYING_EVENTS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, match }, enqueue }) => {
            const { currentPlayerId } = match

            assertIsNonNullable(currentPlayerId)

            const fieldCropIndicesToWaterDuringTurn =
              botLogic.getCropCardIndicesToWater(match, currentPlayerId)
            const areWaterCardsToPlay =
              fieldCropIndicesToWaterDuringTurn.length > 0

            if (areWaterCardsToPlay) {
              const waterCardIdxsInPlayerHand =
                lookup.findWaterIndexesInPlayerHand(match, currentPlayerId)

              if (waterCardIdxsInPlayerHand[0] !== undefined) {
                enqueue.raise(
                  {
                    type: MatchEvent.PLAY_WATER,
                    cardIdxInHand: waterCardIdxsInPlayerHand[0],
                    playerId: currentPlayerId,
                  },
                  {
                    delay: BOT_ACTION_DELAY,
                  }
                )
              }
            } else {
              enqueue.raise({ type: MatchEvent.BOT_TURN_PHASE_COMPLETE })
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

      [BotTurnActionState.WATERING_CROP]: {
        on: {
          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.WATERING_CROPS,
        },
        entry: enqueueActions(
          ({
            event,
            context: {
              match,
              botState: { fieldCropIndicesToWaterDuringTurn },
              shell: { triggerNotification },
            },
            enqueue,
          }) => {
            match = recordCardPlayEvents(match, event)

            const { currentPlayerId } = match

            assertIsNonNullable(currentPlayerId)

            const player = lookup.getPlayer(match, currentPlayerId)
            const waterCardInHandIdx = player.hand.findIndex(cardInstance =>
              isWaterCardInstance(cardInstance)
            )

            const [cropIdxInFieldToWater] = fieldCropIndicesToWaterDuringTurn

            assertIsNonNullable(
              cropIdxInFieldToWater,
              `fieldCropIndicesToWaterDuringTurn is empty in ${BotTurnActionState.WATERING_CROP}`
            )

            const playedCrop = player.field.cards[cropIdxInFieldToWater]

            assertIsPlayedCrop(playedCrop, cropIdxInFieldToWater)

            const updatedPlayedCrop: IPlayedCrop = {
              ...playedCrop,
              wasWateredDuringTurn: true,
              waterCards: playedCrop.waterCards + 1,
            }

            match = updatePlayedCrop(
              match,
              currentPlayerId,
              cropIdxInFieldToWater,
              updatedPlayedCrop
            )

            match = moveFromHandToDiscardPile(
              match,
              currentPlayerId,
              waterCardInHandIdx
            )

            triggerNotification({
              type: ShellNotificationType.CROP_WATERED,
              payload: {
                cropWatered: playedCrop.instance,
              },
            })

            enqueue.raise({
              type: MatchEvent.BOT_TURN_PHASE_COMPLETE,
            })

            enqueue.assign({ match })
          }
        ),
      },

      [BotTurnActionState.PLAYING_EVENTS]: {
        on: {
          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.PLAYING_TOOLS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { match }, enqueue }) => {
            const areEventCardsToPlay = match.eventCardsThatCanBePlayed > 0

            if (areEventCardsToPlay) {
              const { currentPlayerId } = match

              assertIsNonNullable(currentPlayerId)

              const eventCardIdxToPlay = botLogic.getEventCardIndexToPlay(
                match,
                currentPlayerId
              )

              if (eventCardIdxToPlay === undefined) {
                throw new MatchStateCorruptError(
                  `areEventCardsToPlay is true but there are no events in the hand of bot player ${currentPlayerId}`
                )
              }

              enqueue.raise(
                {
                  type: MatchEvent.PLAY_EVENT,
                  cardIdxInHand: eventCardIdxToPlay,
                  playerId: currentPlayerId,
                },
                {
                  delay: BOT_ACTION_DELAY,
                }
              )
            } else {
              enqueue.raise({ type: MatchEvent.BOT_TURN_PHASE_COMPLETE })
            }
          })
        ),
      },

      [BotTurnActionState.PLAYING_TOOLS]: {
        on: {
          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.HARVESTING_CROPS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, match }, enqueue }) => {
            const areToolsToPlay = botState.toolCardsThatCanBePlayed > 0

            if (areToolsToPlay) {
              const { currentPlayerId } = match

              assertIsNonNullable(currentPlayerId)

              const toolCardIdxToPlay = botLogic.getToolCardIndexToPlay(
                match,
                currentPlayerId
              )

              if (toolCardIdxToPlay === undefined) {
                throw new MatchStateCorruptError(
                  `areToolsToPlay is true but there are no tools in the hand of bot player ${currentPlayerId}`
                )
              }

              const toolCardInstance =
                match.table.players[currentPlayerId]?.hand[toolCardIdxToPlay]

              assertIsNonNullable(
                toolCardInstance,
                'toolCardInstance is undefined'
              )
              assertIsToolCardId(toolCardInstance.id)

              const toolCard = toolCards[toolCardInstance.id]
              const isPlantableAndCanBePlayed =
                toolCard.isPlantable &&
                lookup.fullPlots(match, currentPlayerId).length <
                  STANDARD_FIELD_SIZE

              // NOTE: Currently, if the bot attempts to play a plantable tool
              // card but there is no room in the Field, the Tool phase of the
              // bot's turn ends. This prevents the potential playing of
              // non-plantable tools.
              //
              // TODO: Improve the logic to continue to play any non-plantable
              // tools when plantable tools are skipped.
              if (!toolCard.isPlantable || isPlantableAndCanBePlayed) {
                enqueue.raise(
                  {
                    type: MatchEvent.PLAY_TOOL,
                    cardIdxInHand: toolCardIdxToPlay,
                    playerId: currentPlayerId,
                  },
                  {
                    delay: BOT_ACTION_DELAY,
                  }
                )

                return
              }
            }

            enqueue.raise({ type: MatchEvent.BOT_TURN_PHASE_COMPLETE })
          })
        ),
      },

      [BotTurnActionState.HARVESTING_CROPS]: {
        on: {
          [MatchEvent.HARVEST_CROP]: BotTurnActionState.HARVESTING_CROP,

          [MatchEvent.BOT_TURN_PHASE_COMPLETE]: BotTurnActionState.DONE,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, match }, enqueue }) => {
            const { currentPlayerId } = match

            assertIsNonNullable(currentPlayerId)

            const cropCardIndicesToHarvest =
              botLogic.getCropCardIndicesToHarvest(match, currentPlayerId)
            const areCropsToHarvest = cropCardIndicesToHarvest.length > 0

            if (areCropsToHarvest) {
              if (cropCardIndicesToHarvest[0] !== undefined) {
                enqueue.raise(
                  {
                    type: MatchEvent.HARVEST_CROP,
                    playerId: currentPlayerId,
                    cropIdxInFieldToHarvest: cropCardIndicesToHarvest[0],
                  },
                  {
                    delay: BOT_ACTION_DELAY,
                  }
                )
              }
            } else {
              enqueue.raise({ type: MatchEvent.BOT_TURN_PHASE_COMPLETE })
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

      [BotTurnActionState.HARVESTING_CROP]: {
        on: {
          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.HARVESTING_CROPS,
        },
        entry: enqueueActions(
          ({
            context: {
              match,
              botState: {
                cropCardIndicesToHarvest: [cropCardIdxToHarvest],
              },
              shell: { triggerNotification },
            },
            enqueue,
          }) => {
            const { currentPlayerId } = match

            assertIsNonNullable(currentPlayerId)

            if (cropCardIdxToHarvest !== undefined) {
              const player = lookup.getPlayer(match, currentPlayerId)
              const plantedCrop = player.field.cards[cropCardIdxToHarvest]

              assertIsPlayedCrop(plantedCrop, cropCardIdxToHarvest)

              match = harvestCrop(match, currentPlayerId, cropCardIdxToHarvest)

              triggerNotification({
                type: ShellNotificationType.CROP_HARVESTED,
                payload: {
                  cropHarvested: plantedCrop.instance,
                },
              })
            }

            enqueue.raise({
              type: MatchEvent.BOT_TURN_PHASE_COMPLETE,
            })

            enqueue.assign({ match })
          }
        ),
      },

      [BotTurnActionState.DONE]: {
        entry: enqueueActions(({ enqueue }) => {
          enqueue.raise({
            type: MatchEvent.START_TURN,
          })
        }),
        type: 'final',
      },
    },
  },
}
