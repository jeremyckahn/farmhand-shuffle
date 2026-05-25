import { addCardsPlayedDuringTurn } from '../../../reducers/add-turn-cards-played'
import {
  IMatch,
  isToolCardInstance,
  MatchEvent,
  MatchEventPayload,
  MatchEventPayloadKey,
} from '../../../types'
import { assertCurrentPlayer, assertIsNonNullable } from '../../../types/guards'
import { lookup } from '../../Lookup'

/**
 * Performs state reductions that are common to any event in which a card is
 * played.
 * @param match The match state.
 * @param event The event that triggered the transition.
 * @returns The updated match state.
 */
export const recordCardPlayEvents = (
  match: IMatch,
  event: MatchEventPayload[MatchEventPayloadKey]
) => {
  const recordCardsPlayedDuringTurn = (
    currentPlayerId: string,
    cardIdxInHand: number
  ) => {
    const player = lookup.getPlayer(match, currentPlayerId)
    const card = player.hand[cardIdxInHand]

    assertIsNonNullable(card)

    return addCardsPlayedDuringTurn(match, currentPlayerId, [card])
  }

  switch (event.type) {
    case MatchEvent.SELECT_CARD_POSITION: {
      const { currentPlayerId } = match

      assertCurrentPlayer(currentPlayerId)

      match = recordCardsPlayedDuringTurn(currentPlayerId, event.cardIdxInHand)

      break
    }

    case MatchEvent.PLAY_EVENT:
    case MatchEvent.PLAY_TOOL:
    case MatchEvent.PLAY_WATER: {
      const { currentPlayerId } = match

      assertCurrentPlayer(currentPlayerId)

      const player = lookup.getPlayer(match, currentPlayerId)
      const card = player.hand[event.cardIdxInHand]

      assertIsNonNullable(card)

      // NOTE: Prevents plantable tool cards from being double-recorded (they
      // should only be recorded after being placed)
      if (isToolCardInstance(card) && card.isPlantable) {
        break
      }

      match = recordCardsPlayedDuringTurn(currentPlayerId, event.cardIdxInHand)

      break
    }

    default:
  }

  return match
}
