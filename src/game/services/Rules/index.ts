import { createActor } from 'xstate'

import { factory } from '../Factory'

import { createMachine, machineConfig } from './state-machine'

export class RulesService {
  createGameStateMachine = () => {
    const machine = createMachine({
      context: { game: factory.buildGame() },
      ...machineConfig,
    })

    return machine
  }

  startGame = () => {
    return createActor(this.createGameStateMachine()).start()
  }
}

export const rules = new RulesService()
