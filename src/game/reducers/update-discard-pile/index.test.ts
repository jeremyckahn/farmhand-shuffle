import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards/crops/carrot'

import { updateDiscardPile } from './'

describe('updateDiscardPile', () => {
  test("updates a player's discard pile", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newDiscardPile = [carrot.id]
    const newGame = updateDiscardPile(game, player1Id, newDiscardPile)

    expect(newGame.table.players[player1Id].discardPile).toEqual(newDiscardPile)
  })
})
