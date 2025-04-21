import { enqueueActions } from 'xstate'

import { harvestCrop } from '../../../reducers/harvest-crop'
import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import { GameEvent, GameState, ShellNotification } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { lookup } from '../../Lookup'
import { PlayerOutOfFundsError } from '../errors'

import { RulesMachineConfig } from './types'

export const waitingForPlayerTurnActionState: RulesMachineConfig['states'] = {
  [GameState.WAITING_FOR_PLAYER_TURN_ACTION]: {
    on: {
      [GameEvent.PLAYER_RAN_OUT_OF_FUNDS]: GameState.GAME_OVER,

      [GameEvent.PLAY_CARD]: GameState.PLAYING_CARD,

      [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,

      [GameEvent.PLAY_WATER]: GameState.PLAYER_WATERING_CROP,

      [GameEvent.START_TURN]: GameState.PERFORMING_BOT_TURN_ACTION,

      [GameEvent.HARVEST_CROP]: {
        actions: enqueueActions(
          ({
            event,
            enqueue,
            context: {
              game,
              shell: { triggerNotification },
            },
          }) => {
            const { playerId, cropIdxInFieldToHarvest } = event

            const playedCrop = lookup.getPlayedCropFromField(
              game,
              playerId,
              cropIdxInFieldToHarvest
            )

            game = harvestCrop(game, playerId, cropIdxInFieldToHarvest)

            triggerNotification(ShellNotification.CROP_HARVESTED, {
              cropHarvested: playedCrop.instance,
            })

            enqueue.assign({ game })
          }
        ),
      },
    },

    entry: enqueueActions(({ event, context: { game }, enqueue }) => {
      {
        try {
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
        } catch (error) {
          if (error instanceof PlayerOutOfFundsError) {
            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            enqueue.raise({
              type: GameEvent.PLAYER_RAN_OUT_OF_FUNDS,
              playerId: currentPlayerId,
            })
          } else {
            console.error(error)
          }
        }

        enqueue.assign({ game })
      }
    }),
  },
}
