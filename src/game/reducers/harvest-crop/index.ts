import { IGame, IPlayer } from '../../types'

export const harvestCrop = (
  game: IGame,
  playerId: IPlayer['id'],
  cropIdxInFieldToHarvest: number
) => {
  // FIXME: Implement this
  console.log({ game, playerId, cropIdxInFieldToHarvest })

  return game
}
