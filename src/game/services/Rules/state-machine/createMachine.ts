import { setup, assertEvent } from 'xstate'

import {
  IGame,
  GameEventPayload,
  GameEventPayloadKey,
  GameStateGuard,
  GameEvent,
  IShell,
  IPlayer,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'

export interface GameMachineContext {
  cropCardIndicesToHarvest: number[]
  cropsToPlayDuringBotTurn: number
  fieldCropIndicesToWaterDuringBotTurn: number[]
  game: IGame
  selectedWaterCardInHandIdx: number
  shell: IShell
  winner: IPlayer['id'] | null
}

export const { createMachine } = setup({
  types: {
    context: {} as GameMachineContext,
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
