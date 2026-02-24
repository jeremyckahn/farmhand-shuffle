import { assertEvent, enqueueActions } from 'xstate'

import {
  IPlayedCrop,
  IPlayedTool,
  MatchEvent,
  MatchState,
} from '../../../types'

import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const choosingCardPositon: RulesMachineConfig['states'] = {
  [MatchState.CHOOSING_CARD_POSITION]: {
    on: {
      [MatchEvent.SELECT_CARD_POSITION]: MatchState.PLANTING_CROP,

      // FIXME: Ensure this is handled and tested
      [MatchEvent.OPERATION_ABORTED]: [
        MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      ],
    },

    entry: enqueueActions(({ event, enqueue, context: { match } }) => {
      {
        assertEvent(event, MatchEvent.PLAY_CROP)

        const { playerId, cardIdx } = event
        const player = lookup.getPlayer(match, playerId)
        const { field } = player
        const { crops } = field

        // FIXME: This is a temporary shim
        const emptyPlotIdx = crops.findIndex(
          (crop: IPlayedCrop | IPlayedTool | undefined) => crop === undefined
        )

        // FIXME: Implement this function, the .raise is a placeholder
        enqueue.raise({
          type: MatchEvent.SELECT_CARD_POSITION,
          cardIdxInHand: cardIdx,
          fieldIdxToPlace: emptyPlotIdx,
          playerId,
        })
      }
    }),
  },
}
