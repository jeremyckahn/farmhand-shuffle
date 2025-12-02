import { IMatch, IPlayer } from '../../types'
import { incrementPlayerFunds } from '../increment-player-funds'

export const payFromPlayerToPlayer = (
  match: IMatch,
  amount: number,
  sourcePlayerId: IPlayer['id'],
  targetPlayerId: IPlayer['id']
): IMatch => {
  if (amount === 0) return match

  if (amount < 0)
    return payFromPlayerToPlayer(match, -amount, targetPlayerId, sourcePlayerId)

  const { funds: sourcePlayerFunds } = match.table.players[sourcePlayerId]
  const adjustedAmount = Math.min(sourcePlayerFunds, amount)

  match = incrementPlayerFunds(match, sourcePlayerId, -adjustedAmount)
  match = incrementPlayerFunds(match, targetPlayerId, adjustedAmount)

  return match
}
