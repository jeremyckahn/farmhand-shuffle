import { IGame, IPlayer } from '../../types'
import { changePlayerFunds } from '../change-player-funds/index'
import { updateCommunityFund } from '../update-community-fund/index'

export const transferMoney = (
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

    game = changePlayerFunds(game, fromPlayerId, -adjustedAmount)
    game = updateCommunityFund(game, communityFund + adjustedAmount)
  } else {
    const { funds: toPlayerFunds } = game.table.players[toPlayerId]
    const adjustedAmount = isAmountPositive
      ? Math.min(fromPlayerFunds, amount)
      : Math.max(-toPlayerFunds, amount)

    game = changePlayerFunds(game, fromPlayerId, -adjustedAmount)
    game = changePlayerFunds(game, toPlayerId, adjustedAmount)
  }

  return game
}
