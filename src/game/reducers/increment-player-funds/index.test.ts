import { stubGame } from '../../../test-utils/stubs/game'
import { IGame, IPlayer } from '../../types'

import { incrementPlayerFunds } from '.'

describe('incrementPlayerFunds', () => {
  let game: IGame
  let player1Id: IPlayer['id']

  beforeEach(() => {
    game = stubGame()
    player1Id = Object.keys(game.table.players)[0]
  })

  test('adds funds', () => {
    const newGame = incrementPlayerFunds(game, player1Id, 5)
    expect(newGame.table.players[player1Id].funds).toEqual(
      game.table.players[player1Id].funds + 5
    )
  })

  test('removes funds', () => {
    const newGame = incrementPlayerFunds(game, player1Id, -5)
    expect(newGame.table.players[player1Id].funds).toEqual(
      game.table.players[player1Id].funds - 5
    )
  })

  test('does not remove more funds than the player has', () => {
    const newGame = incrementPlayerFunds(
      game,
      player1Id,
      -game.table.players[player1Id].funds - 1
    )

    expect(newGame.table.players[player1Id].funds).toEqual(0)
  })
})
