import shuffle from 'lodash.shuffle'
import { MockInstance } from 'vitest'

import { stubPlayer } from '../../../test-utils/stubs/players'
import { isField, isGame, isPlayer, isTable } from '../../types/guards'
import { randomNumber } from '../../../services/RandomNumber'
import { carrot } from '../../cards'
import { INITIAL_HAND_SIZE, INITIAL_PLAYER_FUNDS } from '../../config'
import { ICard } from '../../types'

import { factory } from '.'

vitest.mock('lodash.shuffle', () => ({
  __esModule: true,
  default: vitest.fn(),
}))

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation(
    (arr: ICard[]) => arr
  )
})

describe('Factory', () => {
  describe('buildField', () => {
    test('builds a field', () => {
      const field = factory.buildField()

      expect(isField(field)).toBe(true)
    })
  })

  describe('buildPlayer', () => {
    test('builds a player', () => {
      const player = factory.buildPlayer()

      expect(isPlayer(player)).toBe(true)
    })
  })

  describe('buildTable', () => {
    test('builds a table', () => {
      const table = factory.buildTable()

      expect(isTable(table)).toBe(true)
    })
  })

  describe('buildGame', () => {
    test('builds a game', () => {
      const game = factory.buildGame()

      expect(isGame(game)).toBe(true)
    })
  })

  describe('buildGameForSession', () => {
    const player1 = stubPlayer()
    const player2 = stubPlayer()

    test('creates a new game', () => {
      const game = factory.buildGameForSession([player1, player2])

      expect(isGame(game)).toBe(true)
    })

    test('shuffles decks', () => {
      factory.buildGameForSession([player1, player2])

      expect(shuffle).toHaveBeenCalledWith(expect.arrayContaining(player1.deck))
      expect(shuffle).toHaveBeenCalledWith(expect.arrayContaining(player2.deck))
      expect(shuffle).toHaveBeenCalledTimes(2)
    })

    test('sets up player hands', () => {
      const game = factory.buildGameForSession([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.players[player1Id].hand).toEqual(
        expect.arrayContaining(player1.deck.slice(0, INITIAL_HAND_SIZE))
      )

      expect(game.table.players[player2Id].hand).toEqual(
        expect.arrayContaining(player2.deck.slice(0, INITIAL_HAND_SIZE))
      )
    })

    test('distributes community fund to players', () => {
      const game = factory.buildGameForSession([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.communityFund).toEqual(0)
      expect(game.table.players[player1Id].funds).toEqual(INITIAL_PLAYER_FUNDS)
      expect(game.table.players[player2Id].funds).toEqual(INITIAL_PLAYER_FUNDS)
    })

    test('determines first player', () => {
      vitest.spyOn(randomNumber, 'generate').mockReturnValue(1)
      const game = factory.buildGameForSession([player1, player2])
      const [, player2Id] = Object.keys(game.table.players)

      expect(game.currentPlayerId).toEqual(player2Id)
    })
  })

  describe('buildPlayedCrop', () => {
    test('builds a played crop', () => {
      const playedCard = factory.buildPlayedCrop(carrot)

      expect(playedCard).toEqual({
        id: carrot.id,
        waterCards: 0,
      })
    })
  })
})
