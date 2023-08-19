import { IGame, ITable } from '../../types'

export const updateCommunityFund = (
  game: IGame,
  communityFund: ITable['communityFund']
): IGame => {
  return {
    ...game,
    table: {
      ...game.table,
      communityFund,
    },
  }
}
