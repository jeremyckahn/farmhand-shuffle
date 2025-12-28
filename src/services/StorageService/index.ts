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
    return Object.fromEntries(
      Array.from(deck.entries())
        .filter(([, count]) => count > 0)
        .map(([card, count]) => [card.id, count])
    )
  }

  /**
   * Deserializes a plain object into a deck map.
   * @param data - The serialized deck data.
   * @returns A Map of ICard to quantity.
   * @throws {GameStateCorruptError} If a card ID is not found.
   */
  static deserializeDeck(data: SerializedDeck): DeserializedDeck {
    return new Map(
      Object.entries(data)
        .filter(([, count]) => count > 0)
        .map(([cardId, count]) => {
          const card = allCards[cardId]

          if (!card) {
            throw new GameStateCorruptError(
              `Card with ID "${cardId}" not found in card definitions.`
            )
          }

          return [card, count]
        })
    )
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
