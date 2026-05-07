import { InvalidCardError } from '../../../game/services/Rules/errors'
import {
  CardInstance,
  IPlayedCard,
  isToolCardInstance,
} from '../../../game/types'
import {
  isPlantableCardInstance,
  isPlayedCrop,
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

  // FIXME: Make this less repetitive
  const waterIconsToRender =
    isPlayedTool(playedCard) || isToolCardInstance(card)
      ? 0
      : Math.max(playedCard.waterCards, card.waterToMature)
  const canBeWatered =
    isPlayedCrop(playedCard) && playedCard.wasWateredDuringTurn === false
  const canBeHarvested =
    !(isPlayedTool(playedCard) || isToolCardInstance(card)) &&
    playedCard.waterCards >= card.waterToMature

  return { canBeWatered, canBeHarvested, waterIconsToRender }
}
