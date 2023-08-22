import { IGame, IPlayer } from '../../types'

export const updatePlayer = (
  game: IGame,
  playerId: IPlayer['id'],
  newPlayerProperties: Partial<IPlayer>
) => {
  return {
    ...game,
    table: {
      ...game.table,
      players: {
        ...game.table.players,
        ...{
          [playerId]: {
            ...game.table.players[playerId],
            ...newPlayerProperties,
          },
        },
      },
    },
  }
}
