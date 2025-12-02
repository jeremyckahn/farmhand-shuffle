import { enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { updatePlayedCrop } from '../../../reducers/update-played-crop'
import {
  MatchEvent,
  MatchState,
  MatchStateGuard,
  IPlayedCrop,
  ShellNotificationType,
} from '../../../types'
import { assertIsPlayedCrop } from '../../../types/guards'
import { defaultSelectedWaterCardInHandIdx } from '../constants'

import { RulesMachineConfig } from './types'

export const playerWateringCropState: RulesMachineConfig['states'] = {
  [MatchState.PLAYER_WATERING_CROP]: {
    on: {
      [MatchEvent.SELECT_CROP_TO_WATER]: {
        target: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        guard: MatchStateGuard.IS_SELECTED_IDX_VALID,
      },

      [MatchEvent.OPERATION_ABORTED]: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(({ event, context: { match }, enqueue }) => {
      switch (event.type) {
        case MatchEvent.PLAY_WATER: {
          const { cardIdx } = event
          match = {
            ...match,
            selectedWaterCardInHandIdx: cardIdx,
          }

          break
        }

        default:
      }

      enqueue.assign({ match })
    }),

    exit: enqueueActions(
      ({
        event,
        context: {
          match,
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        let { selectedWaterCardInHandIdx } = match

        switch (event.type) {
          case MatchEvent.SELECT_CROP_TO_WATER: {
            const { playerId, waterCardInHandIdx, cropIdxInFieldToWater } =
              event

            const playedCrop =
              match.table.players[playerId].field.crops[cropIdxInFieldToWater]

            assertIsPlayedCrop(playedCrop, cropIdxInFieldToWater)

            const newPlayedCrop: IPlayedCrop = {
              ...playedCrop,
              wasWateredDuringTurn: true,
              waterCards: playedCrop.waterCards + 1,
            }

            match = updatePlayedCrop(
              match,
              playerId,
              cropIdxInFieldToWater,
              newPlayedCrop
            )

            match = moveFromHandToDiscardPile(
              match,
              playerId,
              waterCardInHandIdx
            )

            selectedWaterCardInHandIdx = defaultSelectedWaterCardInHandIdx

            triggerNotification({
              type: ShellNotificationType.CROP_WATERED,
              payload: {
                cropWatered: playedCrop.instance,
              },
            })

            break
          }

          case MatchEvent.OPERATION_ABORTED: {
            selectedWaterCardInHandIdx = defaultSelectedWaterCardInHandIdx
            break
          }

          default:
        }

        enqueue.assign({
          match: {
            ...match,
            selectedWaterCardInHandIdx,
          },
        })
      }
    ),
  },
}
