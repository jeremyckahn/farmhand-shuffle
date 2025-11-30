import { factory } from '../Factory'
import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_CARDS_TO_DRAW_AT_TURN_START,
} from '../../config'

import { GameMachineContext } from './state-machine/createMachine'
import { defaultSelectedWaterCardInHandIdx } from './constants'

export const createGameStateMachineContext = (): GameMachineContext => {
  return {
    botState: {
      cropCardIndicesToHarvest: [],
      cropsToPlayDuringTurn: 0,
      fieldCropIndicesToWaterDuringTurn: [],
      toolCardsThatCanBePlayed: 0,
    },
    game: factory.buildGame({
      cardsToDrawAtTurnStart: STANDARD_CARDS_TO_DRAW_AT_TURN_START,
      eventCardsThatCanBePlayed: EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    }),
    shell: {
      triggerNotification: () => {},
    },
  }
}
