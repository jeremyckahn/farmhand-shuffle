import { createActor } from 'xstate'

import { machineConfig } from './state-machine'
import { createMachine } from './state-machine/createMachine'
import { createMatchStateMachineContext } from './createMatchStateMachineContext'

export class RulesService {
  createMatchStateMachine = () => {
    const machine = createMachine({
      context: createMatchStateMachineContext(),
      ...machineConfig,
    })

    return machine
  }

  startMatch = () => {
    return createActor(this.createMatchStateMachine()).start()
  }
}

export const rules = new RulesService()
