import { IField, IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const updateField = (
  match: IMatch,
  playerId: IPlayer['id'],
  newFieldProperties: Partial<IField>
) => {
  const { field } = match.table.players[playerId]

  match = updatePlayer(match, playerId, {
    field: { ...field, ...newFieldProperties },
  })

  return match
}
