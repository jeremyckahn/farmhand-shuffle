import { IGame, ITable } from '../../types'
import { updateGame } from '../update-game'

export const updateTable = (
  game: IGame,
  newTableProperties: Partial<ITable>
): IGame => {
  return updateGame(game, { table: { ...game.table, ...newTableProperties } })
}
