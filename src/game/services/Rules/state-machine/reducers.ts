import { addCardsPlayedDuringTurn } from '../../../reducers/add-turn-cards-played'
import {
  MatchEvent,
  MatchEventPayload,
  MatchEventPayloadKey,
  IMatch,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { MatchStateCorruptError } from '../errors'
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

    if (!card) {
      throw new MatchStateCorruptError(`cardIdx is invalid: ${cardIdxInHand}`)
    }

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

      match = recordCardsPlayedDuringTurn(currentPlayerId, event.cardIdx)

      break
    }

    default:
  }

  return match
}
