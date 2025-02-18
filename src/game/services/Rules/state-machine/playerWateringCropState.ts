import { enqueueActions } from 'xstate'

import { moveFromHandToDiscardPile } from '../../../reducers/move-from-hand-to-discard-pile'
import { updatePlayedCrop } from '../../../reducers/update-played-crop'
import { GameEvent, GameState, IPlayedCrop } from '../../../types'

import { RulesMachineConfig } from './types'

export const playerWateringCropState: RulesMachineConfig['states'] = {
  [GameState.PLAYER_WATERING_CROP]: {
    on: {
      [GameEvent.SELECT_CROP_TO_WATER]:
        GameState.WAITING_FOR_PLAYER_TURN_ACTION,

      // FIXME: Use this in the UI
      [GameEvent.OPERATION_ABORTED]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    exit: enqueueActions(({ event, context: { game }, enqueue }) => {
      switch (event.type) {
        case GameEvent.SELECT_CROP_TO_WATER: {
          try {
            const { playerId, waterCardInHandIdx, cropIdxInFieldToWater } =
              event

            const playedCrop =
              game.table.players[playerId].field.crops[cropIdxInFieldToWater]

            const newPlayedCrop: IPlayedCrop = {
              ...playedCrop,
              wasWateredTuringTurn: true,
              waterCards: playedCrop.waterCards + 1,
            }

            game = updatePlayedCrop(
              game,
              playerId,
              cropIdxInFieldToWater,
              newPlayedCrop
            )

            game = moveFromHandToDiscardPile(game, playerId, waterCardInHandIdx)
          } catch (e) {
            console.error(e)

            return
          }

          break
        }

        default:
      }

      enqueue.assign({ game })
    }),
  },
}
