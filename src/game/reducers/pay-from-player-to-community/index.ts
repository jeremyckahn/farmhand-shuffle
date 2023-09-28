import clamp from 'lodash.clamp'

import { IGame, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'

export const payFromPlayerToCommunity = (
  game: IGame,
  amount: number,
  sourcePlayerId: IPlayer['id']
) => {
  const { funds: sourcePlayerFunds } = game.table.players[sourcePlayerId]
  const { communityFund } = game.table
  const clampedAmount = clamp(amount, -communityFund, sourcePlayerFunds)

  game = incrementPlayerFunds(game, sourcePlayerId, -clampedAmount)
  game = incrementCommunityFund(game, clampedAmount)

  return game
}
