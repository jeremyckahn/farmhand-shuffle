import { ICrop, IGame } from '../../types'

/**
 * Service class for handling pricing logic.
 */
export class PricingService {
  /**
   * Calculates the base value of a crop based on its water requirement.
   *
   * @param crop - The crop to calculate the base value for.
   * @returns The base value of the crop.
   */
  getCropBaseValue = (crop: ICrop) => {
    return crop.waterToMature * 2
  }

  /**
   * Calculates the sale value of a crop, taking into account the game's
   * community fund. Adjusts for community funds available for transaction.
   *
   * @param game - The game object.
   * @param crop - The crop to calculate the sale value for.
   * @returns The sale value of the crop.
   */
  getCropSaleValue = (game: IGame, crop: ICrop) => {
    const cropBaseValue = this.getCropBaseValue(crop)

    let cropAdjustedValue = cropBaseValue

    if (crop.id === game.buffedCrop?.crop.id) {
      cropAdjustedValue *= game.buffedCrop.multiplier
    }

    if (crop.id === game.nerfedCrop?.crop.id) {
      cropAdjustedValue *= game.nerfedCrop.multiplier
    }

    cropAdjustedValue = Math.floor(cropAdjustedValue)

    const cropValueReducedByAvailableCommunityFunds = Math.min(
      cropAdjustedValue,
      game.table.communityFund
    )

    return cropValueReducedByAvailableCommunityFunds
  }
}

/**
 * Singleton instance of the PricingService.
 */
export const pricing = new PricingService()
