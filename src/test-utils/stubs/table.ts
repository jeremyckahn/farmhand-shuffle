import { ITable } from '../../game/types'

import { stubPlayer } from './players'

export const stubTable = (overrides: Partial<ITable> = {}): ITable => {
  const player1 = stubPlayer()
  const player2 = stubPlayer()

  return {
    communityFund: 100,
    players: { [player1.id]: player1, [player2.id]: player2 },
    ...overrides,
  }
}
