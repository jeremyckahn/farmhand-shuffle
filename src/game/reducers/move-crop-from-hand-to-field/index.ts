import { array } from '../../../services/Array'
import { lookup } from '../../services/Lookup'
import {
  InvalidCardError,
  InvalidCardIndexError,
} from '../../services/Rules/errors'
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

// FIXME: Rename this to moveCardFromHandToField
export const moveCropFromHandToField = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardIdxInHand: number,
  fieldIdxToPlace: number
) => {
  const player = lookup.getPlayer(match, playerId)
  const { hand } = player
  const cardId = hand[cardIdxInHand]

  if (!cardId) {
    throw new InvalidCardIndexError(cardIdxInHand, playerId)
  }

  const newHand = array.removeAt(hand, cardIdxInHand)
  const cardInstance = lookup.getCardFromHand(match, playerId, cardIdxInHand)

  let playedCard: IPlayedCrop | IPlayedTool | undefined

  // FIXME: Make this less repetitive
  if (isCropCardInstance(cardInstance)) {
    playedCard = {
      instance: cardInstance,
      wasWateredDuringTurn: false,
      waterCards: 0,
    }
  } else if (isToolCardInstance(cardInstance)) {
    playedCard = {
      instance: cardInstance,
    }
  }

  if (!playedCard) {
    throw new InvalidCardError(`${cardInstance.id} is not a plantable card.`)
  }

  match = addCardToField(match, playerId, playedCard, fieldIdxToPlace)
  match = updatePlayer(match, playerId, { hand: newHand })

  return match
}
