import { enqueueActions } from 'xstate'

import { randomNumber } from '../../../../services/RandomNumber'
import { toolCards } from '../../../cards'
import { BOT_ACTION_DELAY, STANDARD_FIELD_SIZE } from '../../../config'
import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import {
  BotTurnActionState,
  MatchEvent,
  MatchState,
  isToolCardInstance,
} from '../../../types'
import { assertCurrentPlayer, assertIsToolCardId } from '../../../types/guards'
import { botLogic } from '../../BotLogic'
import { lookup } from '../../Lookup'
import { GameStateCorruptError, MatchStateCorruptError } from '../errors'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'
import { withBotErrorHandling } from './withBotErrorHandling'

export const performingBotTurnActionState: RulesMachineConfig['states'] = {
  [MatchState.PERFORMING_BOT_TURN_ACTION]: {
    initial: BotTurnActionState.INITIALIZING,

    exit: enqueueActions(({ event, context: { match }, enqueue }) => {
      match = recordCardPlayEvents(match, event)
      enqueue.assign({ match })
    }),

    on: {
      [MatchEvent.PLAYER_RAN_OUT_OF_FUNDS]: MatchState.GAME_OVER,

      [MatchEvent.SELECT_CARD_POSITION]: MatchState.PLANTING_CROP,

      [MatchEvent.PLAY_WATER]: MatchState.PERFORMING_BOT_CROP_WATERING,

      [MatchEvent.PLAY_EVENT]: MatchState.PLAYING_EVENT,

      [MatchEvent.PLAY_TOOL]: MatchState.PLAYING_TOOL,

      [MatchEvent.HARVEST_CROP]: MatchState.PERFORMING_BOT_CROP_HARVESTING,

      [MatchEvent.START_TURN]: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    states: {
      [BotTurnActionState.INITIALIZING]: {
        on: {
          [MatchEvent.BOT_TURN_INITIALIZED]: BotTurnActionState.PLAYING_CROPS,
        },
        entry: enqueueActions(
          withBotErrorHandling(
            ({ event, context, context: { botState, match }, enqueue }) => {
              switch (event.type) {
                case MatchEvent.START_TURN: {
                  const previousTurnMatchState = match

                  match = incrementPlayer(match)

                  const { currentPlayerId } = match

                  assertCurrentPlayer(currentPlayerId)

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
            BotTurnActionState.PLAYING_WATER,
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

                assertCurrentPlayer(currentPlayerId)

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

                enqueue.raise(
                  {
                    type: MatchEvent.PLAY_CROP,
                    playerId: currentPlayerId,
                    cardIdx,
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

                assertCurrentPlayer(currentPlayerId)

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
            }
          )
        ),
      },

      [BotTurnActionState.PLAYING_WATER]: {
        on: {
          [MatchEvent.BOT_TURN_PHASE_COMPLETE]:
            BotTurnActionState.PLAYING_EVENTS,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, match }, enqueue }) => {
            const { currentPlayerId } = match

            assertCurrentPlayer(currentPlayerId)

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
                    cardIdx: waterCardIdxsInPlayerHand[0],
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

              assertCurrentPlayer(currentPlayerId)

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
                  cardIdx: eventCardIdxToPlay,
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

              assertCurrentPlayer(currentPlayerId)

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

              if (!toolCardInstance) {
                throw new GameStateCorruptError('toolCardInstance is undefined')
              }

              if (!(toolCardInstance.id in toolCards)) {
                throw new GameStateCorruptError('')
              }

              assertIsToolCardId(toolCardInstance.id)

              const toolCard = toolCards[toolCardInstance.id]

              // FIXME: Test that skipping over a plantable tool cards in the case of full field does not cause a crash
              if (
                !toolCard.isPlantable ||
                (toolCard.isPlantable &&
                  lookup.fullPlots(match, currentPlayerId).length <
                    STANDARD_FIELD_SIZE)
              ) {
                enqueue.raise(
                  {
                    type: MatchEvent.PLAY_TOOL,
                    cardIdx: toolCardIdxToPlay,
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
          })
        ),
      },

      [BotTurnActionState.HARVESTING_CROPS]: {
        on: {
          [MatchEvent.BOT_TURN_PHASE_COMPLETE]: BotTurnActionState.DONE,
        },
        entry: enqueueActions(
          withBotErrorHandling(({ context: { botState, match }, enqueue }) => {
            const { currentPlayerId } = match

            assertCurrentPlayer(currentPlayerId)

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
