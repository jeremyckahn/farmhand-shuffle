import { IPlayerSeed } from '../../types';
export declare class ValidationService {
    /**
     * Asserts that:
     *   - The player deck contains the correct number of cards
     *   - All cards in the player's deck are valid
     *   - That player deck contains at least one crop
     */
    playerSeed: (player: IPlayerSeed) => boolean;
}
export declare const validate: ValidationService;
