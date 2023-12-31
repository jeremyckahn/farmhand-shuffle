import { INITIAL_PLAYER_FUNDS } from '../../game/config'
import { Factory } from '../../game/services/Factory'
import { ITable } from '../../game/types'

import { stubPlayer } from './players'

export const stubTable = (overrides: Partial<ITable> = {}): ITable => {
  const player1 = stubPlayer()
  const player2 = stubPlayer()

  return Factory.buildTable({
    communityFund: overrides?.players
      ? Object.keys(overrides.players).length * INITIAL_PLAYER_FUNDS
      : 0,
    players: { [player1.id]: player1, [player2.id]: player2 },
    ...overrides,
  })
}
