import localforage from 'localforage'

import { allCards } from '../../game/cards'
import { GameStateCorruptError } from '../../game/services/Rules/errors'
import { ICard } from '../../game/types'

export enum StorageKey {
  PLAYER_DECK = 'PLAYER_DECK',
}

export type DeserializedDeck = Map<ICard, number>
export type SerializedDeck = Record<string, number>

export class StorageService {
  /**
   * Serializes a deck map into a plain object mapping card IDs to quantities.
   * @param deck - The deck to serialize.
   * @returns A plain object suitable for JSON storage.
   */
  static serializeDeck(deck: DeserializedDeck): SerializedDeck {
    const serialized: SerializedDeck = {}
    for (const [card, count] of deck) {
      if (count > 0) {
        // eslint-disable-next-line functional/immutable-data
        serialized[card.id] = count
      }
    }
    return serialized
  }

  /**
   * Deserializes a plain object into a deck map.
   * @param data - The serialized deck data.
   * @returns A Map of ICard to quantity.
   * @throws {GameStateCorruptError} If a card ID is not found.
   */
  static deserializeDeck(data: SerializedDeck): DeserializedDeck {
    const deck: DeserializedDeck = new Map()

    for (const [cardId, count] of Object.entries(data)) {
      const card = allCards[cardId]

      if (!card) {
        throw new GameStateCorruptError(
          `Card with ID "${cardId}" not found in card definitions.`
        )
      }

      if (count > 0) {
        // eslint-disable-next-line functional/immutable-data
        deck.set(card, count)
      }
    }

    return deck
  }

  /**
   * Saves the player's deck to local storage.
   * @param deck - The deck to save.
   */
  async saveDeck(deck: DeserializedDeck): Promise<void> {
    const serialized = StorageService.serializeDeck(deck)
    await localforage.setItem(StorageKey.PLAYER_DECK, serialized)
  }

  /**
   * Loads the player's deck from local storage.
   * @returns The loaded deck, or null if no deck is found.
   */
  async loadDeck(): Promise<DeserializedDeck | null> {
    const data = await localforage.getItem<SerializedDeck>(
      StorageKey.PLAYER_DECK
    )
    if (!data) {
      return null
    }
    return StorageService.deserializeDeck(data)
  }
}

export const storage = new StorageService()
