import { IGame, IPlayer } from '../../types'
import { incrementPlayerFunds } from '../increment-player-funds'

export const payFromPlayerToPlayer = (
  game: IGame,
  amount: number,
  sourcePlayerId: IPlayer['id'],
  targetPlayerId: IPlayer['id']
) => {
  if (amount === 0) return game

  const { funds: sourcePlayerFunds } = game.table.players[sourcePlayerId]
  const isAmountPositive = amount > 0

  const { funds: targetPlayerFunds } = game.table.players[targetPlayerId]
  const adjustedAmount = isAmountPositive
    ? Math.min(sourcePlayerFunds, amount)
    : Math.max(-targetPlayerFunds, amount)

  game = incrementPlayerFunds(game, sourcePlayerId, -adjustedAmount)
  game = incrementPlayerFunds(game, targetPlayerId, adjustedAmount)

  return game
}
