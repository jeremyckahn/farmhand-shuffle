import { setup, assertEvent } from 'xstate'

import {
  IGame,
  GameEventPayload,
  GameEventPayloadKey,
  GameStateGuard,
  GameEvent,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'

export const { createMachine } = setup({
  types: {
    context: {} as {
      game: IGame
      cropsToPlayDuringBotTurn: number
      fieldCropIndicesToWaterDuringBotTurn: number[]
    },
    events: {} as GameEventPayload[GameEventPayloadKey],
  },

  guards: {
    [GameStateGuard.HAVE_PLAYERS_COMPLETED_SETUP]({
      event,
      context: { game },
    }) {
      assertEvent(event, GameEvent.START_TURN)
      assertCurrentPlayer(game.currentPlayerId)

      return Object.values(game.table.players).every(
        player => player.field.crops.length > 0
      )
    },
  },
})
