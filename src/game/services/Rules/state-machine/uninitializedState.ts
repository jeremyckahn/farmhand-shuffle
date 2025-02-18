import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'
import { factory } from '../../Factory'

import { RulesMachineConfig } from './types'

export const uninitializedState: RulesMachineConfig['states'] = {
  [GameState.UNINITIALIZED]: {
    on: {
      [GameEvent.INIT]: {
        actions: enqueueActions(({ event, enqueue }) => {
          assertEvent(event, GameEvent.INIT)

          const { playerSeeds, userPlayerId } = event
          const game = factory.buildGameForSession(playerSeeds, userPlayerId)

          enqueue.assign({ game })
          enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION })
        }),
      },

      [GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]:
        GameState.WAITING_FOR_PLAYER_SETUP_ACTION,
    },
  },
}
