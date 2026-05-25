import { enqueueActions } from 'xstate'

import { MatchEvent, MatchState, MatchStateGuard } from '../../../types'
import { assertCurrentPlayer, assertIsNonNullable } from '../../../types/guards'
import { botLogic } from '../../BotLogic'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'

export const choosingCardPositon: RulesMachineConfig['states'] = {
  [MatchState.CHOOSING_CARD_POSITION]: {
    on: {
      [MatchEvent.SELECT_CARD_POSITION]: MatchState.PLANTING_CARD,

      [MatchEvent.OPERATION_ABORTED]: [
        {
          guard: MatchStateGuard.IS_SETUP_PHASE,
          target: MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
        },
        {
          target: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        },
      ],
    },
    entry: enqueueActions(({ event, enqueue, context: { match } }) => {
      switch (event.type) {
        case MatchEvent.PLAY_PLANTABLE_TOOL: {
          const { currentPlayerId, sessionOwnerPlayerId } = match
          const { playerId, cardIdxInHand } = event

          assertCurrentPlayer(currentPlayerId)

          if (currentPlayerId !== sessionOwnerPlayerId) {
            const openFieldPositionIdx = botLogic.getOpenFieldPosition(
              match,
              currentPlayerId
            )

            assertIsNonNullable(openFieldPositionIdx)

            enqueue.raise({
              type: MatchEvent.SELECT_CARD_POSITION,
              cardIdxInHand,
              fieldIdxToPlace: openFieldPositionIdx,
              playerId,
            })
          }

          break
        }
      }

      enqueue.assign({ match })
    }),

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
