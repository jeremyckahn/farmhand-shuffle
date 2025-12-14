import clamp from 'lodash.clamp'

import { IMatch, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'

export const payFromPlayerToCommunity = (
  match: IMatch,
  amount: number,
  sourcePlayerId: IPlayer['id']
) => {
  const sourcePlayer = match.table.players[sourcePlayerId]

  if (!sourcePlayer) {
    throw new Error(`Player not found: ${sourcePlayerId}`)
  }

  const { funds: sourcePlayerFunds } = sourcePlayer
  const { communityFund } = match.table
  const clampedAmount = clamp(amount, -communityFund, sourcePlayerFunds)

  match = incrementPlayerFunds(match, sourcePlayerId, -clampedAmount)
  match = incrementCommunityFund(match, clampedAmount)

  return match
}
