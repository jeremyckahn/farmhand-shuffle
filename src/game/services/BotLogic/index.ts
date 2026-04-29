import { randomNumber } from '../../../services/RandomNumber'
import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_FIELD_SIZE,
} from '../../config'
import { IMatch, isWaterCardInstance, WaterInstance } from '../../types'
import { isPlayedCrop } from '../../types/guards'
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
      randomNumber.chooseIntegerBetween(0, cropCardIdxsInPlayerHand.length)
    )

    const availableFieldSpace =
      STANDARD_FIELD_SIZE - player.field.cards.filter(crop => !!crop).length

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
      field: { cards },
      hand,
    } = player

    let fieldCropIdxsThatNeedWater: number[] = []
    const { length: numberOfWaterCardsInHand } = hand.filter(
      (cardInstance): cardInstance is WaterInstance => {
        return isWaterCardInstance(cardInstance)
      }
    )

    for (let i = 0; i < cards.length; i++) {
      // NOTE: Prevents playing more water cards than there are in the player's hand
      if (fieldCropIdxsThatNeedWater.length === numberOfWaterCardsInHand) {
        break
      }

      const plantedCrop = cards[i]

      if (
        isPlayedCrop(plantedCrop) &&
        plantedCrop.waterCards < plantedCrop.instance.waterToMature &&
        plantedCrop.wasWateredDuringTurn === false
      ) {
        fieldCropIdxsThatNeedWater = [...fieldCropIdxsThatNeedWater, i]
      }
    }

    return fieldCropIdxsThatNeedWater
  }

  getCropCardIndicesToHarvest(match: IMatch, playerId: string) {
    const player = lookup.getPlayer(match, playerId)
    const {
      field: { cards },
    } = player

    let fieldCropIdxsToHarvest: number[] = []

    for (let i = 0; i < cards.length; i++) {
      const plantedCrop = cards[i]

      if (
        isPlayedCrop(plantedCrop) &&
        plantedCrop.waterCards >= plantedCrop.instance.waterToMature
      ) {
        fieldCropIdxsToHarvest = [...fieldCropIdxsToHarvest, i]
      }
    }

    return fieldCropIdxsToHarvest
  }

  getOpenFieldPosition(match: IMatch, playerId: string) {
    const player = lookup.getPlayer(match, playerId)
    const { field } = player
    const { cards } = field

    let availableIdxs: number[] = []

    for (let i = 0; i < Math.max(STANDARD_FIELD_SIZE, cards.length); i++) {
      if (typeof cards[i] === 'undefined') {
        availableIdxs = [...availableIdxs, i]
      }
    }

    const selectedIdx = randomNumber.chooseElement(availableIdxs)

    return selectedIdx
  }
}

export const botLogic = new BotLogicService()
