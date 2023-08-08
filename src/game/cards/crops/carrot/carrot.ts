import { ICrop } from '../../../types'
import { baseToCrop } from '../baseToCrop'

export const carrot: ICrop = baseToCrop({
  id: 'carrot',
  waterCardsToMature: 3,
})
