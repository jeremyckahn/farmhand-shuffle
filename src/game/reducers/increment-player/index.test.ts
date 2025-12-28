import { stubMatch } from '../../../test-utils/stubs/match'

import { updateMatch } from '../update-match'

import { incrementPlayer } from '.'

describe('incrementPlayer', () => {
  test('changes from player 1 to player 2', () => {
    const match = stubMatch()
    const [, player2Id] = Object.keys(match.table.players)

    const newMatch = incrementPlayer(match)

    expect(newMatch.currentPlayerId).toEqual(player2Id)
  })

  test('changes from player 2 to player 1', () => {
    const match = stubMatch()
    const [player1Id, player2Id] = Object.keys(match.table.players)

    let newMatch = updateMatch(match, { currentPlayerId: player2Id })

    newMatch = incrementPlayer(newMatch)

    expect(newMatch.currentPlayerId).toEqual(player1Id)
  })

  test('throws error is there is no current player', () => {
    const match = stubMatch()
    const newMatch = updateMatch(match, { currentPlayerId: null })

    expect(() => {
      incrementPlayer(newMatch)
    }).toThrowError(TypeError)
  })
})
