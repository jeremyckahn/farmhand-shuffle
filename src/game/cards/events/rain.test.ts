import { stubCarrot, stubSprinkler } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { updateMatch } from '../../reducers/update-match'
import { factory } from '../../services/Factory'
import { createMatchStateMachineContext } from '../../services/Rules/createMatchStateMachineContext'
import { IPlayedCrop, IPlayedTool, ShellNotificationType } from '../../types'

import { rain } from './rain'

describe('rain card', () => {
  describe('applyEffect', () => {
    it('should increment water cards for all crops in all players fields and show a notification', () => {
      let match = stubMatch()

      match = updateMatch(match, {
        table: {
          ...stubMatch().table,
          players: {
            [stubPlayer1.id]: {
              ...stubPlayer1,
              field: {
                cards: [
                  undefined,
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
                    wasWateredDuringTurn: false,
                    waterCards: 1,
                  },
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
                    wasWateredDuringTurn: false,
                    waterCards: 2,
                  },
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
                    wasWateredDuringTurn: true,
                    waterCards: 2,
                  },
                ],
              },
            },
            [stubPlayer2.id]: {
              ...stubPlayer2,
              field: {
                cards: [
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
                    wasWateredDuringTurn: false,
                    waterCards: 0,
                  },
                  undefined,
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
                    wasWateredDuringTurn: true,
                    waterCards: 3,
                  },
                ],
              },
            },
          },
        },
      })

      const triggerNotification = vi.fn()
      const { match: updatedMatch } = rain.applyEffect({
        ...createMatchStateMachineContext(),
        match,
        shell: {
          triggerNotification,
        },
      })

      const player1 = updatedMatch.table.players[stubPlayer1.id]
      const player2 = updatedMatch.table.players[stubPlayer2.id]

      if (!player1 || !player2) {
        throw new Error('Player not found in test setup')
      }

      const player1Crop1 = player1.field.cards[1]
      const player1Crop2 = player1.field.cards[2]
      const player1Crop3 = player1.field.cards[3]
      const player2Crop0 = player2.field.cards[0]
      const player2Crop2 = player2.field.cards[2]

      if (
        !player1Crop1 ||
        !player1Crop2 ||
        !player1Crop3 ||
        !player2Crop0 ||
        !player2Crop2
      ) {
        throw new Error('Crop not found in test setup')
      }

      expect(player1Crop1).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 2,
      })
      expect(player1Crop2).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 3,
      })
      expect(player1Crop3).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 2,
      })

      expect(player2Crop0).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 1,
      })
      expect(player2Crop2).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 4,
      })

      expect(triggerNotification).toHaveBeenCalledWith({
        type: ShellNotificationType.ALL_CROPS_WATERED,
        payload: {},
      })
    })

    it('should not increment water cards for planted tools', () => {
      let match = stubMatch()

      match = updateMatch(match, {
        table: {
          ...stubMatch().table,
          players: {
            [stubPlayer1.id]: {
              ...stubPlayer1,
              field: {
                cards: [
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
                    wasWateredDuringTurn: false,
                    waterCards: 0,
                  },
                  {
                    instance: stubSprinkler,
                  },
                  {
                    instance: stubSprinkler,
                  },
                ],
              },
            },
          },
        },
      })

      const { match: updatedMatch } = rain.applyEffect({
        ...createMatchStateMachineContext(),
        match,
      })

      const player1 = updatedMatch.table.players[stubPlayer1.id]

      if (!player1) {
        throw new Error('Player not found in test setup')
      }

      const player1PlantedCard0 = player1.field.cards[0]
      const player1PlantedCard1 = player1.field.cards[1]
      const player1PlantedCard2 = player1.field.cards[2]

      if (
        !player1PlantedCard0 ||
        !player1PlantedCard1 ||
        !player1PlantedCard2
      ) {
        throw new Error('Crop not found in test setup')
      }

      expect(player1PlantedCard0).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 1,
      })
      expect(player1PlantedCard1).toMatchObject<Partial<IPlayedTool>>({
        instance: stubSprinkler,
      })
      expect(player1PlantedCard2).toMatchObject<Partial<IPlayedTool>>({
        instance: stubSprinkler,
      })
    })
  })
})
