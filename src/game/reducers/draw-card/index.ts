import shuffle from 'lodash.shuffle'

import { IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const drawCard = (
  match: IMatch,
  playerId: IPlayer['id'],
  howMany = 1
) => {
  let newHand = [...match.table.players[playerId].hand]
  let newDeck = [...match.table.players[playerId].deck]
  let newDiscardPile = [...match.table.players[playerId].discardPile]

  const drawnCards = newDeck.slice(0, howMany)
  newDeck = newDeck.slice(howMany)

  newHand = [...newHand, ...drawnCards]

  if (newDeck.length === 0) {
    newDeck = shuffle(newDiscardPile)
    newDiscardPile = []
  }

  match = updatePlayer(match, playerId, {
    deck: newDeck,
    hand: newHand,
    discardPile: newDiscardPile,
  })

  return match
}
