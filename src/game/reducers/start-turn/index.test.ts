import shuffle from 'lodash.shuffle'
import { MockInstance } from 'vitest'

import { stubPlayer } from '../../../test-utils/stubs/players'
import { pumpkin } from '../../cards'
import { DECK_SIZE, STANDARD_TAX_AMOUNT } from '../../config'
import { updatePlayer } from '../../reducers/update-player'
import { ICard, IGame, IPlayer } from '../../types'
import { factory } from '../../services/Factory'

import { startTurn } from '.'

const player1 = stubPlayer()
const player2 = stubPlayer()

vitest.mock('../../cards/crops/handlePlayFromHand', () => {
  return {
    handlePlayFromHand: vitest.fn(),
  }
})

vitest.mock('lodash.shuffle', () => ({
  __esModule: true,
  default: vitest.fn(),
}))

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation(
    (arr: ICard[]) => arr
  )
})

// Make player2's deck slightly different from player1's to prevent false
// positives.
// eslint-disable-next-line functional/immutable-data
player2.deck[DECK_SIZE - 1] = pumpkin.id

describe('startTurn', () => {
  let game: IGame
  let player1Id: IPlayer['id']

  beforeEach(() => {
    game = factory.buildGameForSession([player1, player2])
    player1Id = Object.keys(game.table.players)[0]
  })

  test('pays tax to community fund', () => {
    const newGame = startTurn(game, player1Id)

    expect(newGame.table.players[player1Id].funds).toEqual(
      game.table.players[player1Id].funds - STANDARD_TAX_AMOUNT
    )

    expect(newGame.table.communityFund).toEqual(
      game.table.communityFund + STANDARD_TAX_AMOUNT
    )
  })

  test('aborts if player is out of money after paying tax', () => {
    const newGame = updatePlayer(game, player1Id, {
      funds: STANDARD_TAX_AMOUNT,
    })

    expect(() => {
      startTurn(newGame, player1Id)
    }).toThrow(`[PlayerOutOfFundsError] Player ${player1Id} is out of funds.`)
  })

  test('draws a card from the deck', () => {
    const newGame = startTurn(game, player1Id)

    expect(newGame.table.players[player1Id].hand).toEqual([
      ...game.table.players[player1Id].hand,
      game.table.players[player1Id].deck[0],
    ])

    expect(newGame.table.players[player1Id].deck).toEqual(
      game.table.players[player1Id].deck.slice(1)
    )
  })
})
