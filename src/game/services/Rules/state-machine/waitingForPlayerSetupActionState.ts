import { MatchEvent, MatchState } from '../../../types'

import { RulesMachineConfig } from './types'

export const waitingForPlayerSetupActionState: RulesMachineConfig['states'] = {
  [MatchState.WAITING_FOR_PLAYER_SETUP_ACTION]: {
    on: {
      [MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION]:
        MatchState.PERFORMING_BOT_SETUP_ACTION,

      [MatchEvent.PLAY_CROP]: MatchState.CHOOSING_CARD_POSITION,
    },
  },
}
