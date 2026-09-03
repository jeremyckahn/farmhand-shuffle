import { IMatch, MatchEventPayload, MatchEventPayloadKey } from '../../../types';
/**
 * Performs state reductions that are common to any event in which a card is
 * played.
 * @param match The match state.
 * @param event The event that triggered the transition.
 * @returns The updated match state.
 */
export declare const recordCardPlayEvents: (match: IMatch, event: MatchEventPayload[MatchEventPayloadKey]) => IMatch;
