import { v4 as uuid } from 'uuid'

import { IPlayer } from '../../game/types'

import { stubDeck } from './deck'
import { stubField } from './field'

export const stubPlayer = (): IPlayer => {
  return {
    id: uuid(),
    funds: 0,
    deck: stubDeck(),
    discardPile: [],
    hand: [],
    field: stubField(),
  }
}
