import { assertEvent, enqueueActions } from 'xstate'

import { addCropToField } from '../../../reducers/add-crop-to-field'
import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { GameEvent, GameState } from '../../../types'
import { factory } from '../../Factory'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const plantingCropState: RulesMachineConfig['states'] = {
  [GameState.PLANTING_CROP]: {
    on: {
      [GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION]:
        GameState.WAITING_FOR_PLAYER_TURN_ACTION,

      [GameEvent.PROMPT_BOT_FOR_TURN_ACTION]:
        GameState.PERFORMING_BOT_TURN_ACTION,

      [GameEvent.OPERATION_ABORTED]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(
      ({ event, context: { game, cropsToPlayDuringBotTurn }, enqueue }) => {
        assertEvent(event, GameEvent.PLAY_CROP)

        const { playerId, cardIdx } = event

        try {
          const card = lookup.getCropFromHand(game, playerId, cardIdx)
          const playedCrop = factory.buildPlayedCrop(card)

          game = addCropToField(game, playerId, playedCrop)
          game = moveFromHandToDiscardPile(game, playerId, cardIdx)

          const { currentPlayerId, sessionOwnerPlayerId } = game

          if (cropsToPlayDuringBotTurn > 0) {
            cropsToPlayDuringBotTurn--
          }

          if (currentPlayerId === sessionOwnerPlayerId) {
            enqueue.raise({ type: GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION })
          } else {
            enqueue.raise({ type: GameEvent.PROMPT_BOT_FOR_TURN_ACTION })
          }
        } catch (e) {
          console.error(e)
          enqueue.raise({ type: GameEvent.OPERATION_ABORTED })

          return
        }

        enqueue.assign({ game, cropsToPlayDuringBotTurn })
      }
    ),
  },
}
