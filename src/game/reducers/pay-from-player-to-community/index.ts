import { IGame, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'

export const payFromPlayerToCommunity = (
  game: IGame,
  amount: number,
  sourcePlayerId: IPlayer['id']
) => {
  if (amount === 0) return game

  const { funds: sourcePlayerFunds } = game.table.players[sourcePlayerId]
  const { communityFund } = game.table
  const isAmountPositive = amount > 0

  const adjustedAmount = isAmountPositive
    ? Math.min(sourcePlayerFunds, amount)
    : Math.max(-communityFund, amount)

  game = incrementPlayerFunds(game, sourcePlayerId, -adjustedAmount)
  game = incrementCommunityFund(game, adjustedAmount)

  return game
}
