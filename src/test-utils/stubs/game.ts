import { IGame } from '../../game/types'

import { stubTable } from './table'

export const stubGame = (): IGame => {
  return {
    table: stubTable(),
  }
}
