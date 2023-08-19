import { Factory } from '../../game/services/Factory/Factory'
import { IPlayer } from '../../game/types'

import { stubDeck } from './deck'
import { stubField } from './field'

export const stubPlayer = (overrides: Partial<IPlayer> = {}): IPlayer => {
  return Factory.buildPlayer({
    deck: stubDeck(),
    field: stubField(overrides?.field),
    ...overrides,
  })
}
