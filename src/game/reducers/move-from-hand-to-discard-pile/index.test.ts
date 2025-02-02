import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards'
import { InvalidCardIndexError } from '../../services/Rules/errors'

import { moveFromHandToDiscardPile } from '.'

describe('moveFromHandToDiscardPile', () => {
  test("moves a card from a player's hand to their discard pile", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    // eslint-disable-next-line functional/immutable-data
    game.table.players[player1Id].hand[0] = carrot.id
    const newGame = moveFromHandToDiscardPile(game, player1Id, 0)

    expect(newGame.table.players[player1Id].hand).toEqual(
      game.table.players[player1Id].hand.slice(1)
    )

    expect(newGame.table.players[player1Id].discardPile).toEqual([carrot.id])
  })

  test('throws an error if an invalid card is specified', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    expect(() => {
      moveFromHandToDiscardPile(
        game,
        player1Id,
        game.table.players[player1Id].hand.length
      )
    }).toThrow(InvalidCardIndexError)
  })
})
