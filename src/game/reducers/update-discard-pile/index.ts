import { IGame, IPlayer } from '../../types'

export const updateDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  discardPile: IPlayer['discardPile']
): IGame => {
  return {
    ...game,
    table: {
      ...game.table,
      players: {
        ...game.table.players,
        ...{ [playerId]: { ...game.table.players[playerId], discardPile } },
      },
    },
  }
}
