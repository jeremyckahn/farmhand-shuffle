import { MockInstance } from 'vitest'
import shuffle from 'lodash.shuffle'

import { stubGame } from '../../../test-utils/stubs/game'

import { shuffleDeck } from '.'

vitest.mock('lodash.shuffle', () => ({
  __esModule: true,
  default: vitest.fn(),
}))

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation(arr => arr)
})

describe('shuffleDeck', () => {
  test('shuffles deck', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    shuffleDeck(game, player1Id)

    expect(shuffle).toHaveBeenCalledWith(game.table.players[player1Id].deck)
    expect(shuffle).toHaveBeenCalledTimes(1)
  })
})
