import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { factory } from '../../services/Factory'
import { InvalidCardIndexError } from '../../services/Rules/errors'

import { moveFromFieldToDiscardPile } from '.'

describe('moveFromFieldToDiscardPile', () => {
  test("moves a card from a player's field to their discard pile", () => {
    const game = stubGame()

    // eslint-disable-next-line functional/immutable-data
    game.table.players[stubPlayer1.id].field.crops[0] =
      factory.buildPlayedCrop(stubCarrot)
    const newGame = moveFromFieldToDiscardPile(game, stubPlayer1.id, 0)

    expect(newGame.table.players[stubPlayer1.id].field.crops).toEqual([
      undefined,
    ])

    expect(newGame.table.players[stubPlayer1.id].discardPile).toEqual([
      stubCarrot,
    ])
  })

  test('supports sparse fields', () => {
    const game = stubGame()

    const playedCarrot = factory.buildPlayedCrop(stubCarrot)
    const playedPumpkin = factory.buildPlayedCrop(stubPumpkin)

    // eslint-disable-next-line functional/immutable-data
    game.table.players[stubPlayer1.id].field.crops[0] = playedCarrot
    // eslint-disable-next-line functional/immutable-data
    game.table.players[stubPlayer1.id].field.crops[1] = playedPumpkin
    const newGame = moveFromFieldToDiscardPile(game, stubPlayer1.id, 0)

    expect(newGame.table.players[stubPlayer1.id].field.crops).toEqual([
      undefined,
      playedPumpkin,
    ])
  })

  test('throws an error if an invalid card index is specified', () => {
    const game = stubGame()

    expect(() => {
      moveFromFieldToDiscardPile(
        game,
        stubPlayer1.id,
        game.table.players[stubPlayer1.id].field.crops.length
      )
    }).toThrow(InvalidCardIndexError)
  })
})
