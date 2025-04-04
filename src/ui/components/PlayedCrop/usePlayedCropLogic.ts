import { InvalidCardError } from '../../../game/services/Rules/errors'
import {
  CardInstance,
  IPlayedCrop,
  isCropCardInstance,
} from '../../../game/types'

export const usePlayedCropLogic = ({
  card,
  playedCrop,
}: {
  card: CardInstance
  playedCrop: IPlayedCrop
}) => {
  if (!isCropCardInstance(card)) {
    throw new InvalidCardError(`${card.id} is not a crop card.`)
  }

  const waterIconsToRender = Math.max(playedCrop.waterCards, card.waterToMature)
  const canBeWatered = playedCrop.wasWateredTuringTurn === false
  const canBeHarvested = playedCrop.waterCards >= card.waterToMature

  return { canBeWatered, canBeHarvested, waterIconsToRender }
}
