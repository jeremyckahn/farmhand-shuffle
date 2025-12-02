import { stubMatch } from '../../../test-utils/stubs/match'
import { IMatch, IPlayer } from '../../types'
import { updateTable } from '../update-table'

import { payFromPlayerToCommunity } from '.'

describe('payFromPlayerToCommunity', () => {
  let match: IMatch
  let player1Id: IPlayer['id']

  beforeAll(() => {
    match = stubMatch()
    player1Id = Object.keys(match.table.players)[0]
  })

  test('transfers money from player to community fund', () => {
    const newMatch = payFromPlayerToCommunity(match, 5, player1Id)

    expect(newMatch.table.communityFund).toEqual(match.table.communityFund + 5)
    expect(newMatch.table.players[player1Id].funds).toEqual(
      match.table.players[player1Id].funds - 5
    )
  })

  test('transfers money from community fund to player', () => {
    match = updateTable(match, { communityFund: 50 })
    const newMatch = payFromPlayerToCommunity(match, -5, player1Id)

    expect(newMatch.table.communityFund).toEqual(match.table.communityFund - 5)
    expect(newMatch.table.players[player1Id].funds).toEqual(
      match.table.players[player1Id].funds + 5
    )
  })

  test('does not transfer more money from player than they have', () => {
    const newMatch = payFromPlayerToCommunity(
      match,
      match.table.players[player1Id].funds + 1,
      player1Id
    )

    expect(newMatch.table.communityFund).toEqual(
      match.table.communityFund + match.table.players[player1Id].funds
    )
    expect(newMatch.table.players[player1Id].funds).toEqual(0)
  })

  test('does not transfer more money from community fund than it has', () => {
    const newMatch = payFromPlayerToCommunity(
      match,
      -(match.table.communityFund + 1),
      player1Id
    )

    expect(newMatch.table.communityFund).toEqual(0)
    expect(newMatch.table.players[player1Id].funds).toEqual(
      match.table.players[player1Id].funds + match.table.communityFund
    )
  })
})
