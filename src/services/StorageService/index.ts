import localforage from 'localforage'

import { allCards } from '../../game/cards'
import { ICard } from '../../game/types'

export enum StorageKey {
  PLAYER_DECK = 'PLAYER_DECK',
}

export class StorageService {
  /**
   * Serializes a deck map into a plain object mapping card IDs to quantities.
   * @param deck - The deck to serialize.
   * @returns A plain object suitable for JSON storage.
   */
  static serializeDeck(deck: Map<ICard, number>): Record<string, number> {
    const serialized: Record<string, number> = {}
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
   */
  static deserializeDeck(data: Record<string, number>): Map<ICard, number> {
    const entries: [ICard, number][] = Object.entries(data)
      .map(([cardId, count]): [ICard | undefined, number] => [
        allCards[cardId],
        count,
      ])
      .filter(
        (entry): entry is [ICard, number] =>
          entry[0] !== undefined && entry[1] > 0
      )

    return new Map(entries)
  }

  /**
   * Saves the player's deck to local storage.
   * @param deck - The deck to save.
   */
  async saveDeck(deck: Map<ICard, number>): Promise<void> {
    const serialized = StorageService.serializeDeck(deck)
    await localforage.setItem(StorageKey.PLAYER_DECK, serialized)
  }

  /**
   * Loads the player's deck from local storage.
   * @returns The loaded deck, or null if no deck is found.
   */
  async loadDeck(): Promise<Map<ICard, number> | null> {
    const data = await localforage.getItem<Record<string, number>>(
      StorageKey.PLAYER_DECK
    )
    if (!data) {
      return null
    }
    return StorageService.deserializeDeck(data)
  }
}

export const storage = new StorageService()
