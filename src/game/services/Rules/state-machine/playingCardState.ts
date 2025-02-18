import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

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
