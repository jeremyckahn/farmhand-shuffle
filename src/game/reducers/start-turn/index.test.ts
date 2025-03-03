import shuffle from 'lodash.shuffle'
import { MockInstance } from 'vitest'

import { stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubPlayer } from '../../../test-utils/stubs/players'
import { carrot, instantiate } from '../../cards'
import { DECK_SIZE, STANDARD_TAX_AMOUNT } from '../../config'
import { updatePlayer } from '../../reducers/update-player'
import { factory } from '../../services/Factory'
import { ICard, IGame, IPlayedCrop, IPlayer } from '../../types'

import { startTurn } from '.'

const player1 = stubPlayer()
const player2 = stubPlayer()

vitest.mock('../../cards/crops/handlePlayFromHand', () => {
  return {
    handlePlayFromHand: vitest.fn(),
  }
})

vitest.mock('lodash.shuffle')

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation(
    (arr: ICard[]) => arr
  )
})

// Make player2's deck slightly different from player1's to prevent false
// positives.
// eslint-disable-next-line functional/immutable-data
player2.deck[DECK_SIZE - 1] = stubPumpkin

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

  test('resets wasWateredTuringTurn for each crop in the field', () => {
    const carrot1 = instantiate(carrot)
    const carrot2 = instantiate(carrot)
    const carrot3 = instantiate(carrot)

    let newGame = updatePlayer(game, player1Id, {
      field: {
        crops: [
          { instance: carrot1, wasWateredTuringTurn: true, waterCards: 1 },
          { instance: carrot2, wasWateredTuringTurn: false, waterCards: 0 },
          { instance: carrot3, wasWateredTuringTurn: true, waterCards: 1 },
        ],
      },
    })

    newGame = startTurn(newGame, player1Id)

    expect(newGame.table.players[player1Id].field.crops).toEqual<IPlayedCrop[]>(
      [
        { instance: carrot1, wasWateredTuringTurn: false, waterCards: 1 },
        { instance: carrot2, wasWateredTuringTurn: false, waterCards: 0 },
        { instance: carrot3, wasWateredTuringTurn: false, waterCards: 1 },
      ]
    )
  })
})
