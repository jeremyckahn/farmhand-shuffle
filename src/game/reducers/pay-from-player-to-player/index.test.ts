import { stubMatch } from '../../../test-utils/stubs/match'
import { IMatch, IPlayer } from '../../types'

import { payFromPlayerToPlayer } from '.'

describe('payFromPlayerToPlayer', () => {
  let match: IMatch
  let player1Id: IPlayer['id']
  let player2Id: IPlayer['id']

  beforeAll(() => {
    match = stubMatch()
    const playerIds = Object.keys(match.table.players)
    const p1Id = playerIds[0]
    const p2Id = playerIds[1]

    if (!p1Id || !p2Id) {
      throw new Error('Player not found in test setup')
    }
    player1Id = p1Id
    player2Id = p2Id
  })

  describe('positive transactions', () => {
    test('transfers money from player to player', () => {
      const p1 = match.table.players[player1Id]
      const p2 = match.table.players[player2Id]
      if (!p1 || !p2) throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(match, 5, player1Id, player2Id)

      const newP1 = newMatch.table.players[player1Id]
      const newP2 = newMatch.table.players[player2Id]
      if (!newP1 || !newP2) throw new Error('Player not found after reducer')

      expect(newP1.funds).toEqual(p1.funds - 5)
      expect(newP2.funds).toEqual(p2.funds + 5)
    })

    test('does not transfer more money from player than is available', () => {
      const p1 = match.table.players[player1Id]
      const p2 = match.table.players[player2Id]
      if (!p1 || !p2) throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(
        match,
        p1.funds + 1,
        player1Id,
        player2Id
      )

      const newP1 = newMatch.table.players[player1Id]
      const newP2 = newMatch.table.players[player2Id]
      if (!newP1 || !newP2) throw new Error('Player not found after reducer')

      expect(newP1.funds).toEqual(0)
      expect(newP2.funds).toEqual(p1.funds + p2.funds)
    })
  })

  describe('negative transfers', () => {
    test('transfers money to player from player', () => {
      const p1 = match.table.players[player1Id]
      const p2 = match.table.players[player2Id]
      if (!p1 || !p2) throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(match, -5, player1Id, player2Id)

      const newP1 = newMatch.table.players[player1Id]
      const newP2 = newMatch.table.players[player2Id]
      if (!newP1 || !newP2) throw new Error('Player not found after reducer')

      expect(newP1.funds).toEqual(p1.funds + 5)
      expect(newP2.funds).toEqual(p2.funds - 5)
    })

    test('does not transfer more money to player than is available', () => {
      const p1 = match.table.players[player1Id]
      const p2 = match.table.players[player2Id]
      if (!p1 || !p2) throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(
        match,
        -(p2.funds + 1),
        player1Id,
        player2Id
      )

      const newP1 = newMatch.table.players[player1Id]
      const newP2 = newMatch.table.players[player2Id]
      if (!newP1 || !newP2) throw new Error('Player not found after reducer')

      expect(newP1.funds).toEqual(p1.funds + p2.funds)
      expect(newP2.funds).toEqual(0)
    })
  })
})
