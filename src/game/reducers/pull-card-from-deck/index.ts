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
  let newHand = [...player.hand]
  let newDeck = [...player.deck]
  let newDiscardPile = [...player.discardPile]

  if (idx >= newDeck.length) {
    throw new InvalidCardIndexError(idx, playerId)
  }

  const [drawnCard] = newDeck.slice(idx, idx + 1)

  newDeck = [...newDeck.slice(0, idx), ...newDeck.slice(idx + 1)]
  newHand = [...newHand, drawnCard]

  if (newDeck.length === 0) {
    newDeck = shuffle(newDiscardPile)
    newDiscardPile = []
  }

  game = updatePlayer(game, playerId, {
    deck: newDeck,
    hand: newHand,
    discardPile: newDiscardPile,
  })

  return game
}
