import { factory } from '../Factory'

import { GameMachineContext } from './state-machine/createMachine'

import { defaultSelectedWaterCardInHandIdx } from './constants'

export const createGameStateMachineContext = (): GameMachineContext => {
  return {
    game: factory.buildGame(),
    cropsToPlayDuringBotTurn: 0,
    selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
    fieldCropIndicesToWaterDuringBotTurn: [],
    cropCardIndicesToHarvest: [],
    shell: {
      triggerNotification: () => {},
    },
    winner: null,
  }
}
