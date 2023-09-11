import { stubGame } from '../../../test-utils/stubs/game'
import { IGame, IPlayer } from '../../types'
import { updateTable } from '../update-table'

import { payFromPlayerToCommunity } from '.'

describe('payFromPlayerToCommunity', () => {
  let game: IGame
  let player1Id: IPlayer['id']

  beforeAll(() => {
    game = stubGame()
    player1Id = Object.keys(game.table.players)[0]
  })

  test('transfers money from player to community fund', () => {
    const newGame = payFromPlayerToCommunity(game, 5, player1Id)

    expect(newGame.table.communityFund).toEqual(game.table.communityFund + 5)
    expect(newGame.table.players[player1Id].funds).toEqual(
      game.table.players[player1Id].funds - 5
    )
  })

  test('transfers money from community fund to player', () => {
    game = updateTable(game, { communityFund: 50 })
    const newGame = payFromPlayerToCommunity(game, -5, player1Id)

    expect(newGame.table.communityFund).toEqual(game.table.communityFund - 5)
    expect(newGame.table.players[player1Id].funds).toEqual(
      game.table.players[player1Id].funds + 5
    )
  })

  test('does not transfer more money from player than they have', () => {
    const newGame = payFromPlayerToCommunity(
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
    const newGame = payFromPlayerToCommunity(
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
