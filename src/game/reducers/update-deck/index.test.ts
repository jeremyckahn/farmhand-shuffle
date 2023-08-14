import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards/crops/carrot/carrot'

import { updateDeck } from './'

describe('updateDeck', () => {
  test("updates a player's deck", () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newDeck = [carrot.id]
    const newGame = updateDeck(game, player1Id, newDeck)

    expect(newGame.table.players[player1Id].deck).toEqual(newDeck)
  })
})
