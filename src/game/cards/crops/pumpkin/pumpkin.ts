import { ICrop } from '../../../types'
import { baseToCrop } from '../baseToCrop'

const pumpkin: ICrop = baseToCrop({
  id: 'pumpkin',
  waterToMature: 4,
})

export default pumpkin
