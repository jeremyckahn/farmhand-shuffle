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
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  const { funds } = player
  const newFunds = Math.max(0, funds + amount)

  match = updatePlayer(match, playerId, { funds: newFunds })

  return match
}
