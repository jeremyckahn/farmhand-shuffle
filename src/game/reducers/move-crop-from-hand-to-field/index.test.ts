import { stubCarrot, stubWater } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import {
  InvalidCardError,
  InvalidCardIndexError,
} from '../../services/Rules/errors'
import { IPlayedCrop } from '../../types'

import { moveCropFromHandToField } from '.'

describe('moveCropFromHandToField', () => {
  test("moves a card from a player's hand to their field", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    // eslint-disable-next-line functional/immutable-data
    game.table.players[player1Id].hand[0] = stubCarrot
    const newGame = moveCropFromHandToField(game, player1Id, 0)

    expect(newGame.table.players[player1Id].hand).toEqual(
      game.table.players[player1Id].hand.slice(1)
    )

    expect(newGame.table.players[player1Id].field.crops).toEqual<IPlayedCrop[]>(
      [{ instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 }]
    )
  })

  test('throws an error if an invalid card index is specified', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    expect(() => {
      moveCropFromHandToField(
        game,
        player1Id,
        game.table.players[player1Id].hand.length
      )
    }).toThrow(InvalidCardIndexError)
  })

  test('throws an error if an invalid card type is specified', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    // eslint-disable-next-line functional/immutable-data
    game.table.players[player1Id].hand[0] = stubWater

    expect(() => {
      moveCropFromHandToField(game, player1Id, 0)
    }).toThrow(InvalidCardError)
  })
})
