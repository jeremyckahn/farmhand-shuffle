import * as cards from '../../cards'
import { ICard, IGame, IPlayer, isCropCard } from '../../types'
import { assertIsCardId, isCrop } from '../../types/guards'
import { InvalidCardError, InvalidIdError } from '../Rules/errors'

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

    assertIsCardId(cardId)

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

      assertIsCardId(cardId)

      const card = cards[cardId]

      if (isCropCard(card)) {
        cropCardIdxs = [...cropCardIdxs, i]
      }
    }

    return cropCardIdxs
  }

  findCropIndexesInPlayerHand = (game: IGame, playerId: IPlayer['id']) => {
    const cropCardIdxsInPlayerHand = game.table.players[playerId].hand.reduce(
      (acc: number[], cardId, idx) => {
        assertIsCardId(cardId)

        const card = cards[cardId]

        if (isCropCard(card)) {
          acc = [...acc, idx]
        }

        return acc
      },
      []
    )

    return cropCardIdxsInPlayerHand
  }
}

export const lookup = new LookupService()
