import shuffle from 'lodash.shuffle'

import { IGame, IPlayer } from '../../types'

// FIXME: Test this
export const shuffleDeck = (game: IGame, playerId: IPlayer['id']): IGame => {
  const { deck } = game.table.players[playerId]
  const newDeck = shuffle(deck)

  // FIXME: Move this object construction to a helper reducer
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
