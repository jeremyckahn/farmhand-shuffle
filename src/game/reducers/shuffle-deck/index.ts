import shuffle from 'lodash.shuffle'

import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const shuffleDeck = (game: IGame, playerId: IPlayer['id']): IGame => {
  const { deck } = game.table.players[playerId]
  const newDeck = shuffle(deck)

  return updatePlayer(game, playerId, { deck: newDeck })
}
