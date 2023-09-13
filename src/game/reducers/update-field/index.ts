import { IField, IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const updateField = (
  game: IGame,
  playerId: IPlayer['id'],
  newFieldProperties: Partial<IField>
) => {
  const { field } = game.table.players[playerId]

  game = updatePlayer(game, playerId, {
    field: { ...field, ...newFieldProperties },
  })

  return game
}
