import { assertEvent, enqueueActions } from 'xstate'

import { STANDARD_FIELD_SIZE } from '../../../config'
import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import {
  IPlayedCrop,
  IPlayedTool,
  MatchEvent,
  MatchState,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { lookup } from '../../Lookup'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'

export const waitingForPlayerSetupActionState: RulesMachineConfig['states'] = {
  [MatchState.WAITING_FOR_PLAYER_SETUP_ACTION]: {
    on: {
      [MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION]:
        MatchState.PERFORMING_BOT_SETUP_ACTION,

      [MatchEvent.PLAY_CROP]: {
        actions: enqueueActions(({ event, context: { match }, enqueue }) => {
          assertEvent(event, MatchEvent.PLAY_CROP)
          const { cardIdx, playerId } = event

          const { currentPlayerId } = match

          assertCurrentPlayer(currentPlayerId)

          const player = lookup.getPlayer(match, playerId)
          const isFieldFull =
            player.field.crops.filter(crop => crop !== undefined).length >=
            STANDARD_FIELD_SIZE

          if (isFieldFull) {
            console.warn(
              `Player ${playerId} attempted to play a crop but the field is full.`
            )
          } else {
            // FIXME: This is a temporary shim
            const { currentPlayerId } = match

            assertCurrentPlayer(currentPlayerId)
            const player = lookup.getPlayer(match, currentPlayerId)
            const { field } = player
            const { crops } = field

            const cropsPadding = new Array<typeof undefined>(
              STANDARD_FIELD_SIZE
            ).fill(undefined)

            const paddedCrops = [...crops, ...cropsPadding].slice(
              0,
              STANDARD_FIELD_SIZE
            )
            const emptyPlotIdx = paddedCrops.findIndex(
              (crop: IPlayedCrop | IPlayedTool | undefined) =>
                crop === undefined
            )
            // End temporary shim

            enqueue.raise({
              type: MatchEvent.SELECT_CARD_POSITION,
              cardIdxInHand: cardIdx,
              fieldIdxToPlace: emptyPlotIdx === -1 ? 0 : emptyPlotIdx,
              playerId,
            })
          }
        }),
      },

      [MatchEvent.SELECT_CARD_POSITION]: {
        actions: enqueueActions(({ event, context: { match }, enqueue }) => {
          assertEvent(event, MatchEvent.SELECT_CARD_POSITION)
          const { cardIdxInHand: cardIdx, playerId, fieldIdxToPlace } = event

          const { currentPlayerId } = match

          assertCurrentPlayer(currentPlayerId)

          const player = lookup.getPlayer(match, playerId)
          const isFieldFull =
            player.field.crops.filter(crop => crop !== undefined).length >=
            STANDARD_FIELD_SIZE

          if (isFieldFull) {
            console.warn(
              `Player ${playerId} attempted to play a crop but the field is full.`
            )
          } else {
            match = recordCardPlayEvents(match, event)
            match = moveCropFromHandToField(
              match,
              playerId,
              cardIdx,
              fieldIdxToPlace
            )
          }

          enqueue.assign({ match })
        }),
      },
    },
  },
}
