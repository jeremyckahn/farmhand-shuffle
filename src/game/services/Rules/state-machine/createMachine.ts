import { setup, assertEvent } from 'xstate'

import {
  IMatch,
  MatchEventPayload,
  MatchEventPayloadKey,
  MatchStateGuard,
  MatchEvent,
  IShell,
  BotState,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'

export interface MatchMachineContext {
  match: IMatch
  shell: IShell
  botState: BotState
}

export const { createMachine } = setup({
  types: {
    context: {} as MatchMachineContext,
    events: {} as MatchEventPayload[MatchEventPayloadKey],
  },

  guards: {
    [MatchStateGuard.HAVE_PLAYERS_COMPLETED_SETUP]: ({
      event,
      context: { match },
    }) => {
      assertEvent(event, MatchEvent.START_TURN)
      assertCurrentPlayer(match.currentPlayerId)

      return Object.values(match.table.players).every(
        player => player.field.crops.length > 0
      )
    },

    [MatchStateGuard.IS_SELECTED_IDX_VALID]: ({
      event,
      context: { match },
    }) => {
      const { currentPlayerId } = match
      assertCurrentPlayer(currentPlayerId)

      switch (event.type) {
        case MatchEvent.SELECT_CROP_TO_WATER: {
          const { crops } = match.table.players[currentPlayerId].field
          const playedCrop = crops[event.cropIdxInFieldToWater]

          return playedCrop !== undefined
        }

        default:
      }

      return true
    },
  },
})
