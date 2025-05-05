import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { updateGame } from '../../reducers/update-game'
import { factory } from '../../services/Factory'
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
                    waterCards: 1,
                  },
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
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
                    waterCards: 0,
                  },
                  undefined,
                  {
                    ...factory.buildPlayedCrop(stubCarrot),
                    waterCards: 3,
                  },
                ],
              },
            },
          },
        },
      })

      const updatedGame = rain.applyEffect(game)

      expect(
        updatedGame.table.players[stubPlayer1.id].field.crops[1]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredTuringTurn: true,
        waterCards: 2,
      })
      expect(
        updatedGame.table.players[stubPlayer1.id].field.crops[2]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredTuringTurn: true,
        waterCards: 3,
      })

      expect(
        updatedGame.table.players[stubPlayer2.id].field.crops[0]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredTuringTurn: true,
        waterCards: 1,
      })
      expect(
        updatedGame.table.players[stubPlayer2.id].field.crops[2]
      ).toMatchObject<Partial<IPlayedCrop>>({
        wasWateredTuringTurn: true,
        waterCards: 4,
      })
    })
  })
})
