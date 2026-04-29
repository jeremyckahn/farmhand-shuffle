import { setup } from 'xstate'

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
    [MatchStateGuard.IS_SELECTED_IDX_VALID]: ({
      event,
      context: { match },
    }) => {
      const { currentPlayerId } = match

      assertCurrentPlayer(currentPlayerId)

      switch (event.type) {
        case MatchEvent.SELECT_CROP_TO_WATER: {
          const player = lookup.getPlayer(match, currentPlayerId)
          const { cards } = player.field
          const playedCrop = cards[event.cropIdxInFieldToWater]

          return playedCrop !== undefined
        }

        default:
      }

      return true
    },

    [MatchStateGuard.IS_SETUP_PHASE]: ({ context: { match } }) => {
      return match.turn === 0
    },
  },
})
