import { DECK_SIZE } from '../../config'
import { IPlayerSeed, isCropCardInstance } from '../../types'
import { isCard } from '../../types/guards'
import { MatchStateCorruptError } from '../Rules/errors'

export class ValidationService {
  /**
   * Asserts that:
   *   - The player deck contains the correct number of cards
   *   - All cards in the player's deck are valid
   *   - That player deck contains at least one crop
   */
  playerSeed = (player: IPlayerSeed) => {
    const { deck, id } = player

    if (deck.length !== DECK_SIZE) {
      throw new MatchStateCorruptError(
        `Deck for player ${id} contains ${deck.length} cards but must contain ${DECK_SIZE} cards instead`
      )
    }

    const areAllCardsValid = deck.every(isCard)

    if (!areAllCardsValid) {
      throw new MatchStateCorruptError(
        `Deck for player ${id} contain invalid cards`
      )
    }

    const deckContainsCrop = deck.some(isCropCardInstance)

    if (!deckContainsCrop) {
      throw new MatchStateCorruptError(
        `Deck for player ${id} does not contain any crops`
      )
    }

    return true
  }
}

export const validate = new ValidationService()
