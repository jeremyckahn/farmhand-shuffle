import { stubMatch } from '../../../test-utils/stubs/match'

import { updateMatch } from '.'

describe('updateMatch', () => {
  test('updates match properties', () => {
    let match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    match = updateMatch(match, {
      currentPlayerId: player1Id,
    })

    expect(match.currentPlayerId).toEqual(player1Id)
  })
})
