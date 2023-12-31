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
  const { crops } = field

  if (crops.length >= STANDARD_FIELD_SIZE) {
    throw new FieldFullError(playerId)
  }

  const newCrops = [...crops, newCrop]

  game = updateField(game, playerId, { crops: newCrops })

  return game
}
