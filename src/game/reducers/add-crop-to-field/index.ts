import { array } from '../../../services/Array'
import { STANDARD_FIELD_SIZE } from '../../config'
import { FieldFullError } from '../../services/Rules/errors'
import { lookup } from '../../services/Lookup'
import { IMatch, IPlayedCrop, IPlayer } from '../../types'
import { updateField } from '../update-field'

export const addCropToField = (
  match: IMatch,
  playerId: IPlayer['id'],
  newCrop: IPlayedCrop
) => {
  const player = lookup.getPlayer(match, playerId)

  const { field } = player
  let { crops } = field

  const fullPlots = crops.filter(Boolean)

  if (fullPlots.length >= STANDARD_FIELD_SIZE) {
    throw new FieldFullError(playerId)
  }

  const emptyPlotIdx = crops.findIndex(
    (crop: IPlayedCrop | undefined) => crop === undefined
  )

  if (emptyPlotIdx === -1) {
    crops = [...crops, newCrop]
  } else {
    crops = array.replaceAt(crops, emptyPlotIdx, newCrop)
  }

  match = updateField(match, playerId, { crops })

  return match
}
