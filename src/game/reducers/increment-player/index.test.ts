import { stubGame } from '../../../test-utils/stubs/game'

import { updateGame } from '../update-game/index'

import { incrementPlayer } from '.'

describe('incrementPlayer', () => {
  test('changes from player 1 to player 2', () => {
    const game = stubGame()
    const [, player2Id] = Object.keys(game.table.players)

    const newGame = incrementPlayer(game)

    expect(newGame.currentPlayerId).toEqual(player2Id)
  })

  test('changes from player 2 to player 1', () => {
    const game = stubGame()
    const [player1Id, player2Id] = Object.keys(game.table.players)

    let newGame = updateGame(game, { currentPlayerId: player2Id })
    newGame = incrementPlayer(newGame)

    expect(newGame.currentPlayerId).toEqual(player1Id)
  })

  test('throws error is there is no current player', () => {
    const game = stubGame()
    const newGame = updateGame(game, { currentPlayerId: null })

    expect(() => {
      incrementPlayer(newGame)
    }).toThrowError(TypeError)
  })
})
