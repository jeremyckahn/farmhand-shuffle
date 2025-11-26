import { factory } from '../Factory'
import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_CARDS_TO_DRAW_AT_TURN_START,
} from '../../config'

import { GameMachineContext } from './state-machine/createMachine'
import { defaultSelectedWaterCardInHandIdx } from './constants'

export const createGameStateMachineContext = (): GameMachineContext => {
  return {
    game: factory.buildGame(),
    cardsToDrawAtTurnStart: STANDARD_CARDS_TO_DRAW_AT_TURN_START,
    botCropsToPlayDuringTurn: 0,
    eventCardsThatCanBePlayed: EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
    toolCardsThatCanBePlayed: 0,
    selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
    botFieldCropIndicesToWaterDuringTurn: [],
    botCropCardIndicesToHarvest: [],
    shell: {
      triggerNotification: () => {},
    },
    winner: null,
  }
}
