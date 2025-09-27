import { enqueueActions } from 'xstate'

import { EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN } from '../../../config'
import { harvestCrop } from '../../../reducers/harvest-crop'
import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import { GameEvent, GameState, ShellNotificationType } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { lookup } from '../../Lookup'
import { PlayerOutOfFundsError } from '../errors'

import { RulesMachineConfig } from './types'

export const waitingForPlayerTurnActionState: RulesMachineConfig['states'] = {
  [GameState.WAITING_FOR_PLAYER_TURN_ACTION]: {
    on: {
      [GameEvent.PLAYER_RAN_OUT_OF_FUNDS]: GameState.GAME_OVER,

      [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,

      [GameEvent.PLAY_WATER]: GameState.PLAYER_WATERING_CROP,

      [GameEvent.PLAY_EVENT]: GameState.PLAYING_EVENT,

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

            triggerNotification({
              type: ShellNotificationType.CROP_HARVESTED,
              payload: {
                cropHarvested: playedCrop.instance,
              },
            })

            enqueue.assign({ game })
          }
        ),
      },
    },

    entry: enqueueActions(
      ({ event, context: { eventCardsThatCanBePlayed, game }, enqueue }) => {
        {
          try {
            switch (event.type) {
              case GameEvent.START_TURN: {
                game = incrementPlayer(game)
                const { currentPlayerId } = game
                assertCurrentPlayer(currentPlayerId)

                eventCardsThatCanBePlayed =
                  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN
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

          enqueue.assign({ eventCardsThatCanBePlayed, game })
        }
      }
    ),
  },
}
