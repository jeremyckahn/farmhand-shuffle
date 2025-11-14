import { enqueueActions } from 'xstate'

import {
  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
  STANDARD_CARDS_TO_DRAW_AT_TURN_START,
} from '../../../config'
import { harvestCrop } from '../../../reducers/harvest-crop'
import { incrementPlayer } from '../../../reducers/increment-player'
import { removeTurnCardsPlayed } from '../../../reducers/remove-turn-cards-played'
import { startTurn } from '../../../reducers/start-turn'
import {
  GameEvent,
  GameState,
  isToolCardInstance,
  ShellNotificationType,
} from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { lookup } from '../../Lookup'
import { PlayerOutOfFundsError } from '../errors'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'

export const waitingForPlayerTurnActionState: RulesMachineConfig['states'] = {
  [GameState.WAITING_FOR_PLAYER_TURN_ACTION]: {
    on: {
      [GameEvent.PLAYER_RAN_OUT_OF_FUNDS]: GameState.GAME_OVER,

      [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,

      [GameEvent.PLAY_EVENT]: GameState.PLAYING_EVENT,

      [GameEvent.PLAY_WATER]: GameState.PLAYER_WATERING_CROP,

      [GameEvent.PLAY_TOOL]: GameState.PLAYING_TOOL,

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

    entry: enqueueActions(({ event, context, context: { game }, enqueue }) => {
      {
        try {
          switch (event.type) {
            case GameEvent.START_TURN: {
              context = {
                ...context,
                cardsToDrawAtTurnStart: STANDARD_CARDS_TO_DRAW_AT_TURN_START,
              }
              const previousTurnGameState = game

              game = incrementPlayer(game)
              const { currentPlayerId } = game
              assertCurrentPlayer(currentPlayerId)

              const previousTurnStateForCurrentPlayer =
                previousTurnGameState.table.players[currentPlayerId]

              for (const turnCardPlayed of previousTurnStateForCurrentPlayer.cardsPlayedDuringTurn) {
                if (isToolCardInstance(turnCardPlayed)) {
                  context =
                    turnCardPlayed.onStartFollowingTurn?.(context) ?? context
                }
              }

              context = {
                ...context,
                eventCardsThatCanBePlayed:
                  EVENT_CARDS_THAT_CAN_BE_PLAYED_PER_TURN,
              }

              game = startTurn(
                game,
                currentPlayerId,
                context.cardsToDrawAtTurnStart
              )

              break
            }

            case GameEvent.OPERATION_ABORTED: {
              const { currentPlayerId } = game
              assertCurrentPlayer(currentPlayerId)

              game = removeTurnCardsPlayed(game, currentPlayerId, 1)

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

        enqueue.assign({
          ...context,
          game,
        })
      }
    }),

    exit: enqueueActions(({ event, context: { game }, enqueue }) => {
      {
        game = recordCardPlayEvents(game, event)

        enqueue.assign({ game })
      }
    }),
  },
}
