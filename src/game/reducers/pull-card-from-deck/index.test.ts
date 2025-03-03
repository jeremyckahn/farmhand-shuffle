import shuffle from 'lodash.shuffle'
import { MockInstance } from 'vitest'

import { stubPumpkin, stubWater } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { ICard, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

import { pullCardFromDeck } from '.'

vitest.mock('lodash.shuffle')

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation(
    (arr: ICard[]) => arr
  )
})

describe('pullCardFromDeck', () => {
  test('pulls card from top of deck', () => {
    const game = stubGame()
    const player1Id = Object.keys(game.table.players)[0]
    const newGame = pullCardFromDeck(game, player1Id, 0)

    expect(newGame.table.players[player1Id].hand).toEqual([
      game.table.players[player1Id].deck[0],
    ])

    expect(newGame.table.players[player1Id].deck).toEqual(
      game.table.players[player1Id].deck.slice(1)
    )
  })

  test('pulls card from middle of deck', () => {
    let game = stubGame()
    const player1Id = stubPlayer1.id

    const deck = [stubPumpkin, stubWater]
    const hand: IPlayer['hand'] = []

    game = updatePlayer(game, player1Id, { deck, hand })
    game = pullCardFromDeck(game, player1Id, 1)

    expect(game.table.players[player1Id].hand).toEqual([stubWater])
    expect(game.table.players[player1Id].deck).toEqual([stubPumpkin])
  })

  describe('drawing the last card in the deck', () => {
    test('shuffles the discard pile into the deck', () => {
      let game = stubGame()

      const [player1Id] = Object.keys(game.table.players)

      const deck = [stubPumpkin]
      const discardPile = [stubWater]
      const hand: IPlayer['hand'] = []
      game = updatePlayer(game, player1Id, { deck, discardPile, hand })

      const newGame = pullCardFromDeck(game, player1Id, 0)

      expect(shuffle).toHaveBeenCalledWith(discardPile)
      expect(newGame.table.players[player1Id]).toMatchObject({
        hand: [...hand, ...deck],
        discardPile: [],
        deck: discardPile,
      })
    })
  })

  test('throws out of bounds error', () => {
    let game = stubGame()
    const player1Id = stubPlayer1.id

    const deck = [stubPumpkin, stubWater]
    const hand: IPlayer['hand'] = []

    game = updatePlayer(game, player1Id, { deck, hand })

    expect(() => {
      pullCardFromDeck(game, player1Id, 2)
    }).toThrowError(InvalidCardIndexError)
  })
})
