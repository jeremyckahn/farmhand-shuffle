import { IGame } from '../../types'
import { updateTable } from '../update-table'

export const incrementCommunityFund = (
  game: IGame,
  /**
   * This number can be negative to perform a decrement of funds.
   */
  amount: number
) => {
  const { communityFund } = game.table
  const newCommunityFund = Math.max(0, communityFund + amount)

  game = updateTable(game, { communityFund: newCommunityFund })

  return game
}
