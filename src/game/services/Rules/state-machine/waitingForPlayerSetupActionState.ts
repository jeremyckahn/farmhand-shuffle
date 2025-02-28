import { assertEvent, enqueueActions } from 'xstate'

import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import { GameEvent, GameState } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'

import { RulesMachineConfig } from './types'

export const waitingForPlayerSetupActionState: RulesMachineConfig['states'] = {
  [GameState.WAITING_FOR_PLAYER_SETUP_ACTION]: {
    on: {
      [GameEvent.PROMPT_BOT_FOR_SETUP_ACTION]:
        GameState.PERFORMING_BOT_SETUP_ACTION,

      [GameEvent.PLAY_CROP]: {
        actions: enqueueActions(
          ({ event, context: { game, cropsToPlayDuringBotTurn }, enqueue }) => {
            assertEvent(event, GameEvent.PLAY_CROP)
            const { cardIdx, playerId } = event

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            game = moveCropFromHandToField(game, playerId, cardIdx)
            enqueue.assign({ game, cropsToPlayDuringBotTurn })
          }
        ),
      },
    },
  },
}
