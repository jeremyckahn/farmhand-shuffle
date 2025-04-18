import { assertEvent, enqueueActions } from 'xstate'
import { funAnimalName } from 'fun-animal-names'

import { GameEvent, GameState } from '../../../types'
import { factory } from '../../Factory'

import { RulesMachineConfig } from './types'

export const gameOverState: RulesMachineConfig['states'] = {
  [GameState.GAME_OVER]: {
    on: {
      [GameEvent.INIT]: {
        actions: enqueueActions(({ event, enqueue }) => {
          assertEvent(event, GameEvent.INIT)

          const { playerSeeds, userPlayerId } = event
          const game = factory.buildGameForSession(playerSeeds, userPlayerId)

          enqueue.assign({ game })
          enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION })
        }),
      },

      [GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]:
        GameState.WAITING_FOR_PLAYER_SETUP_ACTION,
    },

    // FIXME: Test this
    entry: enqueueActions(({ event }) => {
      assertEvent(event, GameEvent.PLAYER_RAN_OUT_OF_FUNDS)

      const { playerId } = event

      // FIXME: Present this to the player
      console.log(`Game over! Loser: ${funAnimalName(playerId)}`)
    }),
  },
}
