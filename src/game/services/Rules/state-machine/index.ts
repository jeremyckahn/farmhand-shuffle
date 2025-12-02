import { assertEvent, enqueueActions } from 'xstate'

import { MatchEvent, MatchState } from '../../../types'

import { gameOverState } from './gameOverState'
import { performingBotCropHarvestingState } from './performingBotCropHarvestingState'
import { performingBotCropWateringState } from './performingBotCropWateringState'
import { performingBotSetupActionState } from './performingBotSetupActionState'
import { performingBotTurnActionState } from './performingBotTurnActionState'
import { plantingCropState } from './plantingCropState'
import { playerWateringCropState } from './playerWateringCropState'
import { playingEventCard } from './playingEventCard'
import { playingToolCard } from './playingToolCard'
import { RulesMachineConfig } from './types'
import { uninitializedState } from './uninitializedState'
import { waitingForPlayerSetupActionState } from './waitingForPlayerSetupActionState'
import { waitingForPlayerTurnActionState } from './waitingForPlayerTurnActionState'

export const machineConfig: RulesMachineConfig = {
  initial: MatchState.UNINITIALIZED,

  on: {
    // NOTE: Used to override the internal match context of the state machine.
    // This should only be used for test setup and debugging.
    [MatchEvent.DANGEROUSLY_SET_CONTEXT]: {
      actions: enqueueActions(({ event, enqueue }) => {
        assertEvent(event, MatchEvent.DANGEROUSLY_SET_CONTEXT)

        const { type, ...context } = event

        enqueue.assign(context)
      }),
    },

    [MatchEvent.SET_SHELL]: {
      actions: enqueueActions(({ event, enqueue }) => {
        assertEvent(event, MatchEvent.SET_SHELL)

        const { shell } = event

        enqueue.assign({ shell })
      }),
    },
  },

  states: {
    ...uninitializedState,
    ...gameOverState,

    ...performingBotCropWateringState,
    ...performingBotCropHarvestingState,
    ...performingBotSetupActionState,
    ...performingBotTurnActionState,
    ...plantingCropState,
    ...playerWateringCropState,
    ...playingEventCard,
    ...playingToolCard,
    ...waitingForPlayerSetupActionState,
    ...waitingForPlayerTurnActionState,
  },
}
