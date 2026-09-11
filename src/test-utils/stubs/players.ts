import { starterDeck } from '../../game/config/starterDeck'
import { factory } from '../../game/services/Factory'
import { IPlayer } from '../../game/types'

import { stubField } from './field'

export const stubPlayer = (overrides: Partial<IPlayer> = {}): IPlayer => {
  return factory.buildPlayer({
    deck: starterDeck(),
    field: stubField(overrides?.field),
    ...overrides,
  })
}

export const stubPlayer1 = stubPlayer({ id: 'stub-player-1-id' })
export const stubPlayer2 = stubPlayer({ id: 'stub-player-2-id' })
