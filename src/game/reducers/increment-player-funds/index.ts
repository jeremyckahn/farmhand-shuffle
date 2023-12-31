import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const incrementPlayerFunds = (
  game: IGame,
  playerId: IPlayer['id'],
  /**
   * This number can be negative to perform a decrement of funds.
   */
  amount: number
) => {
  const { funds } = game.table.players[playerId]
  const newFunds = Math.max(0, funds + amount)

  game = updatePlayer(game, playerId, { funds: newFunds })

  return game
}
