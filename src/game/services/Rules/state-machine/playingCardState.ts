import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

// NOTE: This state serves as a sort of "router" from the generic PLAYING_CARD
// state to a more card-specfic state. This centralizes the complexity of
// determining the appropriate state to transition to when playing a card.
export const playingCardState: RulesMachineConfig['states'] = {
  [GameState.PLAYING_CARD]: {
    on: {
      [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,

      [GameEvent.PLAY_WATER]: GameState.PLAYER_WATERING_CROP,
    },

    entry: enqueueActions(({ event, context: { game }, enqueue }) => {
      assertEvent(event, GameEvent.PLAY_CARD)

      const { playerId, cardIdx } = event
      const card = lookup.getCardFromHand(game, playerId, cardIdx)
      const gameEventPayload = card.onPlayFromHand(game, playerId, cardIdx)

      enqueue.raise(gameEventPayload)
    }),
  },
}
