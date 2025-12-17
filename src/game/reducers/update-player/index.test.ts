import { stubMatch } from '../../../test-utils/stubs/match'

import { updatePlayer } from '.'

describe('updatePlayer', () => {
  test('updates player properties', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const newMatch = updatePlayer(match, player1Id, { funds: 30 })
    const newPlayer = newMatch.table.players[player1Id]

    if (!newPlayer) {
      throw new Error('Player not found')
    }

    expect(newPlayer.funds).toEqual(30)
  })
})
