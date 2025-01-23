import { randomNumber } from '../../../services/RandomNumber'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { factory } from '../../services/Factory'

import { endTurn } from '.'

describe('endTurn', () => {
  test('increments player', () => {
    vitest.spyOn(randomNumber, 'generate').mockReturnValue(1)
    const game = factory.buildGameForSession([stubPlayer1, stubPlayer2])

    const newGame = endTurn(game)

    expect(newGame.currentPlayerId).toEqual(stubPlayer2.id)
  })
})
