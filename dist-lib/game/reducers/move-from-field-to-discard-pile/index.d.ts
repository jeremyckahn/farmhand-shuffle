import { IMatch, IPlayer } from '../../types';
/**
 * Moves a card from the player's field to their discard pile.
 *
 * @param match The current match state.
 * @param playerId The ID of the player moving the card.
 * @param cardIdx The index of the card in the field to move to the discard pile.
 * @returns The updated match state.
 * @throws {InvalidCardIndexError} If the card index is invalid.
 */
export declare const moveFromFieldToDiscardPile: (match: IMatch, playerId: IPlayer["id"], cardIdx: number) => IMatch;
