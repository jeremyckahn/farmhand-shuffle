import { Factory } from '../../game/services/Factory'
import { IGame } from '../../game/types'

import { stubTable } from './table'

export const stubGame = (overrides: Partial<IGame> = {}): IGame => {
  return Factory.buildGame({ table: stubTable(overrides?.table), ...overrides })
}
