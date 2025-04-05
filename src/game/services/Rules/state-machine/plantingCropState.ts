import { assertEvent, enqueueActions } from 'xstate'

import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import { GameEvent, GameState } from '../../../types'
import { defaultSelectedWaterCardInHandIdx } from '../constants'

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
          game = moveCropFromHandToField(game, playerId, cardIdx)

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

    exit: enqueueActions(
      ({ event, context: { selectedWaterCardInHandIdx }, enqueue }) => {
        switch (event.type) {
          case GameEvent.OPERATION_ABORTED: {
            selectedWaterCardInHandIdx = defaultSelectedWaterCardInHandIdx
            break
          }

          default:
        }

        enqueue.assign({ selectedWaterCardInHandIdx })
      }
    ),
  },
}
