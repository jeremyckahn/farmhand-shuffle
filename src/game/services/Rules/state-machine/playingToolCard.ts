import { assertEvent, enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { MatchEvent, MatchState, ShellNotificationType } from '../../../types'
import {
  assertCurrentPlayer,
  assertIsToolCardInstance,
} from '../../../types/guards'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const playingToolCard: RulesMachineConfig['states'] = {
  [MatchState.PLAYING_TOOL]: {
    on: {
      [MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        MatchState.WAITING_FOR_PLAYER_TURN_ACTION,

      [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        MatchState.PERFORMING_BOT_TURN_ACTION,

      [MatchEvent.PLAY_PLANTABLE_TOOL]: MatchState.CHOOSING_CARD_POSITION,
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
        const { playerId, cardIdxInHand } = event
        const card = lookup.getCardFromHand(match, playerId, cardIdxInHand)

        assertIsToolCardInstance(card)
        assertCurrentPlayer(currentPlayerId)

        if (!card.isPlantable || currentPlayerId !== sessionOwnerPlayerId) {
          triggerNotification({
            type: ShellNotificationType.TOOL_CARD_PLAYED,
            payload: {
              toolCard: card,
            },
          })
        }

        match = card.applyEffect?.(context).match ?? match

        if (card.isPlantable) {
          enqueue.raise({
            type: MatchEvent.PLAY_PLANTABLE_TOOL,
            cardIdxInHand,
            playerId: currentPlayerId,
          })
        } else {
          match = moveFromHandToDiscardPile(
            match,
            currentPlayerId,
            cardIdxInHand
          )

          if (currentPlayerId === sessionOwnerPlayerId) {
            enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
          } else {
            enqueue.raise({ type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION })

            botState = {
              ...botState,
              toolCardsThatCanBePlayed: botState.toolCardsThatCanBePlayed - 1,
            }
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
