import { IMatch, IPlayer } from '../../types'
import { updateTable } from '../update-table'

export const updatePlayer = (
  match: IMatch,
  playerId: IPlayer['id'],
  newPlayerProperties: Partial<IPlayer>
): IMatch => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

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
