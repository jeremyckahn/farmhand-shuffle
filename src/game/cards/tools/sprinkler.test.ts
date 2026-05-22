import {
  stubCarrot,
  stubPumpkin,
  stubSprinkler,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { updatePlayer } from '../../reducers/update-player'
import { factory } from '../../services/Factory'
import { createMatchStateMachineContext } from '../../services/Rules/createMatchStateMachineContext'
import { assertCurrentPlayer, assertIsNonNullable } from '../../types/guards'

import { sprinkler } from './sprinkler'

describe('sprinkler', () => {
  describe('applyDailyEffect', () => {
    test.each([
      {
        testName: 'Happy path',
        startingFieldCards: [
          factory.buildPlayedCrop(stubCarrot),
          factory.buildPlayedTool(stubSprinkler),
          factory.buildPlayedCrop(stubPumpkin),
        ],
        resultingFieldCards: [
          {
            ...factory.buildPlayedCrop(stubCarrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          factory.buildPlayedTool(stubSprinkler),
          {
            ...factory.buildPlayedCrop(stubPumpkin),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
      },

      {
        testName: 'Out of range crop handling',
        startingFieldCards: [
          factory.buildPlayedCrop(stubCarrot),
          factory.buildPlayedCrop(stubCarrot),
          factory.buildPlayedTool(stubSprinkler),
        ],
        resultingFieldCards: [
          factory.buildPlayedCrop(stubCarrot),
          {
            ...factory.buildPlayedCrop(stubCarrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          factory.buildPlayedTool(stubSprinkler),
        ],
      },

      {
        testName: 'Surrounded by two sprinklers',
        startingFieldCards: [
          factory.buildPlayedTool(stubSprinkler),
          factory.buildPlayedCrop(stubCarrot),
          factory.buildPlayedTool(stubSprinkler),
        ],
        resultingFieldCards: [
          factory.buildPlayedTool(stubSprinkler),
          {
            ...factory.buildPlayedCrop(stubCarrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          factory.buildPlayedTool(stubSprinkler),
        ],
      },

      {
        testName: 'Adjacent sprinkler handling',
        startingFieldCards: [
          factory.buildPlayedCrop(stubCarrot),
          factory.buildPlayedTool(stubSprinkler),
          factory.buildPlayedTool(stubSprinkler),
          factory.buildPlayedCrop(stubPumpkin),
        ],
        resultingFieldCards: [
          {
            ...factory.buildPlayedCrop(stubCarrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          factory.buildPlayedTool(stubSprinkler),
          factory.buildPlayedTool(stubSprinkler),
          {
            ...factory.buildPlayedCrop(stubPumpkin),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
      },

      {
        testName: 'Empty plot handling',
        startingFieldCards: [
          factory.buildPlayedCrop(stubCarrot),
          factory.buildPlayedTool(stubSprinkler),
          undefined,
          factory.buildPlayedTool(stubSprinkler),
          factory.buildPlayedCrop(stubPumpkin),
        ],
        resultingFieldCards: [
          {
            ...factory.buildPlayedCrop(stubCarrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          factory.buildPlayedTool(stubSprinkler),
          undefined,
          factory.buildPlayedTool(stubSprinkler),
          {
            ...factory.buildPlayedCrop(stubPumpkin),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
      },
    ])(
      'waters adjacent crops: $testName',
      ({ startingFieldCards, resultingFieldCards }) => {
        let match = stubMatch()
        const { currentPlayerId } = match

        assertCurrentPlayer(currentPlayerId)

        match = updatePlayer(match, currentPlayerId, {
          field: {
            cards: startingFieldCards,
          },
        })

        const context = { ...createMatchStateMachineContext(), match }

        assertIsNonNullable(sprinkler.applyDailyEffect)

        for (let i = 0; i < startingFieldCards.length; i++) {
          const card = match.table.players[currentPlayerId]?.field.cards[i]

          if (card?.instance.id !== sprinkler.id) {
            continue
          }

          match = sprinkler.applyDailyEffect({ ...context, match }, i).match
        }

        const updatedPlayer = match.table.players[currentPlayerId]

        assertIsNonNullable(updatedPlayer)

        expect(updatedPlayer.field.cards).toEqual(resultingFieldCards)
      }
    )
  })
})
