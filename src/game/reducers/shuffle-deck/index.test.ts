import { randomNumber } from '../../../services/RandomNumber'
import { stubMatch } from '../../../test-utils/stubs/match'

import { shuffleDeck } from '.'

describe('shuffleDeck', () => {
  test('shuffles deck', () => {
    const spy = vi.spyOn(randomNumber, 'shuffle')
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

    expect(spy).toHaveBeenCalledWith(player.deck)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
