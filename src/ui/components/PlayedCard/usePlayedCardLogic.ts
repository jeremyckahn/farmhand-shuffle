import { IPlayedCard, isToolCardInstance } from '../../../game/types'
import { isPlayedTool } from '../../../game/types/guards'

export const usePlayedCardLogic = ({
  playedCard,
}: {
  playedCard: IPlayedCard
}) => {
  const card = playedCard.instance

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
