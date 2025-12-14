import { IField, IMatch, IPlayer } from '../../types'
import { lookup } from '../../services/Lookup'
import { updatePlayer } from '../update-player'

export const updateField = (
  match: IMatch,
  playerId: IPlayer['id'],
  newFieldProperties: Partial<IField>
) => {
  const player = lookup.getPlayer(match, playerId)

  const { field } = player

  match = updatePlayer(match, playerId, {
    field: { ...field, ...newFieldProperties },
  })

  return match
}
