import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { updateMatch } from '../../reducers/update-match'
import { factory } from '../../services/Factory'
import { createMatchStateMachineContext } from '../../services/Rules/createMatchStateMachineContext'
import { IPlayedCrop, ShellNotificationType } from '../../types'

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
                crops: [
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
                crops: [
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

      const player1Crop1 = player1.field.crops[1]
      const player1Crop2 = player1.field.crops[2]
      const player1Crop3 = player1.field.crops[3]
      const player2Crop0 = player2.field.crops[0]
      const player2Crop2 = player2.field.crops[2]

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
  })
})
