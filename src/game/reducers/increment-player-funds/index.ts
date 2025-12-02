import { IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const incrementPlayerFunds = (
  match: IMatch,
  playerId: IPlayer['id'],
  /**
   * This number can be negative to perform a decrement of funds.
   */
  amount: number
) => {
  const { funds } = match.table.players[playerId]
  const newFunds = Math.max(0, funds + amount)

  match = updatePlayer(match, playerId, { funds: newFunds })

  return match
}
