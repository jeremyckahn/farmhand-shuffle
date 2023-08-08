import { v4 as uuid } from 'uuid'

import { IPlayer } from '../../game/types'

import { stubField } from './field'

export const stubPlayer = (): IPlayer => {
  return {
    id: uuid(),
    funds: 0,
    // FIXME: Stub a full deck
    deck: [],
    discardPile: [],
    hand: [],
    field: stubField(),
  }
}
