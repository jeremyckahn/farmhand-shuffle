import * as cards from '../../../game/cards'
import { randomNumber } from '../../../services/RandomNumber'
import { STANDARD_FIELD_SIZE } from '../../config'
import { IGame, isCropCard, isWaterCard } from '../../types'
import { assertIsCardId } from '../../types/guards'
import { lookup } from '../Lookup'

export class BotLogicService {
  getNumberOfCropCardsToPlay(
    game: IGame,
    playerId: string,
    { minimumCropsToPlay = 0 }: { minimumCropsToPlay?: number } = {}
  ) {
    const cropCardIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
      game,
      playerId
    )

    const numberOfCropsToPlay = Math.max(
      minimumCropsToPlay,
      Math.floor(randomNumber.generate() * cropCardIdxsInPlayerHand.length)
    )

    const availableFieldSpace =
      STANDARD_FIELD_SIZE - game.table.players[playerId].field.crops.length

    const safeNumberOfCropsToPlay = Math.min(
      availableFieldSpace,
      numberOfCropsToPlay,
      cropCardIdxsInPlayerHand.length
    )

    return safeNumberOfCropsToPlay
  }

  getCropCardIndicesToWater(game: IGame, playerId: string) {
    const {
      field: { crops },
      hand,
    } = game.table.players[playerId]

    let fieldCropIdxsThatNeedWater: number[] = []
    const { length: numberOfWaterCardsInHand } = hand.filter(cardId => {
      assertIsCardId(cardId)

      return isWaterCard(cards[cardId])
    })

    for (let i = 0; i < crops.length; i++) {
      // NOTE: Prevents playing more water cards than there are in the player's hand
      if (fieldCropIdxsThatNeedWater.length === numberOfWaterCardsInHand) {
        break
      }

      const plantedCrop = crops[i]
      assertIsCardId(plantedCrop.id)
      const card = cards[plantedCrop.id]

      if (isCropCard(card)) {
        if (
          plantedCrop.waterCards < card.waterToMature &&
          plantedCrop.wasWateredTuringTurn === false
        ) {
          fieldCropIdxsThatNeedWater = [...fieldCropIdxsThatNeedWater, i]
        }
      }
    }

    return fieldCropIdxsThatNeedWater
  }
}

export const botLogic = new BotLogicService()
