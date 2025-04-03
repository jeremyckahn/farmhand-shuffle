import { enqueueActions } from 'xstate'

import { randomNumber } from '../../../../services/RandomNumber'
import { BOT_ACTION_DELAY } from '../../../config'
import { incrementPlayer } from '../../../reducers/increment-player'
import { startTurn } from '../../../reducers/start-turn'
import { GameEvent, GameState } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { botLogic } from '../../BotLogic'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const performingBotTurnActionState: RulesMachineConfig['states'] = {
  [GameState.PERFORMING_BOT_TURN_ACTION]: {
    on: {
      [GameEvent.PLAY_CROP]: GameState.PLANTING_CROP,

      [GameEvent.PLAY_WATER]: GameState.PERFORMING_BOT_CROP_WATERING,

      [GameEvent.HARVEST_CROP]: GameState.PERFORMING_BOT_CROP_HARVESTING,

      [GameEvent.START_TURN]: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
    },

    entry: enqueueActions(
      ({
        event,
        context: {
          game,
          cropsToPlayDuringBotTurn,
          fieldCropIndicesToWaterDuringBotTurn,
          cropCardIndicesToHarvest,
        },
        enqueue,
      }) => {
        {
          switch (event.type) {
            case GameEvent.START_TURN: {
              game = incrementPlayer(game)
              assertCurrentPlayer(game.currentPlayerId)

              game = startTurn(game, game.currentPlayerId)
              assertCurrentPlayer(game.currentPlayerId)

              cropsToPlayDuringBotTurn = botLogic.getNumberOfCropCardsToPlay(
                game,
                game.currentPlayerId
              )

              break
            }

            default:
          }

          const { currentPlayerId } = game
          assertCurrentPlayer(currentPlayerId)

          const areCropsToPlay = cropsToPlayDuringBotTurn > 0
          let areWaterCardsToPlay = false
          let areCropsToHarvest = false

          if (areCropsToPlay) {
            const cropIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
              game,
              currentPlayerId
            )
            const cardIdx = randomNumber.chooseElement(cropIdxsInPlayerHand)

            enqueue.raise(
              {
                type: GameEvent.PLAY_CROP,
                playerId: currentPlayerId,
                cardIdx,
              },
              { delay: BOT_ACTION_DELAY }
            )
          } else {
            fieldCropIndicesToWaterDuringBotTurn =
              botLogic.getCropCardIndicesToWater(game, currentPlayerId)

            areWaterCardsToPlay =
              fieldCropIndicesToWaterDuringBotTurn.length > 0

            if (areWaterCardsToPlay) {
              enqueue.raise(
                {
                  type: GameEvent.PLAY_WATER,
                  cardIdx: fieldCropIndicesToWaterDuringBotTurn[0],
                  playerId: currentPlayerId,
                },
                {
                  delay: BOT_ACTION_DELAY,
                }
              )
            } else {
              cropCardIndicesToHarvest = botLogic.getCropCardIndicesToHarvest(
                game,
                currentPlayerId
              )

              areCropsToHarvest = cropCardIndicesToHarvest.length > 0

              if (areCropsToHarvest) {
                enqueue.raise(
                  {
                    type: GameEvent.HARVEST_CROP,
                    playerId: currentPlayerId,
                    cropIdxInFieldToHarvest: cropCardIndicesToHarvest[0],
                  },
                  {
                    delay: BOT_ACTION_DELAY,
                  }
                )
              }
            }
          }

          if (!areCropsToPlay && !areWaterCardsToPlay && !areCropsToHarvest) {
            // NOTE: Returns control back to the player
            enqueue.raise({
              type: GameEvent.START_TURN,
            })
          }

          enqueue.assign({
            game,
            cropsToPlayDuringBotTurn,
            fieldCropIndicesToWaterDuringBotTurn,
            cropCardIndicesToHarvest,
          })
        }
      }
    ),
  },
}
