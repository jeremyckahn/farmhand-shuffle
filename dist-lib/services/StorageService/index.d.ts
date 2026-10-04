import { CardInstance, ICard } from '../../game/types';
export declare enum StorageKey {
    PLAYER_DECK = "PLAYER_DECK"
}
export type DeserializedDeck = Map<ICard, number>;
export type SerializedDeck = Record<string, number>;
export declare class StorageService {
    /**
     * Serializes a deck map into a plain object mapping card IDs to quantities.
     * @param deck - The deck to serialize.
     * @returns A plain object suitable for JSON storage.
     */
    static serializeDeck(deck: DeserializedDeck): SerializedDeck;
    /**
     * Deserializes a plain object into a deck map.
     * @param data - The serialized deck data.
     * @returns A Map of ICard to quantity.
     * @throws {GameStateCorruptError} If a card ID is not found.
     */
    static deserializeDeck(data: SerializedDeck): DeserializedDeck;
    /**
     * Instantiates a DeserializedDeck (Map) into a flat array of CardInstances.
     * @param deck - The deck map to instantiate.
     * @returns An array of CardInstance objects.
     */
    static instantiateDeserializedDeck(deck: DeserializedDeck): CardInstance[];
    /**
     * Saves the player's deck to local storage.
     * @param deck - The deck to save.
     */
    saveDeck(deck: DeserializedDeck): Promise<void>;
    /**
     * Loads the player's deck from local storage.
     * @returns The loaded deck, or null if no deck is found.
     */
    loadDeck(): Promise<DeserializedDeck | null>;
}
export declare const storage: StorageService;
