import { IGame, IPlayer } from '../../types'
import { updateTable } from '../update-table'

export const updatePlayer = (
  game: IGame,
  playerId: IPlayer['id'],
  newPlayerProperties: Partial<IPlayer>
): IGame => {
  game = updateTable(game, {
    players: {
      ...game.table.players,
      [playerId]: {
        ...game.table.players[playerId],
        ...newPlayerProperties,
      },
    },
  })

  return game
}
