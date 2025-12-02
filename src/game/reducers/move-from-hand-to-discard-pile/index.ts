import { array } from '../../../services/Array'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IMatch, IPlayer } from '../../types'
import { addToDiscardPile } from '../add-to-discard-pile'
import { updatePlayer } from '../update-player'

export const moveFromHandToDiscardPile = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const { hand } = match.table.players[playerId]
  const cardId = hand[cardIdx]

  if (!cardId) {
    throw new InvalidCardIndexError(cardIdx, playerId)
  }

  const newHand = array.removeAt(hand, cardIdx)

  match = updatePlayer(match, playerId, { hand: newHand })
  match = addToDiscardPile(match, playerId, cardId)

  return match
}
