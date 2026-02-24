import { assertEvent, enqueueActions } from 'xstate'

import { MatchEvent, MatchState } from '../../../types'

import { RulesMachineConfig } from './types'

export const choosingCardPositon: RulesMachineConfig['states'] = {
  [MatchState.CHOOSING_CARD_POSITION]: {
    on: {
      [MatchEvent.SELECT_CARD_POSITION]: MatchState.PLANTING_CROP,

      // FIXME: Ensure this is handled and tested
      [MatchEvent.OPERATION_ABORTED]: [
        MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      ],
    },

    entry: enqueueActions(({ event, enqueue }) => {
      {
        assertEvent(event, MatchEvent.PLAY_CROP)

        const { playerId, cardIdx } = event

        // FIXME: Implement this function, the .raise is a placeholder
        enqueue.raise({
          type: MatchEvent.SELECT_CARD_POSITION,
          cardIdxInHand: cardIdx,
          playerId,
        })
      }
    }),
  },
}
