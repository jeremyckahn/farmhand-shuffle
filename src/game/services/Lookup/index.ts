import * as cards from '../../cards'
import { isCardId, isCrop } from '../../types/guards'
import { ICard, IGame, IPlayer, isCropCard } from '../../types'
import {
  GameStateCorruptError,
  InvalidCardError,
  InvalidIdError,
} from '../Rules/errors'

export class LookupService {
  getCardFromHand = (
    game: IGame,
    playerId: IPlayer['id'],
    cardIdx: number
  ): ICard => {
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

  /**
   * @throws InvalidCardError if card is not an ICrop.
   */
  getCropFromHand(game: IGame, playerId: IPlayer['id'], cardIdx: number) {
    const card = this.getCardFromHand(game, playerId, cardIdx)

    if (!isCrop(card)) {
      throw new InvalidCardError(`${card.id} is not a crop card.`)
    }

    return card
  }

  /**
   * Returns all the IDs for players that are not the current user's.
   */
  getOpponentPlayerIds = (game: IGame) => {
    const playerIds = Object.keys(game.table.players)

    const opponentPlayerIds = playerIds.filter(
      playerId => playerId !== game.sessionOwnerPlayerId
    )

    return opponentPlayerIds
  }

  getPlayer = (game: IGame, playerId: IPlayer['id']) => {
    const player = game.table.players[playerId]

    if (!player) {
      throw new InvalidIdError(
        `playerId ${playerId} does not correspond to any players in the game.`
      )
    }

    return player
  }

  findCropIndexesInDeck = (
    game: IGame,
    playerId: IPlayer['id'],
    howMany = 1
  ) => {
    const player = this.getPlayer(game, playerId)
    const { deck } = player

    let cropCardIdxs: number[] = []

    for (
      let i = 0;
      i < howMany && i <= deck.length - 1 && cropCardIdxs.length < howMany;
      i++
    ) {
      const cardId = deck[i]

      // NOTE: This check is not logically necessary, but it is required to
      // prevent cards[cardId] from being implicitly cast as an any type.
      if (!isCardId(cardId)) {
        throw new GameStateCorruptError(`${cardId} is not a valid card ID`)
      }

      const card = cards[cardId]

      if (isCropCard(card)) {
        cropCardIdxs = [...cropCardIdxs, i]
      }
    }

    return cropCardIdxs
  }
}

export const lookup = new LookupService()
