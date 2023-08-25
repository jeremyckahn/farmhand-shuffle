import { IGame } from '../../types'
import { updateCommunityFund } from '../update-community-fund'

export const incrementCommunityFund = (
  game: IGame,
  /**
   * This number can be negative to perform a decrement of funds.
   */
  amount: number
) => {
  const { communityFund } = game.table
  const newCommunityFund = Math.max(0, communityFund + amount)

  game = updateCommunityFund(game, newCommunityFund)

  return game
}
