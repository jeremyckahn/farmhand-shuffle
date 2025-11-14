import { addCardsPlayedDuringTurn } from '../../../reducers/add-turn-cards-played'
import {
  GameEvent,
  GameEventPayload,
  GameEventPayloadKey,
  IGame,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { GameStateCorruptError } from '../errors'

/**
 * Performs state reductions that are common to any event in which a card is
 * played.
 * @param game The game state.
 * @param event The event that triggered the transition.
 * @returns The updated game state.
 */
export const recordCardPlayEvents = (
  game: IGame,
  event: GameEventPayload[GameEventPayloadKey]
) => {
  switch (event.type) {
    case GameEvent.PLAY_CROP:
    case GameEvent.PLAY_EVENT:
    case GameEvent.PLAY_TOOL:
    case GameEvent.PLAY_WATER: {
      const { currentPlayerId } = game
      assertCurrentPlayer(currentPlayerId)

      const card = game.table.players[currentPlayerId].hand[event.cardIdx]

      if (!card) {
        throw new GameStateCorruptError(
          `event.cardIdx is invalid: ${event.cardIdx}`
        )
      }

      game = addCardsPlayedDuringTurn(game, currentPlayerId, [card])

      break
    }

    default:
  }

  return game
}
