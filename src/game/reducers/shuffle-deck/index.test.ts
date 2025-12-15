import shuffle from 'lodash.shuffle'

import { stubMatch } from '../../../test-utils/stubs/match'

import { shuffleDeck } from '.'

vitest.mock('lodash.shuffle')

describe('shuffleDeck', () => {
  test('shuffles deck', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    shuffleDeck(match, player1Id)

    const player = match.table.players[player1Id]

    if (!player) {
      throw new Error('Player not found')
    }

    expect(shuffle).toHaveBeenCalledWith(player.deck)
    expect(shuffle).toHaveBeenCalledTimes(1)
  })
})
