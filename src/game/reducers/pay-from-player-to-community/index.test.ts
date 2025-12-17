import { stubMatch } from '../../../test-utils/stubs/match'
import { IMatch, IPlayer } from '../../types'
import { updateTable } from '../update-table'

import { payFromPlayerToCommunity } from '.'

describe('payFromPlayerToCommunity', () => {
  let match: IMatch
  let player1Id: IPlayer['id']

  beforeAll(() => {
    match = stubMatch()
    const maybePlayer1Id = Object.keys(match.table.players)[0]

    if (!maybePlayer1Id) throw new Error('Player not found in test setup')

    player1Id = maybePlayer1Id
  })

  test('transfers money from player to community fund', () => {
    const playerBefore = match.table.players[player1Id]

    if (!playerBefore) throw new Error('Player not found in test setup')

    const newMatch = payFromPlayerToCommunity(match, 5, player1Id)
    const playerAfter = newMatch.table.players[player1Id]

    if (!playerAfter) throw new Error('Player not found after payment')

    expect(newMatch.table.communityFund).toEqual(match.table.communityFund + 5)
    expect(playerAfter.funds).toEqual(playerBefore.funds - 5)
  })

  test('transfers money from community fund to player', () => {
    match = updateTable(match, { communityFund: 50 })
    const playerBefore = match.table.players[player1Id]

    if (!playerBefore) throw new Error('Player not found in test setup')

    const newMatch = payFromPlayerToCommunity(match, -5, player1Id)
    const playerAfter = newMatch.table.players[player1Id]

    if (!playerAfter) throw new Error('Player not found after payment')

    expect(newMatch.table.communityFund).toEqual(match.table.communityFund - 5)
    expect(playerAfter.funds).toEqual(playerBefore.funds + 5)
  })

  test('does not transfer more money from player than they have', () => {
    const playerBefore = match.table.players[player1Id]

    if (!playerBefore) throw new Error('Player not found in test setup')

    const newMatch = payFromPlayerToCommunity(
      match,
      playerBefore.funds + 1,
      player1Id
    )
    const playerAfter = newMatch.table.players[player1Id]

    if (!playerAfter) throw new Error('Player not found after payment')

    expect(newMatch.table.communityFund).toEqual(
      match.table.communityFund + playerBefore.funds
    )
    expect(playerAfter.funds).toEqual(0)
  })

  test('does not transfer more money from community fund than it has', () => {
    const playerBefore = match.table.players[player1Id]

    if (!playerBefore) throw new Error('Player not found in test setup')

    const newMatch = payFromPlayerToCommunity(
      match,
      -(match.table.communityFund + 1),
      player1Id
    )
    const playerAfter = newMatch.table.players[player1Id]

    if (!playerAfter) throw new Error('Player not found after payment')

    expect(newMatch.table.communityFund).toEqual(0)
    expect(playerAfter.funds).toEqual(
      playerBefore.funds + match.table.communityFund
    )
  })
})
