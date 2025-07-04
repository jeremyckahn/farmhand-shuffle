import shuffle from 'lodash.shuffle'
import { MockInstance } from 'vitest'

import { randomNumber } from '../../../services/RandomNumber'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubPlayer } from '../../../test-utils/stubs/players'
import { INITIAL_HAND_SIZE, INITIAL_PLAYER_FUNDS } from '../../config'
import { ICard, IPlayedCrop } from '../../types'
import { isField, isGame, isPlayer, isTable } from '../../types/guards'

import { factory } from '.'

vitest.mock('lodash.shuffle')

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
      expect(shuffle).toHaveBeenCalled()
    })

    test('sets up player hands', () => {
      // NOTE: Ensures that the first crop card in the deck is the one that's
      // pulled in drawValidStartingHand to produce a predictable hand. This is
      // helpful for keeping tests and Storybook stories aligned to a
      // consistent game state that's easy to understand.
      vi.spyOn(randomNumber, 'generate').mockReturnValue(0)

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
      const game = factory.buildGameForSession([player1, player2])

      expect(game.currentPlayerId).toEqual(game.sessionOwnerPlayerId)
    })
  })

  describe('buildPlayedCrop', () => {
    test('builds a played crop', () => {
      const playedCard = factory.buildPlayedCrop(stubCarrot)

      expect(playedCard).toEqual<IPlayedCrop>({
        instance: stubCarrot,
        wasWateredDuringTurn: false,
        waterCards: 0,
      })
    })
  })
})
