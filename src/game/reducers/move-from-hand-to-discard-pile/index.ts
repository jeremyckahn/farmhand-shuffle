import { array } from '../../../services/Array'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { addToDiscardPile } from '../add-to-discard-pile'
import { updatePlayer } from '../update-player'

export const moveFromHandToDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const { hand } = game.table.players[playerId]
  const cardId = hand[cardIdx]

  if (!cardId) {
    throw new InvalidCardIndexError(cardIdx, playerId)
  }

  const newHand = array.removeAt(hand, cardIdx)

  game = updatePlayer(game, playerId, { hand: newHand })
  game = addToDiscardPile(game, playerId, cardId)

  return game
}
