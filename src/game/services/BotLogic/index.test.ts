import { randomNumber } from '../../../services/RandomNumber'
import {
  stubCarrot,
  stubRain,
  stubShovel,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { carrot, instantiate, water } from '../../cards'
import { STANDARD_FIELD_SIZE } from '../../config'
import { updatePlayer } from '../../reducers/update-player'
import { IField, IPlayedCrop, IPlayer } from '../../types'

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
        hand: [instantiate(carrot)],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 1,
        hand: [instantiate(carrot)],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 1,
        hand: [instantiate(carrot)],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 0,
        hand: [instantiate(carrot), instantiate(carrot)],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 1,
      },

      {
        rngStub: 1,
        hand: [instantiate(carrot), instantiate(carrot)],
        fieldCrops: [],
        minimumCropsToPlay: 1,
        expectedResult: 2,
      },

      {
        rngStub: 1,
        hand: [instantiate(carrot), instantiate(carrot)],
        fieldCrops: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE - 1).fill({
          instance: instantiate(carrot),
          wasWateredDuringTurn: false,
          waterCards: 0,
        }),
        minimumCropsToPlay: 1,
        expectedResult: 1, // Only room for one crop in field
      },

      {
        rngStub: 1,
        hand: [instantiate(carrot)],
        fieldCrops: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE).fill({
          instance: instantiate(carrot),
          wasWateredDuringTurn: false,
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
    it.each<{
      hand: IPlayer['hand']
      fieldCrops: IField['crops']
      expectedResult: number[]
    }>([
      { hand: [], fieldCrops: [], expectedResult: [] },

      {
        hand: [instantiate(water)],
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: 0,
          },
        ],
        expectedResult: [0],
      },

      {
        hand: [],
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: 0,
          },
        ],
        expectedResult: [],
      },

      {
        hand: [instantiate(water)],
        fieldCrops: [],
        expectedResult: [],
      },

      {
        hand: [instantiate(water), instantiate(water)],
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature,
          },
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature,
          },
        ],
        expectedResult: [1], // The crops with enough water are skipped
      },

      {
        hand: [instantiate(water), instantiate(water)],
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature,
          },
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
        ],
        expectedResult: [0, 2], // The crops with enough water are skipped
      },

      {
        hand: [instantiate(water), instantiate(water)],
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: true,
            waterCards: carrot.waterToMature - 1,
          },
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
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

  describe('getCropCardIndicesToHarvest', () => {
    it.each<{
      fieldCrops: IField['crops']
      expectedResult: number[]
    }>([
      { fieldCrops: [], expectedResult: [] },

      {
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature,
          },
        ],
        expectedResult: [0],
      },
      {
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
        ],
        expectedResult: [],
      },

      {
        fieldCrops: [
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature,
          },
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature - 1,
          },
          {
            instance: instantiate(carrot),
            wasWateredDuringTurn: false,
            waterCards: carrot.waterToMature,
          },
        ],
        expectedResult: [0, 2],
      },
    ])(
      'returns indices of crop cards that are ready to harvest for crops $fieldCrops',
      ({ fieldCrops, expectedResult }) => {
        let game = stubGame()
        game = updatePlayer(game, stubPlayer1.id, {
          field: {
            crops: fieldCrops,
          },
        })

        const result = botLogic.getCropCardIndicesToHarvest(
          game,
          stubPlayer1.id
        )

        expect(result).toEqual(expectedResult)
      }
    )
  })

  describe('getNumberOfEventCardsToPlay', () => {
    it.each([
      { hand: [], expectedResult: 0 },
      { hand: [stubRain], expectedResult: 1 },
      { hand: [stubRain, stubRain], expectedResult: 1 },
    ])(
      'chooses a number of event cards to play for hand $hand and rngStub $rngStub',
      ({ hand, expectedResult }) => {
        let game = stubGame()
        game = updatePlayer(game, stubPlayer1.id, {
          hand,
        })

        const result = botLogic.getNumberOfEventCardsToPlay(
          game,
          stubPlayer1.id
        )

        expect(result).toBe(expectedResult)
      }
    )
  })

  describe('getNumberOfToolCardsToPlay', () => {
    it.each([
      { hand: [], rngStub: 0.1, expectedResult: 0 },
      { hand: [stubShovel], rngStub: 0.4, expectedResult: 0 },
      { hand: [stubShovel], rngStub: 0.5, expectedResult: 1 },
      { hand: [stubShovel, stubShovel], rngStub: 0, expectedResult: 0 },
      { hand: [stubShovel, stubShovel], rngStub: 0.5, expectedResult: 1 },
      { hand: [stubShovel, stubShovel], rngStub: 1, expectedResult: 2 },
    ])(
      'chooses a number of event cards to play for hand $hand and rngStub $rngStub',
      ({ hand, rngStub, expectedResult }) => {
        vi.spyOn(randomNumber, 'generate').mockReturnValue(rngStub)

        let game = stubGame()
        game = updatePlayer(game, stubPlayer1.id, {
          hand,
        })

        const result = botLogic.getNumberOfToolCardsToPlay(game, stubPlayer1.id)

        expect(result).toBe(expectedResult)
      }
    )
  })

  describe('getEventCardIndexToPlay', () => {
    it.each([
      { hand: [], rngStub: 0, expectedResult: undefined },
      { hand: [], rngStub: 1, expectedResult: undefined },
      { hand: [stubRain], rngStub: 0, expectedResult: 0 },
      {
        hand: [stubCarrot, stubRain, stubWater, stubRain],
        rngStub: 0,
        expectedResult: 1,
      },
      {
        hand: [stubCarrot, stubRain, stubWater, stubRain],
        rngStub: 1,
        expectedResult: 3,
      },
    ])(
      'chooses an event card index to play for hand $hand and rngStub $rngStub',
      ({ hand, rngStub, expectedResult }) => {
        vi.spyOn(randomNumber, 'generate').mockReturnValue(rngStub)

        let game = stubGame()
        game = updatePlayer(game, stubPlayer1.id, {
          hand,
        })

        const result = botLogic.getEventCardIndexToPlay(game, stubPlayer1.id)

        expect(result).toBe(expectedResult)
      }
    )
  })

  describe('getToolCardIndexToPlay', () => {
    it.each([
      { hand: [], rngStub: 0, expectedResult: undefined },
      { hand: [], rngStub: 1, expectedResult: undefined },
      { hand: [stubShovel], rngStub: 0, expectedResult: 0 },
      {
        hand: [stubCarrot, stubShovel, stubWater, stubShovel],
        rngStub: 0,
        expectedResult: 1,
      },
      {
        hand: [stubCarrot, stubRain, stubWater, stubShovel],
        rngStub: 1,
        expectedResult: 3,
      },
    ])(
      'chooses a tool card index to play for hand $hand and rngStub $rngStub',
      ({ hand, rngStub, expectedResult }) => {
        vi.spyOn(randomNumber, 'generate').mockReturnValue(rngStub)

        let game = stubGame()
        game = updatePlayer(game, stubPlayer1.id, {
          hand,
        })

        const result = botLogic.getToolCardIndexToPlay(game, stubPlayer1.id)

        expect(result).toBe(expectedResult)
      }
    )
  })
})
