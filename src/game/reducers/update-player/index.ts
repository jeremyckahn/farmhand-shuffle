import { IMatch, IPlayer } from '../../types'
import { updateTable } from '../update-table'

export const updatePlayer = (
  match: IMatch,
  playerId: IPlayer['id'],
  newPlayerProperties: Partial<IPlayer>
): IMatch => {
  match = updateTable(match, {
    players: {
      ...match.table.players,
      [playerId]: {
        ...match.table.players[playerId],
        ...newPlayerProperties,
      },
    },
  })

  return match
}
