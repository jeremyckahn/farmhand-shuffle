import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { updateGame } from '../../reducers/update-game'
import { factory } from '../../services/Factory'
import { createGameStateMachineContext } from '../../services/Rules/createGameStateMachineContext'
import { IPlayedCrop } from '../../types'

import { rain } from './rain'

describe('rain card', () => {
  describe('applyEffect', () => {
    it('should increment water cards for all crops in all players fields', () => {
      let game = stubGame()
      game = updateGame(game, {
        table: {
          ...stubGame().table,
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

      const { game: updatedGame } = rain.applyEffect({
        ...createGameStateMachineContext(),
        game,
      })

      expect(
        updatedGame.table.players[stubPlayer1.id].field.crops[1]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 2,
      })
      expect(
        updatedGame.table.players[stubPlayer1.id].field.crops[2]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 3,
      })
      expect(
        updatedGame.table.players[stubPlayer1.id].field.crops[3]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 2,
      })

      expect(
        updatedGame.table.players[stubPlayer2.id].field.crops[0]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 1,
      })
      expect(
        updatedGame.table.players[stubPlayer2.id].field.crops[2]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredDuringTurn: true,
        waterCards: 4,
      })
    })
  })
})
