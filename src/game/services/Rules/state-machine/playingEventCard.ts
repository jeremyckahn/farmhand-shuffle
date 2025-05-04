import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'
import { lookup } from '../../Lookup'
import { assertIsEventCard } from '../../../types/guards'

import { RulesMachineConfig } from './types'

// NOTE: This state serves as a sort of "router" from the generic PLAYING_EVENT
// state to a more event-specfic state. This centralizes the complexity of
// determining the appropriate state to transition to when playing an event
// card.
export const playingEventCard: RulesMachineConfig['states'] = {
  [GameState.PLAYING_EVENT]: {
    on: {
      [GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        GameState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(({ event, context: { game }, enqueue }) => {
      assertEvent(event, GameEvent.PLAY_EVENT)

      const { playerId, cardIdx } = event
      const card = lookup.getCardFromHand(game, playerId, cardIdx)
      assertIsEventCard(card)

      game = card.applyEffect(game)

      // FIXME: Prompt bot player as necessary
      enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
      enqueue.assign({ game })
    }),
  },
}
