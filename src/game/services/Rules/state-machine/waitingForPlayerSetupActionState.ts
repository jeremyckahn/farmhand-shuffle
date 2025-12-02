import { assertEvent, enqueueActions } from 'xstate'

import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import { MatchEvent, MatchState } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'

export const waitingForPlayerSetupActionState: RulesMachineConfig['states'] = {
  [MatchState.WAITING_FOR_PLAYER_SETUP_ACTION]: {
    on: {
      [MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION]:
        MatchState.PERFORMING_BOT_SETUP_ACTION,

      [MatchEvent.PLAY_CROP]: {
        actions: enqueueActions(({ event, context: { match }, enqueue }) => {
          // TODO: Ensure scenario where field is full is handled
          assertEvent(event, MatchEvent.PLAY_CROP)
          const { cardIdx, playerId } = event

          const { currentPlayerId } = match
          assertCurrentPlayer(currentPlayerId)

          match = recordCardPlayEvents(match, event)
          match = moveCropFromHandToField(match, playerId, cardIdx)

          enqueue.assign({ match })
        }),
      },
    },
  },
}
