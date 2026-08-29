import { IMatch, IPlayer } from '../../types';
/**
 * Harvests a crop from the player's field.
 *
 * This involves:
 * 1. Determining the sale value of the crop.
 * 2. Incrementing the player's funds by the sale value.
 * 3. Decrementing the community fund by the sale value.
 * 4. Moving the harvested crop from the field to the discard pile.
 *
 * @param match The current match state.
 * @param playerId The ID of the player harvesting the crop.
 * @param cropIdxInFieldToHarvest The index of the crop in the player's field to harvest.
 * @returns The updated match state.
 */
export declare const harvestCrop: (match: IMatch, playerId: IPlayer["id"], cropIdxInFieldToHarvest: number) => IMatch;
