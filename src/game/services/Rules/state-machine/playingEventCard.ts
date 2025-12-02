import { assertEvent, enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { MatchEvent, MatchState, ShellNotificationType } from '../../../types'
import { assertCurrentPlayer, assertIsEventCard } from '../../../types/guards'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const playingEventCard: RulesMachineConfig['states'] = {
  [MatchState.PLAYING_EVENT]: {
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
          match,
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        assertEvent(event, MatchEvent.PLAY_EVENT)

        const { currentPlayerId, sessionOwnerPlayerId } = match
        const { playerId, cardIdx } = event
        const card = lookup.getCardFromHand(match, playerId, cardIdx)

        assertIsEventCard(card)
        assertCurrentPlayer(currentPlayerId)

        triggerNotification({
          type: ShellNotificationType.EVENT_CARD_PLAYED,
          payload: {
            eventCard: card,
          },
        })

        match = card.applyEffect(context).match
        match = moveFromHandToDiscardPile(match, currentPlayerId, cardIdx)

        if (currentPlayerId === sessionOwnerPlayerId) {
          enqueue.raise({ type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
        } else {
          enqueue.raise({ type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION })
        }

        match = {
          ...match,
          eventCardsThatCanBePlayed: match.eventCardsThatCanBePlayed - 1,
        }

        enqueue.assign({
          ...context,
          match,
        })
      }
    ),
  },
}
