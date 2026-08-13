import { setup } from 'xstate'

import {
  BotTurnActionState,
  MatchEvent,
  MatchEventPayload,
  MatchEventPayloadKey,
  MatchMachineContext,
  MatchStateGuard,
} from '../../../types'
import { assertIsNonNullable } from '../../../types/assertions'
import { lookup } from '../../Lookup'

export const { createMachine } = setup({
  types: {
    context: {} as MatchMachineContext,
    events: {} as MatchEventPayload[MatchEventPayloadKey],
  },

  guards: {
    [MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS]: ({
      context: {
        botState: { currentBotTurnPhase },
      },
    }) => currentBotTurnPhase === BotTurnActionState.PLAYING_EVENTS,

    [MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS]: ({
      context: {
        botState: { currentBotTurnPhase },
      },
    }) => currentBotTurnPhase === BotTurnActionState.PLAYING_TOOLS,

    [MatchStateGuard.IS_SELECTED_IDX_VALID]: ({
      event,
      context: { match },
    }) => {
      const { currentPlayerId } = match

      assertIsNonNullable(currentPlayerId)

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
