import { CardType, ICrop } from '../../types'

export const baseToCrop = (
  base: Pick<ICrop, 'id' | 'waterToMature' | 'name'>
): ICrop => {
  return Object.freeze({
    type: CardType.CROP,
    ...base,
  })
}
