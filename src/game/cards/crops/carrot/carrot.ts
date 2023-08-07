import { Crop } from '../../../types'
import { baseToCrop } from '../helpers'

export const carrot: Crop = baseToCrop({
  id: 'carrot',
  waterCardsToMature: 3,
})
