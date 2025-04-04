import { array } from '../../../services/Array'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { addToDiscardPile } from '../add-to-discard-pile'
import { updateField } from '../update-field'

/**
 * Moves a card from the player's field to their discard pile.
 *
 * @param game The current game state.
 * @param playerId The ID of the player moving the card.
 * @param cardIdx The index of the card in the field to move to the discard pile.
 * @returns The updated game state.
 * @throws {InvalidCardIndexError} If the card index is invalid.
 */
export const moveFromFieldToDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const { field } = game.table.players[playerId]
  const playedCrop = field.crops[cardIdx]

  if (!playedCrop) {
    throw new InvalidCardIndexError(cardIdx, playerId)
  }

  const newCrops = array.removeAt(field.crops, cardIdx)

  game = updateField(game, playerId, { crops: newCrops })
  game = addToDiscardPile(game, playerId, playedCrop.instance)

  return game
}
