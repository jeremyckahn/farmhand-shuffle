import { Factory } from '../../game/services/Factory'
import { IGame } from '../../game/types'

import { stubTable } from './table'

export const stubGame = (overrides: Partial<IGame> = {}): IGame => {
  const table = stubTable(overrides?.table)
  return Factory.buildGame(
    { table, ...overrides },
    Object.keys(table.players)[0]
  )
}
