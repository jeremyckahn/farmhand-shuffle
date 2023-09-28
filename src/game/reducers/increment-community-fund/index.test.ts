import { stubGame } from '../../../test-utils/stubs/game'
import { IGame } from '../../types'
import { updateTable } from '../update-table'

import { incrementCommunityFund } from '.'

describe('incrementCommunityFund', () => {
  let game: IGame

  beforeEach(() => {
    game = stubGame()
  })

  test('adds funds', () => {
    const newGame = incrementCommunityFund(game, 5)
    expect(newGame.table.communityFund).toEqual(game.table.communityFund + 5)
  })

  test('removes funds', () => {
    game = updateTable(game, { communityFund: 50 })

    const newGame = incrementCommunityFund(game, -5)
    expect(newGame.table.communityFund).toEqual(game.table.communityFund - 5)
  })

  test('does not remove more funds than the community fund has', () => {
    const newGame = incrementCommunityFund(game, -game.table.communityFund - 1)

    expect(newGame.table.communityFund).toEqual(0)
  })
})
