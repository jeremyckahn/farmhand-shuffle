import { factory } from '../Factory'
import { EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN } from '../../config'

import { GameMachineContext } from './state-machine/createMachine'
import { defaultSelectedWaterCardInHandIdx } from './constants'

export const createGameStateMachineContext = (): GameMachineContext => {
  return {
    game: factory.buildGame(),
    cropsToPlayDuringBotTurn: 0,
    eventCardsThatCanBePlayed: EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
    selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
    fieldCropIndicesToWaterDuringBotTurn: [],
    cropCardIndicesToHarvest: [],
    shell: {
      triggerNotification: () => {},
    },
    winner: null,
  }
}
