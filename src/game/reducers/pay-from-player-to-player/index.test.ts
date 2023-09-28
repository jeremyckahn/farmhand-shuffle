import { stubGame } from '../../../test-utils/stubs/game'
import { IGame, IPlayer } from '../../types'

import { payFromPlayerToPlayer } from '.'

describe('payFromPlayerToPlayer', () => {
  let game: IGame
  let player1Id: IPlayer['id']
  let player2Id: IPlayer['id']

  beforeAll(() => {
    game = stubGame()
    player1Id = Object.keys(game.table.players)[0]
    player2Id = Object.keys(game.table.players)[1]
  })

  describe('positive transactions', () => {
    test('transfers money from player to player', () => {
      const newGame = payFromPlayerToPlayer(game, 5, player1Id, player2Id)

      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds - 5
      )
      expect(newGame.table.players[player2Id].funds).toEqual(
        game.table.players[player2Id].funds + 5
      )
    })

    test('does not transfer more money from player than is available', () => {
      const newGame = payFromPlayerToPlayer(
        game,
        game.table.players[player1Id].funds + 1,
        player1Id,
        player2Id
      )

      expect(newGame.table.players[player1Id].funds).toEqual(0)
      expect(newGame.table.players[player2Id].funds).toEqual(
        game.table.players[player1Id].funds +
          game.table.players[player2Id].funds
      )
    })
  })

  describe('negative transfers', () => {
    test('transfers money to player from player', () => {
      const newGame = payFromPlayerToPlayer(game, -5, player1Id, player2Id)

      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds + 5
      )
      expect(newGame.table.players[player2Id].funds).toEqual(
        game.table.players[player2Id].funds - 5
      )
    })

    test('does not transfer more money to player than is available', () => {
      const newGame = payFromPlayerToPlayer(
        game,
        -(game.table.players[player1Id].funds + 1),
        player1Id,
        player2Id
      )

      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds +
          game.table.players[player2Id].funds
      )
      expect(newGame.table.players[player2Id].funds).toEqual(0)
    })
  })
})
