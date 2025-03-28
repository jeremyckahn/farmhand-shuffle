import { IGame, IPlayer } from '../../types'
import { moveFromFieldToDiscardPile } from '../move-from-field-to-discard-pile'

// FIXME: Test this
export const harvestCrop = (
  game: IGame,
  playerId: IPlayer['id'],
  cropIdxInFieldToHarvest: number
) => {
  game = moveFromFieldToDiscardPile(game, playerId, cropIdxInFieldToHarvest)

  // FIXME: Give the player funds

  return game
}
