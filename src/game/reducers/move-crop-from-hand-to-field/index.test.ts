import { stubGame } from '../../../test-utils/stubs/game'
import { carrot, water } from '../../cards'
import { IPlayedCrop } from '../../types'

import {
  InvalidCardError,
  InvalidCardIndexError,
} from '../../services/Rules/errors'

import { moveCropFromHandToField } from '.'

describe('moveCropFromHandToField', () => {
  test("moves a card from a player's hand to their field", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)

    // eslint-disable-next-line functional/immutable-data
    game.table.players[player1Id].hand[0] = carrot.id
    const newGame = moveCropFromHandToField(game, player1Id, 0)

    expect(newGame.table.players[player1Id].hand).toEqual(
      game.table.players[player1Id].hand.slice(1)
    )

    expect(newGame.table.players[player1Id].field.crops).toEqual<IPlayedCrop[]>(
      [{ id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 }]
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
    game.table.players[player1Id].hand[0] = water.id

    expect(() => {
      moveCropFromHandToField(game, player1Id, 0)
    }).toThrow(InvalidCardError)
  })
})
