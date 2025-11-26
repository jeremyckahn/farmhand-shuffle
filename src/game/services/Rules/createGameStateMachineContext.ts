import { factory } from '../Factory'
import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_CARDS_TO_DRAW_AT_TURN_START,
} from '../../config'

import { GameMachineContext } from './state-machine/createMachine'
import { defaultSelectedWaterCardInHandIdx } from './constants'

export const createGameStateMachineContext = (): GameMachineContext => {
  return {
    botCropCardIndicesToHarvest: [],
    botCropsToPlayDuringTurn: 0,
    botFieldCropIndicesToWaterDuringTurn: [],
    cardsToDrawAtTurnStart: STANDARD_CARDS_TO_DRAW_AT_TURN_START,
    eventCardsThatCanBePlayed: EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
    game: factory.buildGame(),
    selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
    shell: {
      triggerNotification: () => {},
    },
    toolCardsThatCanBePlayed: 0,
    winner: null,
  }
}
