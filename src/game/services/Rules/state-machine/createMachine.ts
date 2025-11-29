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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BotState {}

// FIXME: Some of the properties of GameMachineContext need to be moved into
// the BotState interface. So, they should be nested under
// GameMachineContext['botState']. They are individually marked with FIXME comments
// on their respective lines. This will be a wide-ranging change. The work can
// be validated by running the type checker, unit tests, and linter (via
// `npm run check`). It is recommended to do this in an iterative fashion, one
// property at a time. Ensure that there are no type safety regressions. This
// will require updating test and state machine code especially but it may
// touch other parts of the code base as well, including UI code. This is
// strictly a refactor, there should be no behavioral changes whatsoever.
export interface GameMachineContext {
  botCropCardIndicesToHarvest: number[] // FIXME: Move this to GameMachineContext['botState']
  botCropsToPlayDuringTurn: number // FIXME: Move this to GameMachineContext['botState']
  botFieldCropIndicesToWaterDuringTurn: number[] // FIXME: Move this to GameMachineContext['botState']
  game: IGame
  shell: IShell
  botState: BotState
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
