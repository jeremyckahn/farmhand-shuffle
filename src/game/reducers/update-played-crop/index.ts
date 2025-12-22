import { lookup } from '../../services/Lookup'
import { InvalidCardError } from '../../services/Rules/errors'
import { IMatch, IPlayedCrop, IPlayer } from '../../types'
import { isPlayedCrop } from '../../types/guards'
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

  if (!isPlayedCrop(playedCrop)) {
    // FIXME: Test this
    throw new InvalidCardError(
      `${playedCrop.instance.id}, at player ${playerId}'s field in position ${cropIdx}, is not an IPlayedCrop`
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
