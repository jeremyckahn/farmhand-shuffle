import {
  IMatch,
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
  getCardFromHand = (
    match: IMatch,
    playerId: IPlayer['id'],
    cardIdx: number
  ) => {
    const player = this.getPlayer(match, playerId)
    const { hand } = player
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
  getCropFromHand(match: IMatch, playerId: IPlayer['id'], cardIdx: number) {
    const cropInstance = this.getCardFromHand(match, playerId, cardIdx)

    if (!isCrop(cropInstance)) {
      throw new InvalidCardError(`${cropInstance.id} is not a crop card.`)
    }

    return cropInstance
  }

  getPlayedCropFromField = (
    match: IMatch,
    playerId: IPlayer['id'],
    cardIdx: number
  ) => {
    const player = this.getPlayer(match, playerId)
    const { crops } = player.field
    const cardInstance = crops[cardIdx]

    if (!cardInstance) {
      throw new InvalidCardIndexError(cardIdx, playerId)
    }

    return cardInstance
  }

  /**
   * Returns all the IDs for players that are not the current user's.
   */
  getOpponentPlayerIds = (match: IMatch) => {
    const playerIds = Object.keys(match.table.players)

    const opponentPlayerIds = playerIds.filter(
      playerId => playerId !== match.sessionOwnerPlayerId
    )

    return opponentPlayerIds
  }

  getPlayer = (match: IMatch, playerId: IPlayer['id']) => {
    const player = match.table.players[playerId]

    if (!player) {
      throw new InvalidIdError(
        `playerId ${playerId} does not correspond to any players in the match.`
      )
    }

    return player
  }

  findCropIndexesInDeck = (
    match: IMatch,
    playerId: IPlayer['id'],
    howMany = 1
  ) => {
    const player = this.getPlayer(match, playerId)
    const { deck } = player

    let cropCardIdxs: number[] = []

    for (
      let i = 0;
      i < howMany && i <= deck.length - 1 && cropCardIdxs.length < howMany;
      i++
    ) {
      const cardInstance = deck[i]

      if (cardInstance && isCropCardInstance(cardInstance)) {
        cropCardIdxs = [...cropCardIdxs, i]
      }
    }

    return cropCardIdxs
  }

  findCropIndexesInPlayerHand = (match: IMatch, playerId: IPlayer['id']) => {
    const player = this.getPlayer(match, playerId)
    const cropCardIdxsInPlayerHand = player.hand.reduce(
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

  findWaterIndexesInPlayerHand = (match: IMatch, playerId: IPlayer['id']) => {
    const player = this.getPlayer(match, playerId)
    const waterIdxsInPlayerHand = player.hand.reduce(
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

  findEventIndexesInPlayerHand = (match: IMatch, playerId: IPlayer['id']) => {
    const player = this.getPlayer(match, playerId)
    const eventCardIdxsInPlayerHand = player.hand.reduce(
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

  findToolIndexesInPlayerHand = (match: IMatch, playerId: IPlayer['id']) => {
    const player = this.getPlayer(match, playerId)
    const toolIdxsInPlayerHand = player.hand.reduce(
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

  playerIds = (match: IMatch) => {
    const playerIds = Object.keys(match.table.players).sort()

    return playerIds
  }

  nextPlayerIndex = (match: IMatch) => {
    const { currentPlayerId } = match

    assertCurrentPlayer(currentPlayerId)

    const playerIds = Object.keys(match.table.players).sort()
    const currentPlayerIdx = playerIds.indexOf(currentPlayerId)
    const nextPlayerIdx = (currentPlayerIdx + 1) % playerIds.length

    return nextPlayerIdx
  }
}

export const lookup = new LookupService()
