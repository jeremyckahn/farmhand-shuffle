import { randomNumber } from '../../../services/RandomNumber'
import { stubPlayer } from '../../../test-utils/stubs/players'
import { factory } from '../../services/Factory'

import { endTurn } from '.'

const player1 = stubPlayer()
const player2 = stubPlayer()

describe('endTurn', () => {
  test('increments player', () => {
    vitest.spyOn(randomNumber, 'generate').mockReturnValue(1)
    const game = factory.buildGameForSession([player1, player2])
    const [player1Id] = Object.keys(game.table.players)

    const newGame = endTurn(game)

    expect(newGame.currentPlayerId).toEqual(player1Id)
  })
})
