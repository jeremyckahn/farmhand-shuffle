import clamp from 'lodash.clamp'

import { IMatch, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'

export const payFromPlayerToCommunity = (
  match: IMatch,
  amount: number,
  sourcePlayerId: IPlayer['id']
) => {
  const { funds: sourcePlayerFunds } = match.table.players[sourcePlayerId]
  const { communityFund } = match.table
  const clampedAmount = clamp(amount, -communityFund, sourcePlayerFunds)

  match = incrementPlayerFunds(match, sourcePlayerId, -clampedAmount)
  match = incrementCommunityFund(match, clampedAmount)

  return match
}
