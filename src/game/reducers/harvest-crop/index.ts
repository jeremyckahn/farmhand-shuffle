import { lookup } from '../../services/Lookup'
import { pricing } from '../../services/Pricing'
import { InvalidCardError } from '../../services/Rules/errors'
import { IMatch, IPlayer } from '../../types'
import { isPlayedCrop } from '../../types/guards'
import { assertIsNonNullable } from '../../types/guards'
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
  const playedCrop = lookup.getPlayedCardFromField(
    match,
    playerId,
    cropIdxInFieldToHarvest
  )

  if (!isPlayedCrop(playedCrop)) {
    throw new InvalidCardError(`${playedCrop.instance.id} is not IPlayedCrop`)
  }

  let cropSaleValue = pricing.getCropSaleValue(match, playedCrop.instance)

  const player = match.table.players[playerId]
  assertIsNonNullable(player)

  let bonus = 0
  const field = player.field.cards
  const neighbors = [
    field[cropIdxInFieldToHarvest - 1],
    field[cropIdxInFieldToHarvest + 1],
  ]

  for (const neighbor of neighbors) {
    if (
      neighbor &&
      !isPlayedCrop(neighbor) &&
      neighbor.instance?.id === 'fertilizer'
    ) {
      bonus += 10
    }
  }

  const finalSaleValue = cropSaleValue + bonus

  match = incrementPlayerFunds(match, playerId, finalSaleValue)
  match = incrementCommunityFund(match, -finalSaleValue)
  match = moveFromFieldToDiscardPile(match, playerId, cropIdxInFieldToHarvest)

  return match
}
