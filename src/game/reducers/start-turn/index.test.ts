import shuffle from 'lodash.shuffle'
import { MockInstance } from 'vitest'

import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubPlayer } from '../../../test-utils/stubs/players'
import { carrot, instantiate } from '../../cards'
import { DECK_SIZE, STANDARD_TAX_AMOUNT } from '../../config'
import { updatePlayer } from '../../reducers/update-player'
import { factory } from '../../services/Factory'
import { ICard, IField, IMatch, IPlayedCrop, IPlayer } from '../../types'

import { startTurn } from '.'

const player1Stub = stubPlayer()
const player2Stub = stubPlayer()

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
player2Stub.deck[DECK_SIZE - 1] = stubPumpkin

describe('startTurn', () => {
  let match: IMatch
  let player1Id: IPlayer['id']

  beforeEach(() => {
    match = factory.buildMatchForSession([player1Stub, player2Stub])
    const playerIds = Object.keys(match.table.players)
    const p1Id = playerIds[0]
    if (!p1Id) throw new Error('Player not found in test setup')
    player1Id = p1Id
  })

  test('pays tax to community fund', () => {
    const p1 = match.table.players[player1Id]
    if (!p1) throw new Error('Player not found in test setup')

    const newMatch = startTurn(match, player1Id)

    const newP1 = newMatch.table.players[player1Id]
    if (!newP1) throw new Error('Player not found after reducer')

    expect(newP1.funds).toEqual(p1.funds - STANDARD_TAX_AMOUNT)
    expect(newMatch.table.communityFund).toEqual(
      match.table.communityFund + STANDARD_TAX_AMOUNT
    )
  })

  test('aborts if player is out of money after paying tax', () => {
    const newMatch = updatePlayer(match, player1Id, {
      funds: STANDARD_TAX_AMOUNT,
    })

    expect(() => {
      startTurn(newMatch, player1Id)
    }).toThrow(`[PlayerOutOfFundsError] Player ${player1Id} is out of funds.`)
  })

  test.each([
    { numberOfCardsToDraw: 0 },
    { numberOfCardsToDraw: 1 },
    { numberOfCardsToDraw: 2 },
  ])(
    'draws $numberOfCardsToDraw card(s) from deck',
    ({ numberOfCardsToDraw }) => {
      const p1 = match.table.players[player1Id]
      if (!p1) throw new Error('Player not found in test setup')

      const newMatch = startTurn(match, player1Id, numberOfCardsToDraw)
      const newP1 = newMatch.table.players[player1Id]
      if (!newP1) throw new Error('Player not found after reducer')

      expect(newP1.hand).toEqual([
        ...p1.hand,
        ...p1.deck.slice(0, numberOfCardsToDraw),
      ])
      expect(newP1.deck).toEqual(p1.deck.slice(numberOfCardsToDraw))
    }
  )

  test('resets wasWateredDuringTurn for each crop in the field', () => {
    const carrot1 = instantiate(carrot)
    const carrot2 = instantiate(carrot)
    const carrot3 = instantiate(carrot)

    let newMatch = updatePlayer(match, player1Id, {
      field: {
        crops: [
          { instance: carrot1, wasWateredDuringTurn: true, waterCards: 1 },
          { instance: carrot2, wasWateredDuringTurn: false, waterCards: 0 },
          { instance: carrot3, wasWateredDuringTurn: true, waterCards: 1 },
        ],
      },
    })

    newMatch = startTurn(newMatch, player1Id)

    const newP1 = newMatch.table.players[player1Id]
    if (!newP1) throw new Error('Player not found after reducer')

    expect(newP1.field.crops).toEqual<IPlayedCrop[]>([
      { instance: carrot1, wasWateredDuringTurn: false, waterCards: 1 },
      { instance: carrot2, wasWateredDuringTurn: false, waterCards: 0 },
      { instance: carrot3, wasWateredDuringTurn: false, waterCards: 1 },
    ])
  })

  test('skips over empty field plots', () => {
    const carrot1 = instantiate(carrot)
    const carrot2 = instantiate(carrot)

    let newMatch = updatePlayer(match, player1Id, {
      field: {
        crops: [
          { instance: carrot1, wasWateredDuringTurn: true, waterCards: 1 },
          undefined,
          { instance: carrot2, wasWateredDuringTurn: true, waterCards: 1 },
        ],
      },
    })

    newMatch = startTurn(newMatch, player1Id)

    const newP1 = newMatch.table.players[player1Id]
    if (!newP1) throw new Error('Player not found after reducer')

    expect(newP1.field.crops).toEqual<IField['crops']>([
      { instance: carrot1, wasWateredDuringTurn: false, waterCards: 1 },
      undefined,
      { instance: carrot2, wasWateredDuringTurn: false, waterCards: 1 },
    ])
  })

  test('updates prices', () => {
    const newMatch = startTurn(match, player1Id)

    expect(newMatch.buffedCrop).not.toBeNull()
    expect(newMatch.nerfedCrop).not.toBeNull()
  })

  test('resets record of cards played during turn', () => {
    let newMatch = updatePlayer(match, player1Id, {
      cardsPlayedDuringTurn: [stubCarrot],
    })

    newMatch = startTurn(newMatch, player1Id)

    const newP1 = newMatch.table.players[player1Id]
    if (!newP1) throw new Error('Player not found after reducer')

    expect(newP1.cardsPlayedDuringTurn).toEqual([])
  })
})
