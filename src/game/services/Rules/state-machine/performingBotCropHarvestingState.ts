import { enqueueActions } from 'xstate'

import { MatchEvent, MatchState, ShellNotificationType } from '../../../types'
import { assertCurrentPlayer, assertIsPlayedCrop } from '../../../types/guards'
import { harvestCrop } from '../../../reducers/harvest-crop'

import { RulesMachineConfig } from './types'

export const performingBotCropHarvestingState: RulesMachineConfig['states'] = {
  [MatchState.PERFORMING_BOT_CROP_HARVESTING]: {
    on: {
      [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        MatchState.PERFORMING_BOT_TURN_ACTION,
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
        assertCurrentPlayer(currentPlayerId)

        if (cropCardIdxToHarvest === undefined) {
          enqueue.raise({
            type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION,
          })
          return
        }

        const player = match.table.players[currentPlayerId]

        if (!player) {
          throw new Error(`Player not found: ${currentPlayerId}`)
        }

        const plantedCrop = player.field.crops[cropCardIdxToHarvest]

        assertIsPlayedCrop(plantedCrop, cropCardIdxToHarvest)

        match = harvestCrop(match, currentPlayerId, cropCardIdxToHarvest)

        triggerNotification({
          type: ShellNotificationType.CROP_HARVESTED,
          payload: {
            cropHarvested: plantedCrop.instance,
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
