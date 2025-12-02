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

      [MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]:
        MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
    },
  },
}
