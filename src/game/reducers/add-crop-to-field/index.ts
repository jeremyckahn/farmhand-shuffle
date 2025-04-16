import { array } from '../../../services/Array'
import { STANDARD_FIELD_SIZE } from '../../config'
import { FieldFullError } from '../../services/Rules/errors'
import { IGame, IPlayedCrop, IPlayer } from '../../types'
import { updateField } from '../update-field'

export const addCropToField = (
  game: IGame,
  playerId: IPlayer['id'],
  newCrop: IPlayedCrop
) => {
  const { field } = game.table.players[playerId]
  let { crops } = field

  const fullPlots = crops.filter(Boolean)

  if (fullPlots.length >= STANDARD_FIELD_SIZE) {
    throw new FieldFullError(playerId)
  }

  const emptyPlotIdx = crops.findIndex(crop => crop === undefined)

  if (emptyPlotIdx === -1) {
    crops = [...crops, newCrop]
  } else {
    crops = array.replaceAt(crops, emptyPlotIdx, newCrop)
  }

  game = updateField(game, playerId, { crops })

  return game
}
