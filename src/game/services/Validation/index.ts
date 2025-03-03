import { IPlayer, isCropCardInstance } from '../../types'
import { GameStateCorruptError } from '../Rules/errors'

export class ValidationService {
  /**
   * Asserts:
   *   - That player deck contains at least one crop
   */
  player = (player: IPlayer) => {
    const deckContainsCrop = player.deck.some(cardInstance => {
      return isCropCardInstance(cardInstance)
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
