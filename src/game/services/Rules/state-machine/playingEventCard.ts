import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'
import { lookup } from '../../Lookup'
import { assertIsEventCard } from '../../../types/guards'

import { RulesMachineConfig } from './types'

export const playingEventCard: RulesMachineConfig['states'] = {
  [GameState.PLAYING_EVENT]: {
    on: {
      [GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        GameState.WAITING_FOR_PLAYER_TURN_ACTION,

      [GameEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        GameState.PERFORMING_BOT_TURN_ACTION,
    },

    entry: enqueueActions(({ event, context: { game }, enqueue }) => {
      assertEvent(event, GameEvent.PLAY_EVENT)

      const { currentPlayerId, sessionOwnerPlayerId } = game
      const { playerId, cardIdx } = event
      const card = lookup.getCardFromHand(game, playerId, cardIdx)

      assertIsEventCard(card)

      game = card.applyEffect(game)

      if (currentPlayerId === sessionOwnerPlayerId) {
        enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
      } else {
        enqueue.raise({ type: GameEvent.PROMPT_BOT_FOR_TURN_ACTION })
      }

      enqueue.assign({ game })
    }),
  },
}
