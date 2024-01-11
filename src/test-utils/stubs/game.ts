import { Factory } from '../../game/services/Factory'
import { IGame } from '../../game/types'

import { stubPlayer1, stubPlayer2 } from './players'
import { stubTable } from './table'

export const stubGame = (overrides: Partial<IGame> = {}): IGame => {
  const table = stubTable({
    players: { [stubPlayer1.id]: stubPlayer1, [stubPlayer2.id]: stubPlayer2 },
    ...overrides?.table,
  })

  return Factory.buildGame(
    { table, ...overrides },
    Object.keys(table.players)[0]
  )
}
