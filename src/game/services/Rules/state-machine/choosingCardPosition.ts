import { enqueueActions } from 'xstate'

import { MatchEvent, MatchState, MatchStateGuard } from '../../../types'

import { RulesMachineConfig } from './types'
import { recordCardPlayEvents } from './reducers'

export const choosingCardPositon: RulesMachineConfig['states'] = {
  [MatchState.CHOOSING_CARD_POSITION]: {
    on: {
      [MatchEvent.SELECT_CARD_POSITION]: MatchState.PLANTING_CROP,

      [MatchEvent.OPERATION_ABORTED]: [
        {
          guard: MatchStateGuard.IS_SETUP_PHASE,
          target: MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
        },
        { target: MatchState.WAITING_FOR_PLAYER_TURN_ACTION },
      ],
    },

    exit: enqueueActions(({ event, enqueue, context: { match } }) => {
      switch (event.type) {
        case MatchEvent.SELECT_CARD_POSITION: {
          match = recordCardPlayEvents(match, event)

          break
        }
      }

      enqueue.assign({ match })
    }),
  },
}
