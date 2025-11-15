import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { updatePlayer } from '../update-player'

import { addCardsPlayedDuringTurn } from '.'

describe('addCardsPlayedDuringTurn', () => {
  test("adds to a player's turn cards played record", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newGame = addCardsPlayedDuringTurn(game, player1Id, [
      stubCarrot,
      stubPumpkin,
    ])

    expect(newGame.table.players[player1Id].cardsPlayedDuringTurn).toEqual([
      stubCarrot,
      stubPumpkin,
    ])
  })

  test('cards are prepended', () => {
    let game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    game = updatePlayer(game, player1Id, {
      cardsPlayedDuringTurn: [stubCarrot, stubWater],
    })
    const newGame = addCardsPlayedDuringTurn(game, player1Id, [stubPumpkin])

    expect(newGame.table.players[player1Id].cardsPlayedDuringTurn).toEqual([
      stubPumpkin,
      stubCarrot,
      stubWater,
    ])
  })
})
