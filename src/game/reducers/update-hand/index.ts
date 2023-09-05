import { IGame, IPlayer } from '../../types'

export const updateHand = (
  game: IGame,
  playerId: IPlayer['id'],
  hand: IPlayer['hand']
): IGame => {
  return {
    ...game,
    table: {
      ...game.table,
      players: {
        ...game.table.players,
        ...{ [playerId]: { ...game.table.players[playerId], hand } },
      },
    },
  }
}
