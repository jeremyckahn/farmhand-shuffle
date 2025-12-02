import { stubMatch } from '../../../test-utils/stubs/match'

import { updatePlayer } from '.'

describe('updatePlayer', () => {
  test('updates player properties', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)
    const newMatch = updatePlayer(match, player1Id, { funds: 30 })

    expect(newMatch.table.players[player1Id].funds).toEqual(30)
  })
})
