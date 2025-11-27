import { setup, assertEvent } from 'xstate'

import {
  IGame,
  GameEventPayload,
  GameEventPayloadKey,
  GameStateGuard,
  GameEvent,
  IShell,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'

// TODO: Some of the properties of GameMachineContext need to be moved into the
// IGame interface. They are individually marked with TODO comments on their
// respective lines. This will be a wide-ranging change. The work can be
// validated by running the type checker (npm run check:types`) and the unit
// tests (`npm run test`). It is recommended to do this in an iterative
// fashion. Ensure that the relevant type guards in
// src/game/types/guards/index.ts are updated and expanded as necessary to
// ensure there are no type safety regressions. This will require updating test
// and UI code. This is strictly a refactor, there should be no functional
// changes whatsoever.
export interface GameMachineContext {
  botCropCardIndicesToHarvest: number[]
  botCropsToPlayDuringTurn: number
  botFieldCropIndicesToWaterDuringTurn: number[]
  game: IGame
  shell: IShell
}

export const { createMachine } = setup({
  types: {
    context: {} as GameMachineContext,
    events: {} as GameEventPayload[GameEventPayloadKey],
  },

  guards: {
    [GameStateGuard.HAVE_PLAYERS_COMPLETED_SETUP]: ({
      event,
      context: { game },
    }) => {
      assertEvent(event, GameEvent.START_TURN)
      assertCurrentPlayer(game.currentPlayerId)

      return Object.values(game.table.players).every(
        player => player.field.crops.length > 0
      )
    },

    [GameStateGuard.IS_SELECTED_IDX_VALID]: ({ event, context: { game } }) => {
      const { currentPlayerId } = game
      assertCurrentPlayer(currentPlayerId)

      switch (event.type) {
        case GameEvent.SELECT_CROP_TO_WATER: {
          const { crops } = game.table.players[currentPlayerId].field
          const playedCrop = crops[event.cropIdxInFieldToWater]

          return playedCrop !== undefined
        }

        default:
      }

      return true
    },
  },
})
