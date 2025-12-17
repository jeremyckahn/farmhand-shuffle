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
    const maybePlayer1Id = playerIds[0]
    const maybePlayer2Id = playerIds[1]

    if (!maybePlayer1Id || !maybePlayer2Id) {
      throw new Error('Player not found in test setup')
    }

    player1Id = maybePlayer1Id
    player2Id = maybePlayer2Id
  })

  describe('positive transactions', () => {
    test('transfers money from player to player', () => {
      const maybePlayer1 = match.table.players[player1Id]
      const maybePlayer2 = match.table.players[player2Id]

      if (!maybePlayer1 || !maybePlayer2)
        throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(match, 5, player1Id, player2Id)
      const newPlayer1 = newMatch.table.players[player1Id]
      const newPlayer2 = newMatch.table.players[player2Id]

      if (!newPlayer1 || !newPlayer2)
        throw new Error('Player not found after reducer')

      expect(newPlayer1.funds).toEqual(maybePlayer1.funds - 5)
      expect(newPlayer2.funds).toEqual(maybePlayer2.funds + 5)
    })

    test('does not transfer more money from player than is available', () => {
      const player1 = match.table.players[player1Id]
      const player2 = match.table.players[player2Id]

      if (!player1 || !player2)
        throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(
        match,
        player1.funds + 1,
        player1Id,
        player2Id
      )

      const newPlayer1 = newMatch.table.players[player1Id]
      const newPlayer2 = newMatch.table.players[player2Id]

      if (!newPlayer1 || !newPlayer2)
        throw new Error('Player not found after reducer')

      expect(newPlayer1.funds).toEqual(0)
      expect(newPlayer2.funds).toEqual(player1.funds + player2.funds)
    })
  })

  describe('negative transfers', () => {
    test('transfers money to player from player', () => {
      const player1 = match.table.players[player1Id]
      const player2 = match.table.players[player2Id]

      if (!player1 || !player2)
        throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(match, -5, player1Id, player2Id)
      const newPlayer1 = newMatch.table.players[player1Id]
      const newPlayer2 = newMatch.table.players[player2Id]

      if (!newPlayer1 || !newPlayer2)
        throw new Error('Player not found after reducer')

      expect(newPlayer1.funds).toEqual(player1.funds + 5)
      expect(newPlayer2.funds).toEqual(player2.funds - 5)
    })

    test('does not transfer more money to player than is available', () => {
      const player1 = match.table.players[player1Id]
      const player2 = match.table.players[player2Id]

      if (!player1 || !player2)
        throw new Error('Player not found in test setup')

      const newMatch = payFromPlayerToPlayer(
        match,
        -(player2.funds + 1),
        player1Id,
        player2Id
      )

      const newPlayer1 = newMatch.table.players[player1Id]
      const newPlayer2 = newMatch.table.players[player2Id]

      if (!newPlayer1 || !newPlayer2)
        throw new Error('Player not found after reducer')

      expect(newPlayer1.funds).toEqual(player1.funds + player2.funds)
      expect(newPlayer2.funds).toEqual(0)
    })
  })
})
