import { enqueueActions } from 'xstate'

import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_CARDS_TO_DRAW_AT_TURN_START,
} from '../../../config'
import { harvestCrop } from '../../../reducers/harvest-crop'
import { incrementPlayer } from '../../../reducers/increment-player'
import { moveFromFieldToDiscardPile } from '../../../reducers/move-from-field-to-discard-pile'
import { removeTurnCardsPlayed } from '../../../reducers/remove-turn-cards-played'
import { startTurn } from '../../../reducers/start-turn'
import {
  isToolCardInstance,
  MatchEvent,
  MatchState,
  ShellNotificationType,
} from '../../../types'
import {
  assertCurrentPlayer,
  assertIsNonNullable,
  isPlayedCrop,
} from '../../../types/guards'
import { lookup } from '../../Lookup'
import { InvalidCardError, PlayerOutOfFundsError } from '../errors'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'

export const waitingForPlayerTurnActionState: RulesMachineConfig['states'] = {
  [MatchState.WAITING_FOR_PLAYER_TURN_ACTION]: {
    on: {
      [MatchEvent.PLAYER_RAN_OUT_OF_FUNDS]: MatchState.GAME_OVER,

      [MatchEvent.PLAY_CROP]: MatchState.CHOOSING_CARD_POSITION,

      [MatchEvent.PLAY_EVENT]: MatchState.PLAYING_EVENT,

      [MatchEvent.PLAY_WATER]: MatchState.PLAYER_WATERING_CROP,

      [MatchEvent.PLAY_TOOL]: MatchState.PLAYING_TOOL,

      [MatchEvent.START_TURN]: MatchState.PERFORMING_BOT_TURN_ACTION,

      [MatchEvent.HARVEST_CROP]: {
        actions: enqueueActions(
          ({
            event,
            enqueue,
            context: {
              match,
              shell: { triggerNotification },
            },
          }) => {
            const { playerId, cropIdxInFieldToHarvest } = event

            const playedCrop = lookup.getPlayedCardFromField(
              match,
              playerId,
              cropIdxInFieldToHarvest
            )

            match = harvestCrop(match, playerId, cropIdxInFieldToHarvest)

            if (!isPlayedCrop(playedCrop)) {
              throw new InvalidCardError(
                `${playedCrop.instance.id} is not IPlayedCrop`
              )
            }

            triggerNotification({
              type: ShellNotificationType.CROP_HARVESTED,
              payload: {
                cropHarvested: playedCrop.instance,
              },
            })

            enqueue.assign({ match })
          }
        ),
      },

      // TODO: Implement strategic card discarding for bots
      [MatchEvent.DISCARD_CARD_FROM_FIELD]: {
        actions: enqueueActions(
          ({
            event,
            enqueue,
            context: {
              match,
              shell: { triggerNotification },
            },
          }) => {
            const { playerId, cardIdxInField } = event

            const playedCard = lookup.getPlayedCardFromField(
              match,
              playerId,
              cardIdxInField
            )

            match = moveFromFieldToDiscardPile(match, playerId, cardIdxInField)

            triggerNotification({
              type: ShellNotificationType.CARD_DISCARDED,
              payload: {
                cardDiscarded: playedCard.instance,
              },
            })

            enqueue.assign({ match })
          }
        ),
      },
    },

    entry: enqueueActions(({ event, context, context: { match }, enqueue }) => {
      {
        try {
          switch (event.type) {
            case MatchEvent.START_TURN: {
              match = {
                ...match,
                cardsToDrawAtTurnStart: STANDARD_CARDS_TO_DRAW_AT_TURN_START,
              }
              const previousTurnMatchState = match

              match = incrementPlayer(match)
              const { currentPlayerId } = match

              assertCurrentPlayer(currentPlayerId)

              const previousTurnStateForCurrentPlayer = lookup.getPlayer(
                previousTurnMatchState,
                currentPlayerId
              )

              for (const turnCardPlayed of previousTurnStateForCurrentPlayer.cardsPlayedDuringTurn) {
                if (
                  isToolCardInstance(turnCardPlayed) &&
                  turnCardPlayed.onStartFollowingTurn
                ) {
                  const newContext = turnCardPlayed.onStartFollowingTurn({
                    ...context,
                    // NOTE: Updated match instance is passed explicitly here so
                    // that the stale context.match reference is not used.
                    match,
                  })

                  match = newContext.match
                }
              }

              match = {
                ...match,
                eventCardsThatCanBePlayed:
                  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
              }

              match = startTurn(
                match,
                currentPlayerId,
                match.cardsToDrawAtTurnStart
              )

              const currentPlayer = match.table.players[currentPlayerId]

              assertIsNonNullable(currentPlayer)

              for (let i = 0; i < currentPlayer.field.cards.length; i++) {
                const card = currentPlayer.field.cards[i]

                if (
                  card &&
                  isToolCardInstance(card.instance) &&
                  card.instance.applyDailyEffect
                ) {
                  context = card.instance.applyDailyEffect(
                    { ...context, match },
                    i
                  )
                  match = context.match
                }
              }

              break
            }

            case MatchEvent.OPERATION_ABORTED: {
              const { currentPlayerId } = match

              assertCurrentPlayer(currentPlayerId)

              match = removeTurnCardsPlayed(match, currentPlayerId, 1)

              break
            }

            default:
          }
        } catch (error) {
          if (error instanceof PlayerOutOfFundsError) {
            const { currentPlayerId } = match

            assertCurrentPlayer(currentPlayerId)

            enqueue.raise({
              type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS,
              playerId: currentPlayerId,
            })
          } else {
            console.error(error)
          }
        }

        enqueue.assign({
          ...context,
          match,
        })
      }
    }),

    exit: enqueueActions(({ event, context: { match }, enqueue }) => {
      {
        match = recordCardPlayEvents(match, event)

        enqueue.assign({ match })
      }
    }),
  },
}
