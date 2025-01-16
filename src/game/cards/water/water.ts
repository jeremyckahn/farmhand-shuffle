import { updatePlayedCrop } from '../../reducers/update-played-crop'
import { FieldEmptyError } from '../../services/Rules/errors'
import { InteractionHandlers } from '../../services/Rules/InteractionHandlers'
import { CardType, IGame, IPlayedCrop, IWater } from '../../types'

export const water: IWater = Object.freeze({
  type: CardType.WATER,
  id: 'water',
  name: 'Water',
})
