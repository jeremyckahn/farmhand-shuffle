import { IGame, IPlayer } from '../../types'

export const updateDeck = (
  game: IGame,
  playerId: IPlayer['id'],
  deck: IPlayer['deck']
): IGame => {
  return {
    ...game,
    table: {
      ...game.table,
      players: {
        ...game.table.players,
        ...{ [playerId]: { ...game.table.players[playerId], deck } },
      },
    },
  }
}
