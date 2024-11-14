import { ICard, IGame, IPlayer } from '../../types'
import { InvalidIdError } from '../Rules/errors'

export class LookupService {
  getCardFromHand = (
    game: IGame,
    playerId: IPlayer['id'],
    cardIdx: number
  ): ICard => {
    const { hand } = game.table.players[playerId]
    const card = hand[cardIdx]

    if (!card) {
      throw new Error(
        `Card index ${cardIdx} is not in player ${playerId}'s hand`
      )
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
}

export const lookup = new LookupService()
