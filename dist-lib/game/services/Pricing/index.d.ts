import { ICrop, IMatch } from '../../types';
/**
 * Service class for handling pricing logic.
 */
export declare class PricingService {
    /**
     * Calculates the base value of a crop based on its water requirement.
     *
     * @param crop - The crop to calculate the base value for.
     * @returns The base value of the crop.
     */
    getCropBaseValue: (crop: ICrop) => number;
    /**
     * Calculates the sale value of a crop, taking into account the match's
     * community fund. Adjusts for community funds available for transaction.
     *
     * @param match - The match object.
     * @param crop - The crop to calculate the sale value for.
     * @returns The sale value of the crop.
     */
    getCropSaleValue: (match: IMatch, crop: ICrop) => number;
}
/**
 * Singleton instance of the PricingService.
 */
export declare const pricing: PricingService;
