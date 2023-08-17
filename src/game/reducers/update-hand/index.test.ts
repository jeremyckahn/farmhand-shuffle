import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards/crops/carrot'

import { updateHand } from './'

describe('updateHand', () => {
  test("updates a player's hand", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newHand = [carrot.id]
    const newGame = updateHand(game, player1Id, newHand)

    expect(newGame.table.players[player1Id].hand).toEqual(newHand)
  })
})
