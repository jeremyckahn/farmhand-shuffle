import { ICrop, IGame } from '../../types'

export class PricingService {
  getCropBaseValue = (crop: ICrop) => {
    return crop.waterToMature * 2
  }

  /**
   * Adjusts for community funds available for transaction.
   */
  getCropSaleValue = (game: IGame, crop: ICrop) => {
    const cropValue = Math.min(
      this.getCropBaseValue(crop),
      game.table.communityFund
    )

    return cropValue
  }
}

export const pricing = new PricingService()
