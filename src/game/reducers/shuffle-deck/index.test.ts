import { stubGame } from '../../../test-utils/stubs/game'

import { shuffleDeck } from '.'

describe('shuffleDeck', () => {
  test('shuffles deck', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newGame = shuffleDeck(game, player1Id)

    expect(newGame.table.players[player1Id].deck).toEqual(
      game.table.players[player1Id].deck.slice().reverse()
    )
  })
})
