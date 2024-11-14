import { CardType, ICrop } from '../../types'

import { handlePlayFromHand } from './handlePlayFromHand'

export const baseToCrop = (
  base: Pick<ICrop, 'id' | 'waterToMature' | 'name'>
): ICrop => {
  return Object.freeze({
    type: CardType.CROP,
    onPlayFromHand: handlePlayFromHand,
    instanceId: null,
    ...base,
  })
}
