import { stubGame } from '../../../test-utils/stubs/game'

import { updatePlayer } from './index'

describe('updatePlayer', () => {
  test('updates player properties', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newGame = updatePlayer(game, player1Id, { funds: 30 })

    expect(newGame.table.players[player1Id].funds).toEqual(30)
  })
})
