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

      const p1 = updatedMatch.table.players[stubPlayer1.id]
      const p2 = updatedMatch.table.players[stubPlayer2.id]

      if (!p1 || !p2) {
        throw new Error('Player not found in test setup')
      }

      const p1c1 = p1.field.crops[1]
      const p1c2 = p1.field.crops[2]
      const p1c3 = p1.field.crops[3]
      const p2c0 = p2.field.crops[0]
      const p2c2 = p2.field.crops[2]

      if (!p1c1 || !p1c2 || !p1c3 || !p2c0 || !p2c2) {
        throw new Error('Crop not found in test setup')
      }

      expect(p1c1).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 2,
      })
      expect(p1c2).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 3,
      })
      expect(p1c3).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 2,
      })

      expect(p2c0).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 1,
      })
      expect(p2c2).toMatchObject<Partial<IPlayedCrop>>({
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
