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

  const sourcePlayer = match.table.players[sourcePlayerId]
  const targetPlayer = match.table.players[targetPlayerId]

  if (!sourcePlayer) {
    throw new Error(`Player not found: ${sourcePlayerId}`)
  }

  if (!targetPlayer) {
    throw new Error(`Player not found: ${targetPlayerId}`)
  }

  const { funds: sourcePlayerFunds } = sourcePlayer
  const adjustedAmount = Math.min(sourcePlayerFunds, amount)

  match = incrementPlayerFunds(match, sourcePlayerId, -adjustedAmount)
  match = incrementPlayerFunds(match, targetPlayerId, adjustedAmount)

  return match
}
