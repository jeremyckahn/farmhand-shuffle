import { removeAt } from '../../../lib/array/removeAt'
import { IGame, IPlayer } from '../../types'
import { addToDiscardPile } from '../add-to-discard-pile/index'
import { updateHand } from '../update-hand/index'

export const moveFromHandToDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const { hand } = game.table.players[playerId]
  const cardId = hand[cardIdx]

  if (!cardId) {
    throw new Error(`Card index ${cardIdx} is not in player ${playerId}'s hand`)
  }

  const newHand = removeAt(hand, cardIdx)

  game = updateHand(game, playerId, newHand)
  game = addToDiscardPile(game, playerId, cardId)

  return game
}
