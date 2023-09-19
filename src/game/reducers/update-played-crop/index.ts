import { IGame, IPlayedCrop, IPlayer } from '../../types'
import { updateField } from '../update-field'

export const updatePlayedCrop = (
  game: IGame,
  playerId: IPlayer['id'],
  cropIdx: number,
  newPlayedCropProperties: Partial<IPlayedCrop>
) => {
  const { crops } = game.table.players[playerId].field
  const playedCrop = crops[cropIdx]

  if (!playedCrop) {
    throw new RangeError(
      `cropIdx ${cropIdx} references a crop that is not in the field.`
    )
  }

  const newCrops = crops.slice()
  newCrops[cropIdx] = { ...playedCrop, ...newPlayedCropProperties }

  game = updateField(game, playerId, {
    crops: newCrops,
  })

  return game
}
