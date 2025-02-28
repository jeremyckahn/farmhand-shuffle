import shuffle from 'lodash.shuffle'

import { stubGame } from '../../../test-utils/stubs/game'

import { shuffleDeck } from '.'

vitest.mock('lodash.shuffle')

describe('shuffleDeck', () => {
  test('shuffles deck', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    shuffleDeck(game, player1Id)

    expect(shuffle).toHaveBeenCalledWith(game.table.players[player1Id].deck)
    expect(shuffle).toHaveBeenCalledTimes(1)
  })
})
