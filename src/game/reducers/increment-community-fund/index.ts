import { IMatch } from '../../types'
import { updateTable } from '../update-table'

export const incrementCommunityFund = (
  match: IMatch,
  /**
   * This number can be negative to perform a decrement of funds.
   */
  amount: number
) => {
  const { communityFund } = match.table
  const newCommunityFund = Math.max(0, communityFund + amount)

  match = updateTable(match, { communityFund: newCommunityFund })

  return match
}
