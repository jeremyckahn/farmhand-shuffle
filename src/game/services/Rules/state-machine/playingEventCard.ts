import { assertEvent, enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { GameEvent, GameState, ShellNotificationType } from '../../../types'
import { assertCurrentPlayer, assertIsEventCard } from '../../../types/guards'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const playingEventCard: RulesMachineConfig['states'] = {
  [GameState.PLAYING_EVENT]: {
    on: {
      [GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        GameState.WAITING_FOR_PLAYER_TURN_ACTION,

      [GameEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        GameState.PERFORMING_BOT_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        event,
        context,
        context: {
          game,
          shell: { triggerNotification },
        },
        enqueue,
      }) => {
        assertEvent(event, GameEvent.PLAY_EVENT)

        const { currentPlayerId, sessionOwnerPlayerId } = game
        const { playerId, cardIdx } = event
        const card = lookup.getCardFromHand(game, playerId, cardIdx)

        assertIsEventCard(card)
        assertCurrentPlayer(currentPlayerId)

        triggerNotification({
          type: ShellNotificationType.EVENT_CARD_PLAYED,
          payload: {
            eventCard: card,
          },
        })

        game = card.applyEffect(context).game
        game = moveFromHandToDiscardPile(game, currentPlayerId, cardIdx)

        if (currentPlayerId === sessionOwnerPlayerId) {
          enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
        } else {
          enqueue.raise({ type: GameEvent.PROMPT_BOT_FOR_TURN_ACTION })
        }

        game = {
          ...game,
          eventCardsThatCanBePlayed: game.eventCardsThatCanBePlayed - 1,
        }

        enqueue.assign({
          ...context,
          game,
        })
      }
    ),
  },
}
