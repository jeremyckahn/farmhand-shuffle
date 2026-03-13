import { assertEvent, enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import {
  IPlayedCrop,
  IPlayedTool,
  MatchEvent,
  MatchState,
  ShellNotificationType,
} from '../../../types'
import { assertCurrentPlayer, assertIsToolCard } from '../../../types/guards'
import { lookup } from '../../Lookup'

import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'

import { STANDARD_FIELD_SIZE } from '../../../config'

import { RulesMachineConfig } from './types'

export const playingToolCard: RulesMachineConfig['states'] = {
  [MatchState.PLAYING_TOOL]: {
    on: {
      [MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        MatchState.WAITING_FOR_PLAYER_TURN_ACTION,

      [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        MatchState.PERFORMING_BOT_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        event,
        context,
        context: {
          botState,
          match,
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        assertEvent(event, MatchEvent.PLAY_TOOL)

        const { currentPlayerId, sessionOwnerPlayerId } = match
        const { playerId, cardIdx } = event
        const card = lookup.getCardFromHand(match, playerId, cardIdx)

        assertIsToolCard(card)
        assertCurrentPlayer(currentPlayerId)

        triggerNotification({
          type: ShellNotificationType.TOOL_CARD_PLAYED,
          payload: {
            toolCard: card,
          },
        })

        match = card.applyEffect(context).match

        if (card.isPlantable) {
          // FIXME: This is a temporary shim
          const player = lookup.getPlayer(match, playerId)
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
            (crop: IPlayedCrop | IPlayedTool | undefined) => crop === undefined
          )
          // End temporary shim

          match = moveCropFromHandToField(
            match,
            playerId,
            cardIdx,
            emptyPlotIdx
          )
          console.log('PLANTED TOOL')
        } else {
          console.log('DID NOT PLANT')
        }

        match = moveFromHandToDiscardPile(match, currentPlayerId, cardIdx)

        if (currentPlayerId === sessionOwnerPlayerId) {
          enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
        } else {
          enqueue.raise({ type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION })

          botState = {
            ...botState,
            toolCardsThatCanBePlayed: botState.toolCardsThatCanBePlayed - 1,
          }
        }

        enqueue.assign({
          match,
          botState,
        })
      }
    ),
  },
}
