import { factory } from '../Factory'
import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_CARDS_TO_DRAW_AT_TURN_START,
} from '../../config'
import { MatchMachineContext } from '../../types'

import { defaultSelectedWaterCardInHandIdx } from './constants'

export const createMatchStateMachineContext = (): MatchMachineContext => {
  return {
    botState: {
      cropCardIndicesToHarvest: [],
      cropsToPlayDuringTurn: 0,
      fieldCropIndicesToWaterDuringTurn: [],
      toolCardsThatCanBePlayed: 0,
    },
    match: factory.buildMatch({
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
