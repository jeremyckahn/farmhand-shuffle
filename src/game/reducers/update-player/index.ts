import { IMatch, IPlayer } from '../../types'
import { lookup } from '../../services/Lookup'
import { updateTable } from '../update-table'

export const updatePlayer = (
  match: IMatch,
  playerId: IPlayer['id'],
  newPlayerProperties: Partial<IPlayer>
): IMatch => {
  const player = lookup.getPlayer(match, playerId)

  match = updateTable(match, {
    players: {
      ...match.table.players,
      [playerId]: {
        ...player,
        ...newPlayerProperties,
      },
    },
  })

  return match
}
