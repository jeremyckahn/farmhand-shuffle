import shuffle from 'lodash.shuffle'

import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const pullCardFromDeck = (
  game: IGame,
  playerId: IPlayer['id'],
  idx: number
) => {
  const player = game.table.players[playerId]
  let hand = [...player.hand]
  let deck = [...player.deck]
  let discardPile = [...player.discardPile]

  if (idx >= deck.length) {
    throw new InvalidCardIndexError(idx, playerId)
  }

  const [drawnCard] = deck.slice(idx, idx + 1)

  deck = [...deck.slice(0, idx), ...deck.slice(idx + 1)]
  hand = [...hand, drawnCard]

  if (deck.length === 0) {
    deck = shuffle(discardPile)
    discardPile = []
  }

  game = updatePlayer(game, playerId, {
    deck,
    hand,
    discardPile,
  })

  return game
}
