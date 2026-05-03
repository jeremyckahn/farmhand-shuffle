import { array } from '../../../services/Array'
import { STANDARD_FIELD_SIZE } from '../../config'
import {
  FieldFullError,
  GameStateCorruptError,
} from '../../services/Rules/errors'
import { lookup } from '../../services/Lookup'
import { IMatch, IPlayedCrop, IPlayedTool, IPlayer } from '../../types'
import { updateField } from '../update-field'

/**
 * NOTE: fieldIdxToPlace must not be -1
 */
export const addCardToField = (
  match: IMatch,
  playerId: IPlayer['id'],
  newCrop: IPlayedCrop | IPlayedTool,
  fieldIdxToPlace: number
) => {
  const player = lookup.getPlayer(match, playerId)
  const { field } = player
  let { cards } = field

  const fullPlots = lookup.fullPlots(match, playerId)

  if (fullPlots.length >= STANDARD_FIELD_SIZE) {
    throw new FieldFullError(playerId)
  }

  if (fieldIdxToPlace === -1) {
    throw new GameStateCorruptError('fieldIdxToPlace must not be -1')
  } else {
    cards = array.replaceAt(cards, fieldIdxToPlace, newCrop)
  }

  match = updateField(match, playerId, { cards })

  return match
}
