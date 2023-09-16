import { ICrop } from '../../../types'
import { baseToCrop } from '../baseToCrop'

const carrot: ICrop = baseToCrop({
  id: 'carrot',
  waterToMature: 3,
})

export default carrot
