import { IGame, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'

export const transferFunds = (
  game: IGame,
  amount: number,
  fromPlayerId: IPlayer['id'],
  /**
   * If this is not provided, transfer target is the community fund.
   */
  toPlayerId?: IPlayer['id']
) => {
  if (amount === 0) return game

  const { funds: fromPlayerFunds } = game.table.players[fromPlayerId]
  const { communityFund } = game.table
  const isCommunityFundTransfer = typeof toPlayerId === 'undefined'
  const isAmountPositive = amount > 0

  if (isCommunityFundTransfer) {
    const adjustedAmount = isAmountPositive
      ? Math.min(fromPlayerFunds, amount)
      : Math.max(-communityFund, amount)

    game = incrementPlayerFunds(game, fromPlayerId, -adjustedAmount)
    game = incrementCommunityFund(game, adjustedAmount)
  } else {
    const { funds: toPlayerFunds } = game.table.players[toPlayerId]
    const adjustedAmount = isAmountPositive
      ? Math.min(fromPlayerFunds, amount)
      : Math.max(-toPlayerFunds, amount)

    game = incrementPlayerFunds(game, fromPlayerId, -adjustedAmount)
    game = incrementPlayerFunds(game, toPlayerId, adjustedAmount)
  }

  return game
}
