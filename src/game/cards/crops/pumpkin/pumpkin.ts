import { ICrop } from '../../../types'
import { baseToCrop } from '../baseToCrop'

export const pumpkin: ICrop = baseToCrop({
  id: 'pumpkin',
  waterCardsToMature: 4,
})