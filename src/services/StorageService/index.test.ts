import localforage from 'localforage'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { allCards } from '../../game/cards'
import { GameStateCorruptError } from '../../game/services/Rules/errors'
import { ICard } from '../../game/types'

import {
  StorageService,
  StorageKey,
  storage,
  DeserializedDeck,
  SerializedDeck,
} from './index'

vi.mock('localforage', () => ({
  default: {
    setItem: vi.fn(),
    getItem: vi.fn(),
  },
}))

describe('StorageService', () => {
  const mockCard1 = Object.values(allCards)[0] as ICard
  const mockCard2 = Object.values(allCards)[1] as ICard

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('serializeDeck', () => {
    it('should serialize a deck map to a plain object', () => {
      const deck: DeserializedDeck = new Map([
        [mockCard1, 2],
        [mockCard2, 1],
      ])

      const serialized = StorageService.serializeDeck(deck)

      expect(serialized).toEqual({
        [mockCard1.id]: 2,
        [mockCard2.id]: 1,
      })
    })

    it('should ignore cards with zero quantity', () => {
      const deck: DeserializedDeck = new Map([
        [mockCard1, 2],
        [mockCard2, 0],
      ])

      const serialized = StorageService.serializeDeck(deck)

      expect(serialized).toEqual({
        [mockCard1.id]: 2,
      })
    })
  })

  describe('deserializeDeck', () => {
    it('should deserialize a plain object back to a deck map', () => {
      const data: SerializedDeck = {
        [mockCard1.id]: 2,
        [mockCard2.id]: 1,
      }

      const deck = StorageService.deserializeDeck(data)

      expect(deck.size).toBe(2)
      expect(deck.get(mockCard1)).toBe(2)
      expect(deck.get(mockCard2)).toBe(1)
    })

    it('should throw GameStateCorruptError if an unknown card ID is encountered', () => {
      const data: SerializedDeck = {
        [mockCard1.id]: 2,
        'unknown-card-id': 5,
      }

      expect(() => StorageService.deserializeDeck(data)).toThrow(
        GameStateCorruptError
      )
    })
  })

  describe('saveDeck', () => {
    it('should serialize and save the deck to localforage', async () => {
      const deck: DeserializedDeck = new Map([[mockCard1, 3]])
      const expectedSerialized: SerializedDeck = { [mockCard1.id]: 3 }

      await storage.saveDeck(deck)

      expect(
        // eslint-disable-next-line @typescript-eslint/unbound-method
        vi.mocked(localforage.setItem)
      ).toHaveBeenCalledWith(StorageKey.PLAYER_DECK, expectedSerialized)
    })
  })

  describe('loadDeck', () => {
    it('should return null if no deck is found', async () => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      vi.mocked(localforage.getItem).mockResolvedValue(null)

      const deck = await storage.loadDeck()

      expect(deck).toBeNull()
      expect(
        // eslint-disable-next-line @typescript-eslint/unbound-method
        vi.mocked(localforage.getItem)
      ).toHaveBeenCalledWith(StorageKey.PLAYER_DECK)
    })

    it('should deserialize and return the deck if found', async () => {
      const storedData: SerializedDeck = { [mockCard1.id]: 2 }

      // eslint-disable-next-line @typescript-eslint/unbound-method
      vi.mocked(localforage.getItem).mockResolvedValue(storedData)

      const deck = await storage.loadDeck()

      expect(deck).toBeInstanceOf(Map)
      expect(deck?.get(mockCard1)).toBe(2)
      expect(
        // eslint-disable-next-line @typescript-eslint/unbound-method
        vi.mocked(localforage.getItem)
      ).toHaveBeenCalledWith(StorageKey.PLAYER_DECK)
    })
  })
})
