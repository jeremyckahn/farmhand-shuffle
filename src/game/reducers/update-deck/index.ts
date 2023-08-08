import { IGame, IPlayer } from '../../types'

// FIXME: Test this
export const updateDeck = (
  game: IGame,
  playerId: IPlayer['id'],
  newDeck: IPlayer['deck']
): IGame => {
  return {
    ...game,
    table: {
      ...game.table,
      players: {
        ...game.table.players,
        ...{ [playerId]: { ...game.table.players[playerId], deck: newDeck } },
      },
    },
  }
}
