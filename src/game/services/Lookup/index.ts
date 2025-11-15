import {
  IGame,
  IPlayer,
  isCropCardInstance,
  isEventCardInstance,
  isToolCardInstance,
  isWaterCardInstance,
} from '../../types'
import { assertCurrentPlayer, isCrop } from '../../types/guards'
import {
  InvalidCardError,
  InvalidCardIndexError,
  InvalidIdError,
} from '../Rules/errors'

export class LookupService {
  getCardFromHand = (game: IGame, playerId: IPlayer['id'], cardIdx: number) => {
    const { hand } = game.table.players[playerId]
    const cardInstance = hand[cardIdx]

    if (!cardInstance) {
      throw new Error(
        `Card index ${cardIdx} is not in player ${playerId}'s hand`
      )
    }

    return cardInstance
  }

  /**
   * @throws InvalidCardError if card is not a CropInstance.
   */
  getCropFromHand(game: IGame, playerId: IPlayer['id'], cardIdx: number) {
    const cropInstance = this.getCardFromHand(game, playerId, cardIdx)

    if (!isCrop(cropInstance)) {
      throw new InvalidCardError(`${cropInstance.id} is not a crop card.`)
    }

    return cropInstance
  }

  getPlayedCropFromField = (
    game: IGame,
    playerId: IPlayer['id'],
    cardIdx: number
  ) => {
    const { crops } = game.table.players[playerId].field
    const cardInstance = crops[cardIdx]

    if (!cardInstance) {
      throw new InvalidCardIndexError(cardIdx, playerId)
    }

    return cardInstance
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
      const cardInstance = deck[i]

      if (isCropCardInstance(cardInstance)) {
        cropCardIdxs = [...cropCardIdxs, i]
      }
    }

    return cropCardIdxs
  }

  findCropIndexesInPlayerHand = (game: IGame, playerId: IPlayer['id']) => {
    const cropCardIdxsInPlayerHand = game.table.players[playerId].hand.reduce(
      (acc: number[], cardInstance, idx) => {
        if (isCropCardInstance(cardInstance)) {
          acc = [...acc, idx]
        }

        return acc
      },
      []
    )

    return cropCardIdxsInPlayerHand
  }

  findWaterIndexesInPlayerHand = (game: IGame, playerId: IPlayer['id']) => {
    const waterIdxsInPlayerHand = game.table.players[playerId].hand.reduce(
      (acc: number[], cardInstance, idx) => {
        if (isWaterCardInstance(cardInstance)) {
          acc = [...acc, idx]
        }

        return acc
      },
      []
    )

    return waterIdxsInPlayerHand
  }

  findEventIndexesInPlayerHand = (game: IGame, playerId: IPlayer['id']) => {
    const eventCardIdxsInPlayerHand = game.table.players[playerId].hand.reduce(
      (acc: number[], cardInstance, idx) => {
        if (isEventCardInstance(cardInstance)) {
          acc = [...acc, idx]
        }

        return acc
      },
      []
    )

    return eventCardIdxsInPlayerHand
  }

  findToolIndexesInPlayerHand = (game: IGame, playerId: IPlayer['id']) => {
    const toolIdxsInPlayerHand = game.table.players[playerId].hand.reduce(
      (acc: number[], cardInstance, idx) => {
        if (isToolCardInstance(cardInstance)) {
          acc = [...acc, idx]
        }

        return acc
      },
      []
    )

    return toolIdxsInPlayerHand
  }

  playerIds = (game: IGame) => {
    const playerIds = Object.keys(game.table.players).sort()

    return playerIds
  }

  nextPlayerIndex = (game: IGame) => {
    const { currentPlayerId } = game

    assertCurrentPlayer(currentPlayerId)

    const playerIds = Object.keys(game.table.players).sort()
    const currentPlayerIdx = playerIds.indexOf(currentPlayerId)
    const nextPlayerIdx = (currentPlayerIdx + 1) % playerIds.length

    return nextPlayerIdx
  }
}

export const lookup = new LookupService()
