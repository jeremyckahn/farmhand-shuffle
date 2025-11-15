import { randomNumber } from '../../../services/RandomNumber'
import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_FIELD_SIZE,
} from '../../config'
import { IGame, isCropCardInstance, isWaterCardInstance } from '../../types'
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

    const unboundedNumberOfCropsToPlay = Math.max(
      minimumCropsToPlay,
      Math.floor(randomNumber.generate() * cropCardIdxsInPlayerHand.length)
    )

    const availableFieldSpace =
      STANDARD_FIELD_SIZE - game.table.players[playerId].field.crops.length

    const safeNumberOfCropsToPlay = Math.min(
      availableFieldSpace,
      unboundedNumberOfCropsToPlay,
      cropCardIdxsInPlayerHand.length
    )

    return safeNumberOfCropsToPlay
  }

  getNumberOfEventCardsToPlay(game: IGame, playerId: string): number {
    const eventCardIdxsInPlayerHand = lookup.findEventIndexesInPlayerHand(
      game,
      playerId
    )

    return eventCardIdxsInPlayerHand.length > 0
      ? EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN
      : 0
  }

  getNumberOfToolCardsToPlay(game: IGame, playerId: string) {
    const toolCardIdxsInPlayerHand = lookup.findToolIndexesInPlayerHand(
      game,
      playerId
    )

    return randomNumber.chooseIntegerBetween(0, toolCardIdxsInPlayerHand.length)
  }

  getEventCardIndexToPlay(game: IGame, playerId: string) {
    const eventCardIdxsInPlayerHand = lookup.findEventIndexesInPlayerHand(
      game,
      playerId
    )

    return randomNumber.chooseElement(eventCardIdxsInPlayerHand)
  }

  getToolCardIndexToPlay(game: IGame, playerId: string) {
    const toolCardIdxsInPlayerHand = lookup.findToolIndexesInPlayerHand(
      game,
      playerId
    )

    return randomNumber.chooseElement(toolCardIdxsInPlayerHand)
  }

  getCropCardIndicesToWater(game: IGame, playerId: string) {
    const {
      field: { crops },
      hand,
    } = game.table.players[playerId]

    let fieldCropIdxsThatNeedWater: number[] = []
    const { length: numberOfWaterCardsInHand } = hand.filter(cardInstance => {
      return isWaterCardInstance(cardInstance)
    })

    for (let i = 0; i < crops.length; i++) {
      // NOTE: Prevents playing more water cards than there are in the player's hand
      if (fieldCropIdxsThatNeedWater.length === numberOfWaterCardsInHand) {
        break
      }

      const plantedCrop = crops[i]

      if (plantedCrop && isCropCardInstance(plantedCrop.instance)) {
        if (
          plantedCrop.waterCards < plantedCrop.instance.waterToMature &&
          plantedCrop.wasWateredDuringTurn === false
        ) {
          fieldCropIdxsThatNeedWater = [...fieldCropIdxsThatNeedWater, i]
        }
      }
    }

    return fieldCropIdxsThatNeedWater
  }

  getCropCardIndicesToHarvest(game: IGame, playerId: string) {
    const {
      field: { crops },
    } = game.table.players[playerId]

    let fieldCropIdxsToHarvest: number[] = []

    for (let i = 0; i < crops.length; i++) {
      const plantedCrop = crops[i]

      if (plantedCrop && isCropCardInstance(plantedCrop.instance)) {
        if (plantedCrop.waterCards >= plantedCrop.instance.waterToMature) {
          fieldCropIdxsToHarvest = [...fieldCropIdxsToHarvest, i]
        }
      }
    }

    return fieldCropIdxsToHarvest
  }
}

export const botLogic = new BotLogicService()
