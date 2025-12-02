import { enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { updatePlayedCrop } from '../../../reducers/update-played-crop'
import {
  MatchEvent,
  MatchState,
  IPlayedCrop,
  isWaterCardInstance,
  ShellNotificationType,
} from '../../../types'
import { assertCurrentPlayer, assertIsPlayedCrop } from '../../../types/guards'
import { MatchStateCorruptError } from '../errors'

import { RulesMachineConfig } from './types'

export const performingBotCropWateringState: RulesMachineConfig['states'] = {
  [MatchState.PERFORMING_BOT_CROP_WATERING]: {
    on: {
      [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        MatchState.PERFORMING_BOT_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        context: {
          match,
          botState: { fieldCropIndicesToWaterDuringTurn },
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        const { currentPlayerId } = match
        assertCurrentPlayer(currentPlayerId)

        const waterCardInHandIdx = match.table.players[
          currentPlayerId
        ].hand.findIndex(cardInstance => {
          return isWaterCardInstance(cardInstance)
        })

        const [cropIdxInFieldToWater] = fieldCropIndicesToWaterDuringTurn

        if (cropIdxInFieldToWater === undefined) {
          throw new MatchStateCorruptError(
            `fieldCropIndicesToWaterDuringTurn is empty in ${MatchState.PERFORMING_BOT_CROP_WATERING}`
          )
        }

        const playedCrop =
          match.table.players[currentPlayerId].field.crops[
            cropIdxInFieldToWater
          ]

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
          type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION,
        })

        enqueue.assign({ match })
      }
    ),
  },
}
