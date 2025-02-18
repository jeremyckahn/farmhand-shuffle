import { createActor } from 'xstate'

import { factory } from '../Factory'

import { machineConfig } from './state-machine'
import { createMachine } from './state-machine/createMachine'

export class RulesService {
  createGameStateMachine = () => {
    const machine = createMachine({
      context: {
        game: factory.buildGame(),
        cropsToPlayDuringBotTurn: 0,
        fieldCropIndicesToWaterDuringBotTurn: [],
      },
      ...machineConfig,
    })

    return machine
  }

  startGame = () => {
    return createActor(this.createGameStateMachine()).start()
  }
}

export const rules = new RulesService()
