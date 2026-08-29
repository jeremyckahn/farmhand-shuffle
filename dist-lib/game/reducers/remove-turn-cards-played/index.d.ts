import { IMatch, IPlayer } from '../../types';
/**
 * Removes a specified number of cards from the `cardsPlayedDuringTurn` array
 * for a given player.
 * @param match The match state.
 * @param playerId The ID of the player.
 * @param howMany The number of cards to remove. Defaults to Infinity, which
 * empties the `cardsPlayedDuringTurn` array.
 * @returns The updated match state.
 */
export declare const removeTurnCardsPlayed: (match: IMatch, playerId: IPlayer["id"], howMany?: number) => IMatch;
