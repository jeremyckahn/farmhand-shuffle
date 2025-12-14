import { IMatch, IPlayedCrop, IPlayer } from '../../types'
import { lookup } from '../../services/Lookup'
import { updateField } from '../update-field'

export const updatePlayedCrop = (
  match: IMatch,
  playerId: IPlayer['id'],
  cropIdx: number,
  newPlayedCropProperties: Partial<IPlayedCrop>
) => {
  const player = lookup.getPlayer(match, playerId)

  const { crops } = player.field
  const playedCrop = crops[cropIdx]

  if (!playedCrop) {
    throw new RangeError(
      `cropIdx ${cropIdx} references a crop that is not in the field.`
    )
  }

  const newCrops = [
    ...crops.slice(0, cropIdx),
    { ...playedCrop, ...newPlayedCropProperties },
    ...crops.slice(cropIdx + 1),
  ]

  match = updateField(match, playerId, {
    crops: newCrops,
  })

  return match
}
