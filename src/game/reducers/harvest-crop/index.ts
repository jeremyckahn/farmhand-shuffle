import { lookup } from '../../services/Lookup'
import { pricing } from '../../services/Pricing'
import { IGame, IPlayer } from '../../types'
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
 * @param game The current game state.
 * @param playerId The ID of the player harvesting the crop.
 * @param cropIdxInFieldToHarvest The index of the crop in the player's field to harvest.
 * @returns The updated game state.
 */
export const harvestCrop = (
  game: IGame,
  playerId: IPlayer['id'],
  cropIdxInFieldToHarvest: number
) => {
  const playedCrop = lookup.getPlayedCropFromField(
    game,
    playerId,
    cropIdxInFieldToHarvest
  )

  const cropSaleValue = pricing.getCropSaleValue(game, playedCrop.instance)

  game = incrementPlayerFunds(game, playerId, cropSaleValue)
  game = incrementCommunityFund(game, -cropSaleValue)
  game = moveFromFieldToDiscardPile(game, playerId, cropIdxInFieldToHarvest)

  return game
}
