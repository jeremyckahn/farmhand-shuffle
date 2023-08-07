import { Crop } from '../../../types'
import { baseToCrop } from '../baseToCrop'

export const carrot: Crop = baseToCrop({
  id: 'carrot',
  waterCardsToMature: 3,
})
