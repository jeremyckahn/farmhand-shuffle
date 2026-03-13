import { enqueueActions } from 'xstate'

import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import {
  IPlayedCrop,
  IPlayedTool,
  MatchEvent,
  MatchState,
} from '../../../types'
import { defaultSelectedWaterCardInHandIdx } from '../constants'

import { GameStateCorruptError } from '../errors'

import { lookup } from '../../Lookup'

import { assertCurrentPlayer } from '../../../types/guards'

import { STANDARD_FIELD_SIZE } from '../../../config'

import { RulesMachineConfig } from './types'

export const plantingCropState: RulesMachineConfig['states'] = {
  [MatchState.PLANTING_CROP]: {
    on: {
      [MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        MatchState.WAITING_FOR_PLAYER_TURN_ACTION,

      [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        MatchState.PERFORMING_BOT_TURN_ACTION,

      [MatchEvent.OPERATION_ABORTED]: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        event,
        context: {
          botState,
          botState: { cropsToPlayDuringTurn },
          match,
        },
        enqueue,
      }) => {
        switch (event.type) {
          // FIXME: This must be moved into its own state machine slice
          case MatchEvent.SELECT_CARD_POSITION: {
            const { playerId, cardIdxInHand, fieldIdxToPlace } = event

            try {
              match = moveCropFromHandToField(
                match,
                playerId,
                cardIdxInHand,
                fieldIdxToPlace
              )

              const { currentPlayerId, sessionOwnerPlayerId } = match

              if (currentPlayerId === sessionOwnerPlayerId) {
                enqueue.raise({
                  type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION,
                })
              } else {
                if (cropsToPlayDuringTurn > 0) {
                  cropsToPlayDuringTurn--
                }

                enqueue.raise({ type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION })
              }
            } catch (e) {
              console.error(e)
              enqueue.raise({ type: MatchEvent.OPERATION_ABORTED })

              return
            }

            enqueue.assign({
              match,
              botState: {
                ...botState,
                cropsToPlayDuringTurn,
              },
            })
            break
          }

          case MatchEvent.PLAY_CROP: {
            const { playerId, cardIdx } = event

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

            try {
              match = moveCropFromHandToField(
                match,
                playerId,
                cardIdx,
                emptyPlotIdx === -1 ? 0 : emptyPlotIdx
              )

              const { currentPlayerId, sessionOwnerPlayerId } = match

              if (currentPlayerId === sessionOwnerPlayerId) {
                enqueue.raise({
                  type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION,
                })
              } else {
                if (cropsToPlayDuringTurn > 0) {
                  cropsToPlayDuringTurn--
                }

                enqueue.raise({ type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION })
              }
            } catch (e) {
              console.error(e)
              enqueue.raise({ type: MatchEvent.OPERATION_ABORTED })

              return
            }

            enqueue.assign({
              match,
              botState: {
                ...botState,
                cropsToPlayDuringTurn,
              },
            })
            break
          }

          default: {
            throw new GameStateCorruptError(`Unexpected event: ${event.type}`)
          }
        }
      }
    ),

    exit: enqueueActions(({ event, context, enqueue }) => {
      let { match } = context

      switch (event.type) {
        case MatchEvent.OPERATION_ABORTED: {
          match = {
            ...match,
            selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
          }
          break
        }

        default:
      }

      enqueue.assign({ match })
    }),
  },
}
