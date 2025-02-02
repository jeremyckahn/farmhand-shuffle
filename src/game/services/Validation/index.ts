import * as cards from '../../cards'
import { IPlayer, isCropCard } from '../../types'
import { isCardId } from '../../types/guards'
import { GameStateCorruptError } from '../Rules/errors'

export class ValidationService {
  /**
   * Asserts:
   *   - That player deck contains at least one crop
   */
  player = (player: IPlayer) => {
    const deckContainsCrop = player.deck.some(cardId => {
      if (!isCardId(cardId)) {
        throw new GameStateCorruptError(`${cardId} is not a valid card ID`)
      }

      const card = cards[cardId]

      return isCropCard(card)
    })

    if (!deckContainsCrop) {
      throw new GameStateCorruptError(
        `Deck for player ${player.id} does not contain any crops`
      )
    }

    return true
  }
}

export const validate = new ValidationService()
