import { array } from '../../../services/Array'
import { lookup } from '../../services/Lookup'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IMatch, IPlayedCrop, IPlayer } from '../../types'
import { addCropToField } from '../add-crop-to-field'
import { updatePlayer } from '../update-player'

export const moveCropFromHandToField = (
  match: IMatch,
  playerId: IPlayer['id'],
  cropCardIdx: number
) => {
  const player = lookup.getPlayer(match, playerId)
  const { hand } = player
  const cardId = hand[cropCardIdx]

  if (!cardId) {
    throw new InvalidCardIndexError(cropCardIdx, playerId)
  }

  const newHand = array.removeAt(hand, cropCardIdx)
  const cropInstance = lookup.getCropFromHand(match, playerId, cropCardIdx)

  const playedCropCard: IPlayedCrop = {
    instance: cropInstance,
    wasWateredDuringTurn: false,
    waterCards: 0,
  }

  match = addCropToField(match, playerId, playedCropCard)
  match = updatePlayer(match, playerId, { hand: newHand })

  return match
}
