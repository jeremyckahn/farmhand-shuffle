import { createActor } from 'xstate'

import { machineConfig } from './state-machine'
import { createMachine } from './state-machine/createMachine'
import { createGameStateMachineContext } from './createGameStateMachineContext'

export class RulesService {
  createGameStateMachine = () => {
    const machine = createMachine({
      context: createGameStateMachineContext(),
      ...machineConfig,
    })

    return machine
  }

  startGame = () => {
    return createActor(this.createGameStateMachine()).start()
  }
}

export const rules = new RulesService()
