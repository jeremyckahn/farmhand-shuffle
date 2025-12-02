import { stubMatch } from '../../../test-utils/stubs/match'
import { IMatch, IPlayer } from '../../types'

import { incrementPlayerFunds } from '.'

describe('incrementPlayerFunds', () => {
  let match: IMatch
  let player1Id: IPlayer['id']

  beforeEach(() => {
    match = stubMatch()
    player1Id = Object.keys(match.table.players)[0]
  })

  test('adds funds', () => {
    const newMatch = incrementPlayerFunds(match, player1Id, 5)
    expect(newMatch.table.players[player1Id].funds).toEqual(
      match.table.players[player1Id].funds + 5
    )
  })

  test('removes funds', () => {
    const newMatch = incrementPlayerFunds(match, player1Id, -5)
    expect(newMatch.table.players[player1Id].funds).toEqual(
      match.table.players[player1Id].funds - 5
    )
  })

  test('does not remove more funds than the player has', () => {
    const newMatch = incrementPlayerFunds(
      match,
      player1Id,
      -match.table.players[player1Id].funds - 1
    )

    expect(newMatch.table.players[player1Id].funds).toEqual(0)
  })
})
