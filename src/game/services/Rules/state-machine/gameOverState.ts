import { assertEvent, enqueueActions } from 'xstate'

import { GameEvent, GameState } from '../../../types'
import { factory } from '../../Factory'
import { createGameStateMachineContext } from '../createGameStateMachineContext'
import { GameStateCorruptError } from '../errors'

import { RulesMachineConfig } from './types'

export const gameOverState: RulesMachineConfig['states'] = {
  [GameState.GAME_OVER]: {
    on: {
      [GameEvent.INIT]: {
        actions: enqueueActions(({ event, enqueue }) => {
          assertEvent(event, GameEvent.INIT)

          const { playerSeeds, userPlayerId } = event
          const game = factory.buildGameForSession(playerSeeds, userPlayerId)
          const initialContext = createGameStateMachineContext()

          enqueue.assign({ ...initialContext, game })
          enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION })
        }),
      },

      [GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]:
        GameState.WAITING_FOR_PLAYER_SETUP_ACTION,
    },

    entry: enqueueActions(({ event, enqueue, context: { game } }) => {
      assertEvent(event, GameEvent.PLAYER_RAN_OUT_OF_FUNDS)

      const winner = Object.keys(game.table.players).find(
        playerId => playerId !== event.playerId
      )

      if (winner === undefined) {
        throw new GameStateCorruptError('Winner could not be determined')
      }

      enqueue.assign({ winner })
    }),
  },
}
