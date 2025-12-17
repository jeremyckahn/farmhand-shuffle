import { randomNumber } from '../../../services/RandomNumber'
import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_FIELD_SIZE,
} from '../../config'
import {
  IMatch,
  isCropCardInstance,
  isWaterCardInstance,
  WaterInstance,
} from '../../types'
import { lookup } from '../Lookup'

export class BotLogicService {
  getNumberOfCropCardsToPlay(
    match: IMatch,
    playerId: string,
    { minimumCropsToPlay = 0 }: { minimumCropsToPlay?: number } = {}
  ) {
    const player = lookup.getPlayer(match, playerId)
    const cropCardIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
      match,
      playerId
    )

    const unboundedNumberOfCropsToPlay = Math.max(
      minimumCropsToPlay,
      Math.round(randomNumber.generate() * cropCardIdxsInPlayerHand.length)
    )

    const availableFieldSpace = STANDARD_FIELD_SIZE - player.field.crops.length

    const safeNumberOfCropsToPlay = Math.min(
      availableFieldSpace,
      unboundedNumberOfCropsToPlay,
      cropCardIdxsInPlayerHand.length
    )

    return safeNumberOfCropsToPlay
  }

  getNumberOfEventCardsToPlay(match: IMatch, playerId: string): number {
    const eventCardIdxsInPlayerHand = lookup.findEventIndexesInPlayerHand(
      match,
      playerId
    )

    return eventCardIdxsInPlayerHand.length > 0
      ? EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN
      : 0
  }

  getNumberOfToolCardsToPlay(match: IMatch, playerId: string) {
    const toolCardIdxsInPlayerHand = lookup.findToolIndexesInPlayerHand(
      match,
      playerId
    )

    return randomNumber.chooseIntegerBetween(0, toolCardIdxsInPlayerHand.length)
  }

  getEventCardIndexToPlay(match: IMatch, playerId: string) {
    const eventCardIdxsInPlayerHand = lookup.findEventIndexesInPlayerHand(
      match,
      playerId
    )

    return randomNumber.chooseElement(eventCardIdxsInPlayerHand)
  }

  getToolCardIndexToPlay(match: IMatch, playerId: string) {
    const toolCardIdxsInPlayerHand = lookup.findToolIndexesInPlayerHand(
      match,
      playerId
    )

    return randomNumber.chooseElement(toolCardIdxsInPlayerHand)
  }

  getCropCardIndicesToWater(match: IMatch, playerId: string) {
    const player = lookup.getPlayer(match, playerId)
    const {
      field: { crops },
      hand,
    } = player

    let fieldCropIdxsThatNeedWater: number[] = []
    const { length: numberOfWaterCardsInHand } = hand.filter(
      (cardInstance): cardInstance is WaterInstance => {
        return isWaterCardInstance(cardInstance)
      }
    )

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

  getCropCardIndicesToHarvest(match: IMatch, playerId: string) {
    const player = lookup.getPlayer(match, playerId)
    const {
      field: { crops },
    } = player

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
