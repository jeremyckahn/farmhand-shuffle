import { assertEvent, enqueueActions } from 'xstate'

import { moveCardFromHandToField } from '../../../reducers/move-card-from-hand-to-field'
import {
  CardType,
  isToolCardInstance,
  MatchEvent,
  MatchState,
  MatchStateGuard,
  ShellNotificationType,
} from '../../../types'
import { lookup } from '../../Lookup'
import { defaultSelectedWaterCardInHandIdx } from '../constants'

import { RulesMachineConfig } from './types'

export const plantingCardState: RulesMachineConfig['states'] = {
  [MatchState.PLANTING_CARD]: {
    on: {
      [MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION]: [
        {
          guard: MatchStateGuard.IS_SETUP_PHASE,
          target: MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
        },
        { target: MatchState.WAITING_FOR_PLAYER_TURN_ACTION },
      ],

      [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        MatchState.PERFORMING_BOT_TURN_ACTION,

      [MatchEvent.OPERATION_ABORTED]: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        event,
        context: {
          botState,
          botState: { cropsToPlayDuringTurn, toolCardsThatCanBePlayed },
          match,
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        assertEvent(event, MatchEvent.SELECT_CARD_POSITION)

        const { playerId, cardIdxInHand, fieldIdxToPlace } = event

        try {
          const cardInstance = lookup.getCardFromHand(
            match,
            playerId,
            cardIdxInHand
          )

          match = moveCardFromHandToField(
            match,
            playerId,
            cardIdxInHand,
            fieldIdxToPlace
          )

          const { currentPlayerId, sessionOwnerPlayerId } = match

          if (currentPlayerId === sessionOwnerPlayerId) {
            if (isToolCardInstance(cardInstance)) {
              triggerNotification({
                type: ShellNotificationType.TOOL_CARD_PLAYED,
                payload: {
                  toolCard: cardInstance,
                },
              })
            }

            enqueue.raise({
              type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION,
            })
          } else {
            switch (cardInstance.type) {
              case CardType.CROP: {
                if (cropsToPlayDuringTurn > 0) {
                  cropsToPlayDuringTurn--
                }

                break
              }

              case CardType.TOOL: {
                if (toolCardsThatCanBePlayed > 0) {
                  toolCardsThatCanBePlayed--
                }
              }
            }

            enqueue.raise({ type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION })
          }
        } catch (e) {
          console.error(e)
          enqueue.raise({ type: MatchEvent.OPERATION_ABORTED })

          return
        }

        enqueue.assign({
          match,
          botState: {
            ...botState,
            cropsToPlayDuringTurn,
            toolCardsThatCanBePlayed,
          },
        })
      }
    ),

    exit: enqueueActions(({ event, context, enqueue }) => {
      let { match } = context

      switch (event.type) {
        case MatchEvent.OPERATION_ABORTED: {
          match = {
            ...match,
            selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
          }
          break
        }

        default:
      }

      enqueue.assign({ match })
    }),
  },
}
