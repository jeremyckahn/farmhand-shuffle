import { IGame, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'

export const transferFunds = (
  game: IGame,
  amount: number,
  sourcePlayerId: IPlayer['id'],
  /**
   * If this is not provided, transfer target is the community fund.
   */
  targetPlayerId?: IPlayer['id']
) => {
  if (amount === 0) return game

  const { funds: sourcePlayerFunds } = game.table.players[sourcePlayerId]
  const { communityFund } = game.table
  const isCommunityFundTransfer = typeof targetPlayerId === 'undefined'
  const isAmountPositive = amount > 0

  if (isCommunityFundTransfer) {
    const adjustedAmount = isAmountPositive
      ? Math.min(sourcePlayerFunds, amount)
      : Math.max(-communityFund, amount)

    game = incrementPlayerFunds(game, sourcePlayerId, -adjustedAmount)
    game = incrementCommunityFund(game, adjustedAmount)
  } else {
    const { funds: targetPlayerFunds } = game.table.players[targetPlayerId]
    const adjustedAmount = isAmountPositive
      ? Math.min(sourcePlayerFunds, amount)
      : Math.max(-targetPlayerFunds, amount)

    game = incrementPlayerFunds(game, sourcePlayerId, -adjustedAmount)
    game = incrementPlayerFunds(game, targetPlayerId, adjustedAmount)
  }

  return game
}
