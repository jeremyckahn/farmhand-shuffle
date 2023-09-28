import { stubGame } from '../../../test-utils/stubs/game'

import { updateGame } from '.'

describe('updateGame', () => {
  test('updates game properties', () => {
    let game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    game = updateGame(game, {
      currentPlayerId: player1Id,
    })

    expect(game.currentPlayerId).toEqual(player1Id)
  })
})
