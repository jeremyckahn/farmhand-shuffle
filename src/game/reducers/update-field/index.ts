import { IField, IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const updateField = (
  match: IMatch,
  playerId: IPlayer['id'],
  newFieldProperties: Partial<IField>
) => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  const { field } = player

  match = updatePlayer(match, playerId, {
    field: { ...field, ...newFieldProperties },
  })

  return match
}
