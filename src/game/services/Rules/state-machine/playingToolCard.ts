import { assertEvent, enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { MatchEvent, MatchState, ShellNotificationType } from '../../../types'
import { assertCurrentPlayer, assertIsToolCard } from '../../../types/guards'
import { lookup } from '../../Lookup'

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
