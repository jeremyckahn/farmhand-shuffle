import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'

import { performingBotCropWateringState } from './performingBotCropWateringState'
import { performingBotSetupActionState } from './performingBotSetupActionState'
import { performingBotTurnActionState } from './performingBotTurnActionState'
import { plantingCropState } from './plantingCropState'
import { playerWateringCropState } from './playerWateringCropState'
import { playingCardState } from './playingCardState'
import { RulesMachineConfig } from './types'
import { uninitializedState } from './uninitializedState'
import { waitingForPlayerSetupActionState } from './waitingForPlayerSetupActionState'
import { waitingForPlayerTurnActionState } from './waitingForPlayerTurnActionState'

export const machineConfig: RulesMachineConfig = {
  initial: GameState.UNINITIALIZED,

  on: {
    // NOTE: Used to override the internal game context of the state machine.
    // This should only be used for test setup and debugging.
    [GameEvent.DANGEROUSLY_SET_CONTEXT]: {
      actions: enqueueActions(({ event, enqueue }) => {
        assertEvent(event, GameEvent.DANGEROUSLY_SET_CONTEXT)

        const { type, ...context } = event

        enqueue.assign(context)
      }),
    },

    [GameEvent.SET_SHELL]: {
      actions: enqueueActions(({ event, enqueue }) => {
        assertEvent(event, GameEvent.SET_SHELL)

        const { shell } = event

        enqueue.assign({ shell })
      }),
    },
  },

  states: {
    ...uninitializedState,

    ...performingBotCropWateringState,
    ...performingBotSetupActionState,
    ...performingBotTurnActionState,
    ...plantingCropState,
    ...playerWateringCropState,
    ...playingCardState,
    ...waitingForPlayerSetupActionState,
    ...waitingForPlayerTurnActionState,
  },
}
