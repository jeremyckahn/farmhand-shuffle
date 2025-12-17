import { InvalidCardIndexError } from '../../services/Rules/errors'
import { lookup } from '../../services/Lookup'
import { IMatch, IPlayer } from '../../types'
import { array } from '../../../services/Array'
import { addToDiscardPile } from '../add-to-discard-pile'
import { updatePlayer } from '../update-player'

export const moveFromHandToDiscardPile = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const player = lookup.getPlayer(match, playerId)

  const { hand } = player
  const cardId = hand[cardIdx]

  if (!cardId) {
    throw new InvalidCardIndexError(cardIdx, playerId)
  }

  const newHand = array.removeAt(hand, cardIdx)

  match = updatePlayer(match, playerId, { hand: newHand })
  match = addToDiscardPile(match, playerId, cardId)

  return match
}
