import { stubGame } from '../../../test-utils/stubs/game'

import { updateCommunityFund } from './'

describe('updateCommunityFund', () => {
  test('updates the community fund', () => {
    const game = stubGame()
    const newGame = updateCommunityFund(game, 123)

    expect(newGame.table.communityFund).toEqual(123)
  })
})
