import { enqueueActions } from 'xstate'

import * as cards from '../../../cards'
import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { updatePlayedCrop } from '../../../reducers/update-played-crop'
import { GameEvent, GameState, IPlayedCrop, isWaterCard } from '../../../types'
import { assertCurrentPlayer, assertIsCardId } from '../../../types/guards'
import { GameStateCorruptError } from '../errors'

import { RulesMachineConfig } from './types'

export const performingBotCropWateringState: RulesMachineConfig['states'] = {
  [GameState.PERFORMING_BOT_CROP_WATERING]: {
    on: {
      [GameEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        GameState.PERFORMING_BOT_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        context: { game, fieldCropIndicesToWaterDuringBotTurn },
        enqueue,
      }) => {
        const { currentPlayerId } = game
        assertCurrentPlayer(currentPlayerId)

        const waterCardInHandIdx = game.table.players[
          currentPlayerId
        ].hand.findIndex(cardId => {
          assertIsCardId(cardId)
          const card = cards[cardId]

          return isWaterCard(card)
        })

        const [cropIdxInFieldToWater] = fieldCropIndicesToWaterDuringBotTurn

        if (cropIdxInFieldToWater === undefined) {
          throw new GameStateCorruptError(
            `fieldCropIndicesToWaterDuringBotTurn is empty in ${GameState.PERFORMING_BOT_CROP_WATERING}`
          )
        }

        const playedCrop =
          game.table.players[currentPlayerId].field.crops[cropIdxInFieldToWater]

        const updatedPlayedCrop: IPlayedCrop = {
          ...playedCrop,
          wasWateredTuringTurn: true,
          waterCards: playedCrop.waterCards + 1,
        }

        game = updatePlayedCrop(
          game,
          currentPlayerId,
          cropIdxInFieldToWater,
          updatedPlayedCrop
        )

        game = moveFromHandToDiscardPile(
          game,
          currentPlayerId,
          waterCardInHandIdx
        )

        enqueue.raise({
          type: GameEvent.PROMPT_BOT_FOR_TURN_ACTION,
        })

        enqueue.assign({ game })
      }
    ),
  },
}
