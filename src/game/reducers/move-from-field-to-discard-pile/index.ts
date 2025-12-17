import { array } from '../../../services/Array'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { lookup } from '../../services/Lookup'
import { IMatch, IPlayer } from '../../types'
import { addToDiscardPile } from '../add-to-discard-pile'
import { updateField } from '../update-field'

/**
 * Moves a card from the player's field to their discard pile.
 *
 * @param match The current match state.
 * @param playerId The ID of the player moving the card.
 * @param cardIdx The index of the card in the field to move to the discard pile.
 * @returns The updated match state.
 * @throws {InvalidCardIndexError} If the card index is invalid.
 */
export const moveFromFieldToDiscardPile = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const player = lookup.getPlayer(match, playerId)
  const { field } = player
  const playedCrop = field.crops[cardIdx]

  if (!playedCrop) {
    throw new InvalidCardIndexError(cardIdx, playerId)
  }

  let { crops } = field
  crops = array.replaceAt(crops, cardIdx, undefined)

  match = updateField(match, playerId, { crops })
  match = addToDiscardPile(match, playerId, playedCrop.instance)

  return match
}
