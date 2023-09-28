import { stubGame } from '../../../test-utils/stubs/game'

import { updateTable } from '.'

describe('updateTable', () => {
  test('updates the community fund', () => {
    const game = stubGame()
    const newGame = updateTable(game, { communityFund: 123 })

    expect(newGame.table.communityFund).toEqual(123)
  })
})
