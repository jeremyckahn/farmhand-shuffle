import shuffle from 'lodash.shuffle'

import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const pullCardFromDeck = (
  match: IMatch,
  playerId: IPlayer['id'],
  idx: number
) => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  let hand = [...player.hand]
  let deck = [...player.deck]
  let discardPile = [...player.discardPile]

  if (idx >= deck.length) {
    throw new InvalidCardIndexError(idx, playerId)
  }

  const [drawnCard] = deck.slice(idx, idx + 1)

  if (!drawnCard) {
    // This case should be covered by the idx check above, but it satisfies TypeScript
    throw new InvalidCardIndexError(idx, playerId)
  }

  deck = [...deck.slice(0, idx), ...deck.slice(idx + 1)]
  hand = [...hand, drawnCard]

  if (deck.length === 0) {
    deck = shuffle(discardPile)
    discardPile = []
  }

  match = updatePlayer(match, playerId, {
    deck,
    hand,
    discardPile,
  })

  return match
}
