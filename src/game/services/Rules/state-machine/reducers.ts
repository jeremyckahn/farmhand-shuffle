import { addCardsPlayedDuringTurn } from '../../../reducers/add-turn-cards-played'
import {
  MatchEvent,
  MatchEventPayload,
  MatchEventPayloadKey,
  IMatch,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { MatchStateCorruptError } from '../errors'

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
  switch (event.type) {
    case MatchEvent.PLAY_CROP:
    case MatchEvent.PLAY_EVENT:
    case MatchEvent.PLAY_TOOL:
    case MatchEvent.PLAY_WATER: {
      const { currentPlayerId } = match
      assertCurrentPlayer(currentPlayerId)

      const player = match.table.players[currentPlayerId]

      if (!player) {
        throw new Error(`Player not found: ${currentPlayerId}`)
      }

      const card = player.hand[event.cardIdx]

      if (!card) {
        throw new MatchStateCorruptError(
          `event.cardIdx is invalid: ${event.cardIdx}`
        )
      }

      match = addCardsPlayedDuringTurn(match, currentPlayerId, [card])

      break
    }

    default:
  }

  return match
}
