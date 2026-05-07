import { InvalidCardError } from '../../../game/services/Rules/errors'
import {
  CardInstance,
  IPlayedCard,
  isToolCardInstance,
} from '../../../game/types'
import {
  isPlantableCardInstance,
  isPlayedTool,
} from '../../../game/types/guards'

export const usePlayedCardLogic = ({
  card,
  playedCard,
}: {
  card: CardInstance
  playedCard: IPlayedCard
}) => {
  if (!isPlantableCardInstance(card)) {
    throw new InvalidCardError(`${card.id} is not a crop card.`)
  }

  let waterIconsToRender = 0
  let canBeWatered = false
  let canBeHarvested = false

  if (!(isPlayedTool(playedCard) || isToolCardInstance(card))) {
    waterIconsToRender = Math.max(playedCard.waterCards, card.waterToMature)
    canBeWatered = playedCard.wasWateredDuringTurn === false
    canBeHarvested = playedCard.waterCards >= card.waterToMature
  }

  return { canBeWatered, canBeHarvested, waterIconsToRender }
}
