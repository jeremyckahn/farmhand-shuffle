import shuffle from 'lodash.shuffle'

import { stubMatch } from '../../../test-utils/stubs/match'

import { shuffleDeck } from '.'

vitest.mock('lodash.shuffle')

describe('shuffleDeck', () => {
  test('shuffles deck', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)
    shuffleDeck(match, player1Id)

    expect(shuffle).toHaveBeenCalledWith(match.table.players[player1Id].deck)
    expect(shuffle).toHaveBeenCalledTimes(1)
  })
})
