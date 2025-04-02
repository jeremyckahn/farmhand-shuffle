import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { factory } from '../../services/Factory'
import { InvalidCardIndexError } from '../../services/Rules/errors'

import { moveFromFieldToDiscardPile } from '.'

describe('moveFromFieldToDiscardPile', () => {
  test("moves a card from a player's field to their discard pile", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    // eslint-disable-next-line functional/immutable-data
    game.table.players[player1Id].field.crops[0] =
      factory.buildPlayedCrop(stubCarrot)
    const newGame = moveFromFieldToDiscardPile(game, player1Id, 0)

    expect(newGame.table.players[player1Id].field.crops).toEqual(
      game.table.players[player1Id].field.crops.slice(1)
    )

    expect(newGame.table.players[player1Id].discardPile).toEqual([stubCarrot])
  })

  test('throws an error if an invalid card index is specified', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    expect(() => {
      moveFromFieldToDiscardPile(
        game,
        player1Id,
        game.table.players[player1Id].field.crops.length
      )
    }).toThrow(InvalidCardIndexError)
  })
})
