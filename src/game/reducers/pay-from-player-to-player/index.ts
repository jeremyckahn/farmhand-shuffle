import { IGame, IPlayer } from '../../types'
import { incrementPlayerFunds } from '../increment-player-funds'

export const payFromPlayerToPlayer = (
  game: IGame,
  amount: number,
  sourcePlayerId: IPlayer['id'],
  targetPlayerId: IPlayer['id']
): IGame => {
  if (amount === 0) return game

  if (amount < 0)
    return payFromPlayerToPlayer(game, -amount, targetPlayerId, sourcePlayerId)

  const { funds: sourcePlayerFunds } = game.table.players[sourcePlayerId]
  const adjustedAmount = Math.min(sourcePlayerFunds, amount)

  game = incrementPlayerFunds(game, sourcePlayerId, -adjustedAmount)
  game = incrementPlayerFunds(game, targetPlayerId, adjustedAmount)

  return game
}
