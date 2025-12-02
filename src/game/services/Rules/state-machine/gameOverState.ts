import { assertEvent, enqueueActions } from 'xstate'

import { MatchEvent, MatchState } from '../../../types'
import { factory } from '../../Factory'
import { createMatchStateMachineContext } from '../createMatchStateMachineContext'
import { MatchStateCorruptError } from '../errors'

import { RulesMachineConfig } from './types'

export const gameOverState: RulesMachineConfig['states'] = {
  [MatchState.GAME_OVER]: {
    on: {
      [MatchEvent.INIT]: {
        actions: enqueueActions(({ event, enqueue }) => {
          assertEvent(event, MatchEvent.INIT)

          const { playerSeeds, userPlayerId } = event
          const match = factory.buildMatchForSession(playerSeeds, userPlayerId)
          const initialContext = createMatchStateMachineContext()

          enqueue.assign({ ...initialContext, match })
          enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION })
        }),
      },

      [MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]:
        MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
    },

    entry: enqueueActions(({ event, enqueue, context: { match } }) => {
      assertEvent(event, MatchEvent.PLAYER_RAN_OUT_OF_FUNDS)

      const winner = Object.keys(match.table.players).find(
        playerId => playerId !== event.playerId
      )

      if (winner === undefined) {
        throw new MatchStateCorruptError('Winner could not be determined')
      }

      enqueue.assign({ match: { ...match, winner } })
    }),
  },
}
