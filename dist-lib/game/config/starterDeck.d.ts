import { CardInstance } from '../types';
/**
 * Builds the canonical starter deck: a full, freshly-instantiated 60-card
 * deck (crops + water + rain/sprinkler/shovel, alternated for a healthy
 * early mix). Every call mints a fresh set of CardInstances, since every
 * match (and each side of a symmetric match) needs its own instances rather
 * than a single shared, frozen array.
 *
 * @returns A deck of cards.
 */
export declare const starterDeck: () => CardInstance[];
