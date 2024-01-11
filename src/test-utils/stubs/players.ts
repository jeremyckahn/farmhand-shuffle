import { Factory } from '../../game/services/Factory'
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

export const stubPlayer1 = stubPlayer({ id: 'stub-player-1-id' })
export const stubPlayer2 = stubPlayer({ id: 'stub-player-2-id' })
