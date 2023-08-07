import { CardType, Crop } from '../../types'

import { handlePlayFromHand } from './handlePlayFromHand'

export const baseToCrop = (
  base: Pick<Crop, 'id' | 'waterCardsToMature'>
): Crop => {
  return {
    type: CardType.CROP,
    onPlayFromHand: handlePlayFromHand,
    ...base,
  }
}
