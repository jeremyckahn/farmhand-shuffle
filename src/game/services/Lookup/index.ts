import * as cards from '../../cards'
import { isCardId } from '../../types/guards'
import { ICard, IGame, IPlayer } from '../../types'
import { GameStateCorruptError, InvalidIdError } from '../Rules/errors'

export class Lookup {
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
   * Returns all the IDs for players that are not the current user's.
   */
  getOpponentPlayerIds = (game: IGame) => {
    const playerIds = Object.keys(game.table.players)

    const nonUserPlayers = playerIds.filter(
      playerId => playerId !== game.userPlayerId
    )

    return nonUserPlayers
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
}

export const lookup = new Lookup()
