import { array } from '../../../services/Array'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { CardInstance, IMatch, IPlayer } from '../../types'
import { addToDiscardPile } from '../add-to-discard-pile'
import { updatePlayer } from '../update-player'

export const moveFromHandToDiscardPile = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  const { hand } = player
  const cardId = hand[cardIdx]

  if (!cardId) {
    throw new InvalidCardIndexError(cardIdx, playerId)
  }

  const newHand = hand.filter((_, i) => i !== cardIdx)

  match = updatePlayer(match, playerId, { hand: newHand })
  match = addToDiscardPile(match, playerId, cardId)

  return match
}
