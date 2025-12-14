import shuffle from 'lodash.shuffle'

import { IMatch, IPlayer } from '../../types'
import { MatchStateCorruptError } from '../../services/Rules/errors'
import { updatePlayer } from '../update-player'

export const drawCard = (
  match: IMatch,
  playerId: IPlayer['id'],
  howMany = 1
) => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new MatchStateCorruptError(`Player not found: ${playerId}`)
  }

  let newHand = [...player.hand]
  let newDeck = [...player.deck]
  let newDiscardPile = [...player.discardPile]

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
