import { lookup } from '../../services/Lookup'
import { pricing } from '../../services/Pricing'
import { IMatch, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'
import { moveFromFieldToDiscardPile } from '../move-from-field-to-discard-pile'

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
export const harvestCrop = (
  match: IMatch,
  playerId: IPlayer['id'],
  cropIdxInFieldToHarvest: number
) => {
  const playedCrop = lookup.getPlayedCropFromField(
    match,
    playerId,
    cropIdxInFieldToHarvest
  )

  const cropSaleValue = pricing.getCropSaleValue(match, playedCrop.instance)

  match = incrementPlayerFunds(match, playerId, cropSaleValue)
  match = incrementCommunityFund(match, -cropSaleValue)
  match = moveFromFieldToDiscardPile(match, playerId, cropIdxInFieldToHarvest)

  return match
}
