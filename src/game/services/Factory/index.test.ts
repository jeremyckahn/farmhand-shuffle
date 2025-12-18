import { randomNumber } from '../../../services/RandomNumber'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubPlayer } from '../../../test-utils/stubs/players'
import { INITIAL_HAND_SIZE, INITIAL_PLAYER_FUNDS } from '../../config'
import { IPlayedCrop } from '../../types'
import { isField, isMatch, isPlayer, isTable } from '../../types/guards'

import { factory } from '.'

beforeEach(() => {
  vi.spyOn(randomNumber, 'shuffle').mockImplementation(
    <T>(arr: T[] | null | undefined) => arr || []
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

  describe('buildMatch', () => {
    test('builds a match', () => {
      const match = factory.buildMatch()

      expect(isMatch(match)).toBe(true)
    })
  })

  describe('buildMatchForSession', () => {
    const player1 = stubPlayer()
    const player2 = stubPlayer()

    test('creates a new match', () => {
      const match = factory.buildMatchForSession([player1, player2])

      expect(isMatch(match)).toBe(true)
    })

    test('shuffles decks', () => {
      factory.buildMatchForSession([player1, player2])

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(randomNumber.shuffle).toHaveBeenCalledWith(
        expect.arrayContaining(player1.deck)
      )
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(randomNumber.shuffle).toHaveBeenCalledWith(
        expect.arrayContaining(player2.deck)
      )
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(randomNumber.shuffle).toHaveBeenCalled()
    })

    test('sets up player hands', () => {
      // NOTE: Ensures that the first crop card in the deck is the one that's
      // pulled in drawValidStartingHand to produce a predictable hand. This is
      // helpful for keeping tests and Storybook stories aligned to a
      // consistent match state that's easy to understand.
      vi.spyOn(randomNumber, 'generate').mockReturnValue(0)

      const match = factory.buildMatchForSession([player1, player2])
      const [player1Id, player2Id] = Object.keys(match.table.players)

      if (!player1Id || !player2Id) {
        throw new Error('Players not found')
      }

      const newPlayer1 = match.table.players[player1Id]
      const newPlayer2 = match.table.players[player2Id]

      if (!newPlayer1 || !newPlayer2) {
        throw new Error('Players not found')
      }

      expect(newPlayer1.hand).toEqual(
        expect.arrayContaining(player1.deck.slice(0, INITIAL_HAND_SIZE))
      )

      expect(newPlayer2.hand).toEqual(
        expect.arrayContaining(player2.deck.slice(0, INITIAL_HAND_SIZE))
      )
    })

    test('distributes community fund to players', () => {
      const match = factory.buildMatchForSession([player1, player2])
      const [player1Id, player2Id] = Object.keys(match.table.players)

      if (!player1Id || !player2Id) {
        throw new Error('Players not found')
      }

      const newPlayer1 = match.table.players[player1Id]
      const newPlayer2 = match.table.players[player2Id]

      if (!newPlayer1 || !newPlayer2) {
        throw new Error('Players not found')
      }

      expect(match.table.communityFund).toEqual(0)
      expect(newPlayer1.funds).toEqual(INITIAL_PLAYER_FUNDS)
      expect(newPlayer2.funds).toEqual(INITIAL_PLAYER_FUNDS)
    })

    test('determines first player', () => {
      const match = factory.buildMatchForSession([player1, player2])

      expect(match.currentPlayerId).toEqual(match.sessionOwnerPlayerId)
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
