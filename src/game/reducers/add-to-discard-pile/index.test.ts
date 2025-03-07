import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'

import { addToDiscardPile } from '.'

describe('addToDiscardPile', () => {
  test("adds to a player's discard pile", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newGame = addToDiscardPile(game, player1Id, stubCarrot)

    expect(newGame.table.players[player1Id].discardPile).toEqual([stubCarrot])
  })
})
