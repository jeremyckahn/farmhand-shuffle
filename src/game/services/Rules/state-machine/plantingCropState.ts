import { assertEvent, enqueueActions } from 'xstate'

import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import { MatchEvent, MatchState } from '../../../types'
import { defaultSelectedWaterCardInHandIdx } from '../constants'

import { RulesMachineConfig } from './types'

export const plantingCropState: RulesMachineConfig['states'] = {
  [MatchState.PLANTING_CROP]: {
    on: {
      [MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        MatchState.WAITING_FOR_PLAYER_TURN_ACTION,

      [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        MatchState.PERFORMING_BOT_TURN_ACTION,

      [MatchEvent.OPERATION_ABORTED]: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        event,
        context: {
          botState,
          botState: { cropsToPlayDuringTurn },
          match,
        },
        enqueue,
      }) => {
        assertEvent(event, MatchEvent.PLAY_CROP)

        const { playerId, cardIdx } = event

        try {
          match = moveCropFromHandToField(match, playerId, cardIdx)

          const { currentPlayerId, sessionOwnerPlayerId } = match

          if (currentPlayerId === sessionOwnerPlayerId) {
            enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
          } else {
            if (cropsToPlayDuringTurn > 0) {
              cropsToPlayDuringTurn--
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
