import { stubMatch } from '../../../test-utils/stubs/match'
import { IMatch, IPlayer } from '../../types'

import { incrementPlayerFunds } from '.'

describe('incrementPlayerFunds', () => {
  let match: IMatch
  let player1Id: IPlayer['id']

  beforeEach(() => {
    match = stubMatch()
    const p1Id = Object.keys(match.table.players)[0]
    if (!p1Id) {
      throw new Error('Player not found in test setup')
    }
    player1Id = p1Id
  })

  test('adds funds', () => {
    const playerBefore = match.table.players[player1Id]
    if (!playerBefore) throw new Error('Player not found in test setup')

    const newMatch = incrementPlayerFunds(match, player1Id, 5)
    const playerAfter = newMatch.table.players[player1Id]
    if (!playerAfter)
      throw new Error('Player not found after incrementing funds')

    expect(playerAfter.funds).toEqual(playerBefore.funds + 5)
  })

  test('removes funds', () => {
    const playerBefore = match.table.players[player1Id]
    if (!playerBefore) throw new Error('Player not found in test setup')

    const newMatch = incrementPlayerFunds(match, player1Id, -5)
    const playerAfter = newMatch.table.players[player1Id]
    if (!playerAfter)
      throw new Error('Player not found after incrementing funds')

    expect(playerAfter.funds).toEqual(playerBefore.funds - 5)
  })

  test('does not remove more funds than the player has', () => {
    const playerBefore = match.table.players[player1Id]
    if (!playerBefore) throw new Error('Player not found in test setup')

    const newMatch = incrementPlayerFunds(
      match,
      player1Id,
      -playerBefore.funds - 1
    )
    const playerAfter = newMatch.table.players[player1Id]
    if (!playerAfter)
      throw new Error('Player not found after incrementing funds')

    expect(playerAfter.funds).toEqual(0)
  })
})
