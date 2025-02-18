import { enqueueActions } from 'xstate'

import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import { GameEvent, GameState } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'

import { RulesMachineConfig } from './types'

export const waitingForPlayerTurnActionState: RulesMachineConfig['states'] = {
  [GameState.WAITING_FOR_PLAYER_TURN_ACTION]: {
    on: {
      [GameEvent.PLAY_CARD]: GameState.PLAYING_CARD,

      [GameEvent.START_TURN]: GameState.PERFORMING_BOT_TURN_ACTION,
    },

    entry: enqueueActions(({ event, context: { game }, enqueue }) => {
      {
        switch (event.type) {
          case GameEvent.START_TURN: {
            game = incrementPlayer(game)
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            game = startTurn(game, currentPlayerId)

            break
          }

          default:
        }

        enqueue.assign({ game })
      }
    }),
  },
}
