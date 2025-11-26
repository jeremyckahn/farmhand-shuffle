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

// TODO: Consolidate GameMachineContext and IGame
export interface GameMachineContext {
  botCropCardIndicesToHarvest: number[]
  botCropsToPlayDuringTurn: number
  botFieldCropIndicesToWaterDuringTurn: number[]
  cardsToDrawAtTurnStart: number
  eventCardsThatCanBePlayed: number
  game: IGame
  selectedWaterCardInHandIdx: number
  shell: IShell
  toolCardsThatCanBePlayed: number
  winner: IPlayer['id'] | null
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
