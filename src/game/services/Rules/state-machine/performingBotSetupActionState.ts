import { assertEvent, enqueueActions } from 'xstate'

import { randomNumber } from '../../../../services/RandomNumber'
import { BOT_ACTION_DELAY } from '../../../config'
import { incrementPlayer } from '../../../reducers/increment-player'
import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import { GameEvent, GameState, GameStateGuard } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { botLogic } from '../../BotLogic'
import { lookup } from '../../Lookup'

import { RulesMachineConfig } from './types'

export const performingBotSetupActionState: RulesMachineConfig['states'] = {
  [GameState.PERFORMING_BOT_SETUP_ACTION]: {
    on: {
      [GameEvent.START_TURN]: {
        target: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
        guard: GameStateGuard.HAVE_PLAYERS_COMPLETED_SETUP,
      },

      [GameEvent.PROMPT_BOT_FOR_SETUP_ACTION]: {
        actions: enqueueActions(
          ({ event, context: { game, cropsToPlayDuringBotTurn }, enqueue }) => {
            assertEvent(event, GameEvent.PROMPT_BOT_FOR_SETUP_ACTION)

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            const hasBotCompletedSetup =
              game.table.players[currentPlayerId].field.crops.length > 0 &&
              cropsToPlayDuringBotTurn === 0

            if (hasBotCompletedSetup) {
              // NOTE: Returns control to the player
              enqueue.raise({
                type: GameEvent.START_TURN,
              })
            } else {
              if (cropsToPlayDuringBotTurn === 0) {
                cropsToPlayDuringBotTurn = botLogic.getNumberOfCropCardsToPlay(
                  game,
                  currentPlayerId,
                  {
                    minimumCropsToPlay: 1,
                  }
                )
              }

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
            }

            enqueue.assign({ game, cropsToPlayDuringBotTurn })
          }
        ),
      },

      [GameEvent.PLAY_CROP]: {
        actions: enqueueActions(
          ({ event, context: { game, cropsToPlayDuringBotTurn }, enqueue }) => {
            assertEvent(event, GameEvent.PLAY_CROP)
            const { cardIdx, playerId } = event

            const { currentPlayerId } = game
            assertCurrentPlayer(currentPlayerId)

            game = moveCropFromHandToField(game, playerId, cardIdx)
            cropsToPlayDuringBotTurn--

            enqueue.raise({
              type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
            })
            enqueue.assign({ game, cropsToPlayDuringBotTurn })
          }
        ),
      },
    },

    entry: enqueueActions(({ context: { game }, enqueue }) => {
      const { currentPlayerId } = game
      assertCurrentPlayer(currentPlayerId)

      game = incrementPlayer(game)

      enqueue.raise({ type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION })
      enqueue.assign({ game })
    }),
  },
}
