import { enqueueActions } from 'xstate'

import { GameEvent, GameState, ShellNotificationType } from '../../../types'
import { assertCurrentPlayer, assertIsPlayedCrop } from '../../../types/guards'
import { harvestCrop } from '../../../reducers/harvest-crop'

import { RulesMachineConfig } from './types'

export const performingBotCropHarvestingState: RulesMachineConfig['states'] = {
  [GameState.PERFORMING_BOT_CROP_HARVESTING]: {
    on: {
      [GameEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        GameState.PERFORMING_BOT_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        context: {
          game,
          botState: {
            cropCardIndicesToHarvest: [cropCardIdxToHarvest],
          },
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        const { currentPlayerId } = game
        assertCurrentPlayer(currentPlayerId)

        const plantedCrop =
          game.table.players[currentPlayerId].field.crops[cropCardIdxToHarvest]

        assertIsPlayedCrop(plantedCrop, cropCardIdxToHarvest)

        game = harvestCrop(game, currentPlayerId, cropCardIdxToHarvest)

        triggerNotification({
          type: ShellNotificationType.CROP_HARVESTED,
          payload: {
            cropHarvested: plantedCrop.instance,
          },
        })

        enqueue.raise({
          type: GameEvent.PROMPT_BOT_FOR_TURN_ACTION,
        })

        enqueue.assign({ game })
      }
    ),
  },
}
