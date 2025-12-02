import { IMatch, ITable } from '../../types'
import { updateMatch } from '../update-match'

export const updateTable = (
  match: IMatch,
  newTableProperties: Partial<ITable>
): IMatch => {
  return updateMatch(match, {
    table: { ...match.table, ...newTableProperties },
  })
}
