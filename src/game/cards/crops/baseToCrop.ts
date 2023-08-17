import { CardType, ICrop } from '../../types'

import { handlePlayFromHand } from './handlePlayFromHand'

export const baseToCrop = (
  base: Pick<ICrop, 'id' | 'waterCardsToMature'>
): ICrop => {
  return {
    type: CardType.CROP,
    onPlayFromHand: handlePlayFromHand,
    ...base,
  }
}
