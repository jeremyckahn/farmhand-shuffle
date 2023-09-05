import { IGame } from '../../game/types'

import { stubTable } from './table'

export const stubGame = (overrides: Partial<IGame> = {}): IGame => {
  return {
    table: stubTable(),
    ...overrides,
  }
}
