import * as cards from '../../cards'
import { isCardId } from '../../types/guards'
import { ICard, IGame, IPlayer } from '../../types'
import { GameStateCorruptError } from '../Rules/errors'

export class Lookup {
  static getCardFromHand(
    game: IGame,
    playerId: IPlayer['id'],
    cardIdx: number
  ): ICard {
    const { hand } = game.table.players[playerId]
    const cardId = hand[cardIdx]

    if (!cardId) {
      throw new Error(
        `Card index ${cardIdx} is not in player ${playerId}'s hand`
      )
    }

    // NOTE: This check is not logically necessary, but it is required to
    // prevent cards[cardId] from being implicitly cast as an any type.
    if (!isCardId(cardId)) {
      throw new GameStateCorruptError(`${cardId} is not a valid card ID`)
    }

    const card = cards[cardId]

    return card
  }
}
