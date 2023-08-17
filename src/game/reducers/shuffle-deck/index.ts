import shuffle from 'lodash.shuffle'

import { IGame, IPlayer } from '../../types'
import { updateDeck } from '../update-deck'

export const shuffleDeck = (game: IGame, playerId: IPlayer['id']): IGame => {
  const { deck } = game.table.players[playerId]
  const newDeck = shuffle(deck)

  return updateDeck(game, playerId, newDeck)
}
