import { randomNumber } from '../../../services/RandomNumber'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { carrot, water } from '../../cards'
import { STANDARD_FIELD_SIZE } from '../../config'
import { updatePlayer } from '../../reducers/update-player'
import { IPlayedCrop } from '../../types'

import { botLogic } from '.'

describe('BotLogicService', () => {
  describe('getNumberOfCropCardsToPlay', () => {
    it.each([
      {
        rngStub: 0,
        hand: [],
        fieldCrops: [],
        minimumCropsToPlay: 0,
        expectedResult: 0,
      },

      {
        rngStub: 0,
        hand: [carrot.id],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 1,
        hand: [carrot.id],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 1,
        hand: [carrot.id],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 0,
        hand: [carrot.id, carrot.id],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 1,
        hand: [carrot.id, carrot.id],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 2,
      },

      {
        rngStub: 1,
        hand: [carrot.id, carrot.id],
        fieldCrops: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE - 1).fill({
          id: carrot.id,
          wasWateredTuringTurn: false,
          waterCards: 0,
        }),
        minimumCropsToPlay: 1,
        expectedResult: 1, // Only room for one crop in field
      },

      {
        rngStub: 1,
        hand: [carrot.id],
        fieldCrops: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE).fill({
          id: carrot.id,
          wasWateredTuringTurn: false,
          waterCards: 0,
        }),
        minimumCropsToPlay: 1,
        expectedResult: 0, // No room for more crops in field
      },
    ])(
      'determines amount of crops to play for stable random number $rngStub, hand $hand, crops $fieldCrops, and minimumCropsToPlay $minimumCropsToPlay',
      ({ rngStub, hand, fieldCrops, minimumCropsToPlay, expectedResult }) => {
        vi.spyOn(randomNumber, 'generate').mockReturnValue(rngStub)

        let game = stubGame()
        game = updatePlayer(game, stubPlayer1.id, {
          hand,
          field: {
            crops: fieldCrops,
          },
        })

        const result = botLogic.getNumberOfCropCardsToPlay(
          game,
          stubPlayer1.id,
          {
            minimumCropsToPlay,
          }
        )

        expect(result).toBe(expectedResult)
      }
    )
  })

  describe('getCropCardIndicesToWater', () => {
    it.each([
      { hand: [], fieldCrops: [], expectedResult: [] },

      {
        hand: [water.id],
        fieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        expectedResult: [0],
      },

      {
        hand: [],
        fieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        expectedResult: [],
      },

      {
        hand: [water.id],
        fieldCrops: [],
        expectedResult: [],
      },

      {
        hand: [water.id, water.id],
        fieldCrops: [
          {
            id: carrot.id,
            wasWateredTuringTurn: false,
            waterCards: carrot.waterToMature,
          },
          {
            id: carrot.id,
            wasWateredTuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
          {
            id: carrot.id,
            wasWateredTuringTurn: false,
            waterCards: carrot.waterToMature,
          },
        ],
        expectedResult: [1], // The crops with enough water are skipped
      },

      {
        hand: [water.id, water.id],
        fieldCrops: [
          {
            id: carrot.id,
            wasWateredTuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
          {
            id: carrot.id,
            wasWateredTuringTurn: false,
            waterCards: carrot.waterToMature,
          },
          {
            id: carrot.id,
            wasWateredTuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
        ],
        expectedResult: [0, 2], // The crops with enough water are skipped
      },

      {
        hand: [water.id, water.id],
        fieldCrops: [
          {
            id: carrot.id,
            wasWateredTuringTurn: true,
            waterCards: carrot.waterToMature - 1,
          },
          {
            id: carrot.id,
            wasWateredTuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
        ],
        expectedResult: [1], // The crops that were already watered during turn are skipped
      },
    ])(
      'returns indices of crop cards that need water for hand $hand and crops $fieldCrops',
      ({ hand, fieldCrops, expectedResult }) => {
        let game = stubGame()
        game = updatePlayer(game, stubPlayer1.id, {
          hand,
          field: {
            crops: fieldCrops,
          },
        })

        const result = botLogic.getCropCardIndicesToWater(game, stubPlayer1.id)

        expect(result).toEqual(expectedResult)
      }
    )
  })
})
