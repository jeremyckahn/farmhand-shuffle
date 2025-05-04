import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

// FIXME: Implement rain card

// NOTE: This state serves as a sort of "router" from the generic PLAYING_EVENT
// state to a more event-specfic state. This centralizes the complexity of
// determining the appropriate state to transition to when playing an event
// card.
export const playingEventCard: RulesMachineConfig['states'] = {
  [GameState.PLAYING_EVENT]: {
    on: {},

    entry: enqueueActions(({ event, context: { game }, enqueue }) => {
      assertEvent(event, GameEvent.PLAY_EVENT)

      const { playerId, cardIdx } = event
      const card = lookup.getCardFromHand(game, playerId, cardIdx)
      const gameEventPayload = card.onPlayFromHand(game, playerId, cardIdx)

      enqueue.raise(gameEventPayload)
    }),
  },
}
