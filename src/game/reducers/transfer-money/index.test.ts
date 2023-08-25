import { stubGame } from '../../../test-utils/stubs/game'
import { IGame, IPlayer } from '../../types'
import { updateCommunityFund } from '../update-community-fund'

import { transferMoney } from '.'

describe('transferMoney', () => {
  let game: IGame
  let player1Id: IPlayer['id']
  let player2Id: IPlayer['id']

  beforeAll(() => {
    game = stubGame()
    player1Id = Object.keys(game.table.players)[0]
    player2Id = Object.keys(game.table.players)[1]
  })

  describe('player to community fund transfers', () => {
    test('transfers money from player to community fund', () => {
      const newGame = transferMoney(game, 5, player1Id)

      expect(newGame.table.communityFund).toEqual(game.table.communityFund + 5)
      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds - 5
      )
    })

    test('transfers money from community fund to player', () => {
      game = updateCommunityFund(game, 50)
      const newGame = transferMoney(game, -5, player1Id)

      expect(newGame.table.communityFund).toEqual(game.table.communityFund - 5)
      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds + 5
      )
    })

    test('does not transfer more money from player than they have', () => {
      const newGame = transferMoney(
        game,
        game.table.players[player1Id].funds + 1,
        player1Id
      )

      expect(newGame.table.communityFund).toEqual(
        game.table.communityFund + game.table.players[player1Id].funds
      )
      expect(newGame.table.players[player1Id].funds).toEqual(0)
    })

    test('does not transfer more money from community fund than it has', () => {
      const newGame = transferMoney(
        game,
        -(game.table.communityFund + 1),
        player1Id
      )

      expect(newGame.table.communityFund).toEqual(0)
      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds + game.table.communityFund
      )
    })
  })

  describe('player to player transfers', () => {
    describe('positive transactions', () => {
      test('transfers money from player to player', () => {
        const newGame = transferMoney(game, 5, player1Id, player2Id)

        expect(newGame.table.players[player1Id].funds).toEqual(
          game.table.players[player1Id].funds - 5
        )
        expect(newGame.table.players[player2Id].funds).toEqual(
          game.table.players[player2Id].funds + 5
        )
      })

      test('does not transfer more money from player than is available', () => {
        const newGame = transferMoney(
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
        const newGame = transferMoney(game, -5, player1Id, player2Id)

        expect(newGame.table.players[player1Id].funds).toEqual(
          game.table.players[player1Id].funds + 5
        )
        expect(newGame.table.players[player2Id].funds).toEqual(
          game.table.players[player2Id].funds - 5
        )
      })

      test('does not transfer more money to player than is available', () => {
        const newGame = transferMoney(
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
})
