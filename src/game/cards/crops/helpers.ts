import { CardType, Crop } from '../../types'

export const baseToCrop = (
  base: Pick<Crop, 'id' | 'waterCardsToMature'>
): Crop => {
  return {
    type: CardType.CROP,
    ...base,
  }
}
