import { assertEvent, enqueueActions } from 'xstate'

import { randomNumber } from '../../../../services/RandomNumber'
import { BOT_ACTION_DELAY } from '../../../config'
import { incrementPlayer } from '../../../reducers/increment-player'
import { moveCropFromHandToField } from '../../../reducers/move-crop-from-hand-to-field'
import { MatchEvent, MatchState, MatchStateGuard } from '../../../types'
import { assertCurrentPlayer } from '../../../types/guards'
import { botLogic } from '../../BotLogic'
import { lookup } from '../../Lookup'
import { MatchStateCorruptError } from '../errors'

import { recordCardPlayEvents } from './reducers'
import { RulesMachineConfig } from './types'

export const performingBotSetupActionState: RulesMachineConfig['states'] = {
  [MatchState.PERFORMING_BOT_SETUP_ACTION]: {
    on: {
      [MatchEvent.START_TURN]: {
        target: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        guard: MatchStateGuard.HAVE_PLAYERS_COMPLETED_SETUP,
      },

      [MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION]: {
        actions: enqueueActions(
          ({
            event,
            context: {
              match,
              botState,
              botState: { cropsToPlayDuringTurn },
            },
            enqueue,
          }) => {
            assertEvent(event, MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION)

            const { currentPlayerId } = match
            assertCurrentPlayer(currentPlayerId)

            const player = match.table.players[currentPlayerId]

            if (!player) {
              throw new Error(`Player not found: ${currentPlayerId}`)
            }

            const hasBotCompletedSetup =
              player.field.crops.length > 0 && cropsToPlayDuringTurn === 0

            if (hasBotCompletedSetup) {
              // NOTE: Returns control to the player
              enqueue.raise({
                type: MatchEvent.START_TURN,
              })
            } else {
              if (cropsToPlayDuringTurn === 0) {
                cropsToPlayDuringTurn = botLogic.getNumberOfCropCardsToPlay(
                  match,
                  currentPlayerId,
                  {
                    minimumCropsToPlay: 1,
                  }
                )
              }

              const cropIdxsInPlayerHand = lookup.findCropIndexesInPlayerHand(
                match,
                currentPlayerId
              )
              const cardIdx = randomNumber.chooseElement(cropIdxsInPlayerHand)

              if (cardIdx === undefined) {
                throw new MatchStateCorruptError(
                  `Expected crops in hand but none were found for bot player ${currentPlayerId}`
                )
              }

              enqueue.raise(
                {
                  type: MatchEvent.PLAY_CROP,
                  playerId: currentPlayerId,
                  cardIdx,
                },
                { delay: BOT_ACTION_DELAY }
              )
            }

            enqueue.assign({
              match,
              botState: {
                ...botState,
                cropsToPlayDuringTurn,
              },
            })
          }
        ),
      },

      [MatchEvent.PLAY_CROP]: {
        actions: enqueueActions(
          ({
            event,
            context: {
              match,
              botState,
              botState: { cropsToPlayDuringTurn },
            },
            enqueue,
          }) => {
            assertEvent(event, MatchEvent.PLAY_CROP)
            const { cardIdx, playerId } = event

            const { currentPlayerId } = match
            assertCurrentPlayer(currentPlayerId)

            match = recordCardPlayEvents(match, event)
            match = moveCropFromHandToField(match, playerId, cardIdx)
            cropsToPlayDuringTurn--

            enqueue.raise({
              type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION,
            })
            enqueue.assign({
              match,
              botState: {
                ...botState,
                cropsToPlayDuringTurn,
              },
            })
          }
        ),
      },
    },

    entry: enqueueActions(({ context: { match }, enqueue }) => {
      const { currentPlayerId } = match
      assertCurrentPlayer(currentPlayerId)

      match = incrementPlayer(match)

      enqueue.raise({ type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION })
      enqueue.assign({ match })
    }),
  },
}
