import { lookup } from '../../services/Lookup'
import { pricing } from '../../services/Pricing'
import { IGame, IPlayer } from '../../types'
import { incrementCommunityFund } from '../increment-community-fund'
import { incrementPlayerFunds } from '../increment-player-funds'
import { moveFromFieldToDiscardPile } from '../move-from-field-to-discard-pile'

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
