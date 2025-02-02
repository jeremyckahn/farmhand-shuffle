import { randomNumber } from '../../../services/RandomNumber'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { carrot, water } from '../../cards'
import { DECK_SIZE } from '../../config'
import { updatePlayer } from '../update-player'

import { drawValidStartingHand } from '.'

describe('drawValidStartingHand', () => {
  test('ensures a hand with at least one crop is pulled', () => {
    vitest.spyOn(randomNumber, 'generate').mockReturnValue(1)

    let game = stubGame()

    const hand: string[] = []

    // NOTE: The one crop card is placed at the bottom of the deck here
    const deck = [...new Array<string>(DECK_SIZE - 1).fill(water.id), carrot.id]

    game = updatePlayer(game, stubPlayer1.id, {
      hand,
      deck,
    })

    game = drawValidStartingHand(game, stubPlayer1)

    expect(game.table.players[stubPlayer1.id].hand).toContain(carrot.id)
  })
})
