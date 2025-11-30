import { assertEvent, enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { GameEvent, GameState, ShellNotificationType } from '../../../types'
import { assertCurrentPlayer, assertIsToolCard } from '../../../types/guards'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const playingToolCard: RulesMachineConfig['states'] = {
  [GameState.PLAYING_TOOL]: {
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
        assertEvent(event, GameEvent.PLAY_TOOL)

        const { currentPlayerId, sessionOwnerPlayerId } = game
        const { playerId, cardIdx } = event
        const card = lookup.getCardFromHand(game, playerId, cardIdx)

        assertIsToolCard(card)
        assertCurrentPlayer(currentPlayerId)

        triggerNotification({
          type: ShellNotificationType.TOOL_CARD_PLAYED,
          payload: {
            toolCard: card,
          },
        })

        game = card.applyEffect(context).game
        game = moveFromHandToDiscardPile(game, currentPlayerId, cardIdx)

        let { botState } = context

        if (currentPlayerId === sessionOwnerPlayerId) {
          enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
        } else {
          enqueue.raise({ type: GameEvent.PROMPT_BOT_FOR_TURN_ACTION })
          botState = {
            ...botState,
            toolCardsThatCanBePlayed: botState.toolCardsThatCanBePlayed - 1,
          }
        }

        enqueue.assign({
          ...context,
          game,
          botState,
        })
      }
    ),
  },
}
