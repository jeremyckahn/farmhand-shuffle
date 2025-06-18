import { enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { updatePlayedCrop } from '../../../reducers/update-played-crop'
import {
  GameEvent,
  GameState,
  IPlayedCrop,
  ShellNotificationType,
} from '../../../types'
import { assertIsPlayedCrop } from '../../../types/guards'
import { defaultSelectedWaterCardInHandIdx } from '../constants'

import { RulesMachineConfig } from './types'

export const playerWateringCropState: RulesMachineConfig['states'] = {
  [GameState.PLAYER_WATERING_CROP]: {
    on: {
      [GameEvent.SELECT_CROP_TO_WATER]:
        GameState.WAITING_FOR_PLAYER_TURN_ACTION,

      [GameEvent.OPERATION_ABORTED]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(
      ({ event, context: { selectedWaterCardInHandIdx }, enqueue }) => {
        switch (event.type) {
          case GameEvent.PLAY_WATER: {
            const { cardIdx } = event
            selectedWaterCardInHandIdx = cardIdx

            break
          }

          default:
        }

        enqueue.assign({ selectedWaterCardInHandIdx })
      }
    ),

    exit: enqueueActions(
      ({
        event,
        context: {
          game,
          selectedWaterCardInHandIdx,
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        switch (event.type) {
          case GameEvent.SELECT_CROP_TO_WATER: {
            try {
              const { playerId, waterCardInHandIdx, cropIdxInFieldToWater } =
                event

              const playedCrop =
                game.table.players[playerId].field.crops[cropIdxInFieldToWater]

              assertIsPlayedCrop(playedCrop, cropIdxInFieldToWater)

              const newPlayedCrop: IPlayedCrop = {
                ...playedCrop,
                wasWateredDuringTurn: true,
                waterCards: playedCrop.waterCards + 1,
              }

              game = updatePlayedCrop(
                game,
                playerId,
                cropIdxInFieldToWater,
                newPlayedCrop
              )

              game = moveFromHandToDiscardPile(
                game,
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
            } catch (e) {
              console.error(e)

              enqueue.assign({
                selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
              })

              return
            }

            break
          }

          case GameEvent.OPERATION_ABORTED: {
            selectedWaterCardInHandIdx = defaultSelectedWaterCardInHandIdx
            break
          }

          default:
        }

        enqueue.assign({ game, selectedWaterCardInHandIdx })
      }
    ),
  },
}
