import shuffle from 'lodash.shuffle'

import { IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const shuffleDeck = (match: IMatch, playerId: IPlayer['id']): IMatch => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  const { deck } = player
  const newDeck = shuffle(deck)

  return updatePlayer(match, playerId, { deck: newDeck })
}
