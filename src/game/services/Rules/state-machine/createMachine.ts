import { assertEvent, setup } from 'xstate'

import {
  MatchEvent,
  MatchEventPayload,
  MatchEventPayloadKey,
  MatchMachineContext,
  MatchStateGuard,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { lookup } from '../../Lookup'

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
          const player = lookup.getPlayer(match, currentPlayerId)

          const { crops } = player.field
          const playedCrop = crops[event.cropIdxInFieldToWater]

          return playedCrop !== undefined
        }

        default:
      }

      return true
    },
  },
})
