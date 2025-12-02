import shuffle from 'lodash.shuffle'

import { IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const shuffleDeck = (match: IMatch, playerId: IPlayer['id']): IMatch => {
  const { deck } = match.table.players[playerId]
  const newDeck = shuffle(deck)

  return updatePlayer(match, playerId, { deck: newDeck })
}
