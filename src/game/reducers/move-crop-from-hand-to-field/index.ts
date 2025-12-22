import { array } from '../../../services/Array'
import { lookup } from '../../services/Lookup'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import {
  IMatch,
  IPlayedCrop,
  IPlayedTool,
  IPlayer,
  isCropCardInstance,
  isToolCardInstance,
} from '../../types'
import { addCardToField } from '../add-crop-to-field'
import { updatePlayer } from '../update-player'

// FIXME:: Rename this to moveCardFromHandToField
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
  const cardInstance = lookup.getCardFromHand(match, playerId, cropCardIdx)

  // FIXME: Make this less repetitive
  if (isCropCardInstance(cardInstance)) {
    const playedCropCard: IPlayedCrop = {
      instance: cardInstance,
      wasWateredDuringTurn: false,
      waterCards: 0,
    }

    match = addCardToField(match, playerId, playedCropCard)
    match = updatePlayer(match, playerId, { hand: newHand })
  } else if (isToolCardInstance(cardInstance)) {
    const playedToolCard: IPlayedTool = {
      instance: cardInstance,
    }

    match = addCardToField(match, playerId, playedToolCard)
    match = updatePlayer(match, playerId, { hand: newHand })
  }

  return match
}
