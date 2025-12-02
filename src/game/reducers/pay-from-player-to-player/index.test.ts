import { stubMatch } from '../../../test-utils/stubs/match'
import { IMatch, IPlayer } from '../../types'

import { payFromPlayerToPlayer } from '.'

describe('payFromPlayerToPlayer', () => {
  let match: IMatch
  let player1Id: IPlayer['id']
  let player2Id: IPlayer['id']

  beforeAll(() => {
    match = stubMatch()
    player1Id = Object.keys(match.table.players)[0]
    player2Id = Object.keys(match.table.players)[1]
  })

  describe('positive transactions', () => {
    test('transfers money from player to player', () => {
      const newMatch = payFromPlayerToPlayer(match, 5, player1Id, player2Id)

      expect(newMatch.table.players[player1Id].funds).toEqual(
        match.table.players[player1Id].funds - 5
      )
      expect(newMatch.table.players[player2Id].funds).toEqual(
        match.table.players[player2Id].funds + 5
      )
    })

    test('does not transfer more money from player than is available', () => {
      const newMatch = payFromPlayerToPlayer(
        match,
        match.table.players[player1Id].funds + 1,
        player1Id,
        player2Id
      )

      expect(newMatch.table.players[player1Id].funds).toEqual(0)
      expect(newMatch.table.players[player2Id].funds).toEqual(
        match.table.players[player1Id].funds +
          match.table.players[player2Id].funds
      )
    })
  })

  describe('negative transfers', () => {
    test('transfers money to player from player', () => {
      const newMatch = payFromPlayerToPlayer(match, -5, player1Id, player2Id)

      expect(newMatch.table.players[player1Id].funds).toEqual(
        match.table.players[player1Id].funds + 5
      )
      expect(newMatch.table.players[player2Id].funds).toEqual(
        match.table.players[player2Id].funds - 5
      )
    })

    test('does not transfer more money to player than is available', () => {
      const newMatch = payFromPlayerToPlayer(
        match,
        -(match.table.players[player1Id].funds + 1),
        player1Id,
        player2Id
      )

      expect(newMatch.table.players[player1Id].funds).toEqual(
        match.table.players[player1Id].funds +
          match.table.players[player2Id].funds
      )
      expect(newMatch.table.players[player2Id].funds).toEqual(0)
    })
  })
})
