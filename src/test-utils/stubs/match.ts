import { factory } from '../../game/services/Factory'
import { IMatch } from '../../game/types'

import { stubPlayer1, stubPlayer2 } from './players'
import { stubTable } from './table'

export const stubMatch = (overrides: Partial<IMatch> = {}): IMatch => {
  const table = stubTable({
    players: { [stubPlayer1.id]: stubPlayer1, [stubPlayer2.id]: stubPlayer2 },
    ...overrides?.table,
  })

  return factory.buildMatch(
    { table, ...overrides },
    Object.keys(table.players)[0]
  )
}
