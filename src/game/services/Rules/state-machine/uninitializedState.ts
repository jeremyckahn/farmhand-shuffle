import { assertEvent, enqueueActions } from 'xstate'

import { MatchEvent, MatchState } from '../../../types'
import { factory } from '../../Factory'

import { RulesMachineConfig } from './types'

export const uninitializedState: RulesMachineConfig['states'] = {
  [MatchState.UNINITIALIZED]: {
    on: {
      [MatchEvent.INIT]: {
        actions: enqueueActions(({ event, enqueue }) => {
          assertEvent(event, MatchEvent.INIT)

          const { playerSeeds, userPlayerId } = event
          const match = factory.buildMatchForSession(playerSeeds, userPlayerId)

          enqueue.assign({ match })
          enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION })
        }),
      },

      // NOTE: Restricted to the two checkpoint-able states
      // (WAITING_FOR_PLAYER_SETUP_ACTION / WAITING_FOR_PLAYER_TURN_ACTION).
      // Rather than a dynamic transition target (a function of the event),
      // this restores context then raises one of two explicit prompt events,
      // each of which has its own explicit transition below. This keeps
      // RESUME's reachable target set closed to exactly the two supported
      // checkpoint states instead of a fully generic fan-out.
      [MatchEvent.RESUME]: {
        actions: enqueueActions(({ event, enqueue }) => {
          assertEvent(event, MatchEvent.RESUME)

          const { match, botState, matchState, userPlayerId } = event

          enqueue.assign({
            match: { ...match, sessionOwnerPlayerId: userPlayerId },
            botState,
          })

          if (matchState === MatchState.WAITING_FOR_PLAYER_SETUP_ACTION) {
            enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION })
          } else {
            enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
          }
        }),
      },

      [MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]:
        MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,

      [MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    },
  },
}
