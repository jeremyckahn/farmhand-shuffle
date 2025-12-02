import {
  stubCarrot,
  stubRain,
  stubShovel,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { carrot, instantiate, pumpkin, water } from '../../cards'
import { updatePlayer } from '../../reducers/update-player'
import { IMatch, IPlayer } from '../../types'
import { isPlayer } from '../../types/guards'
import { factory } from '../Factory'
import { InvalidIdError } from '../Rules/errors'

import { lookup } from '.'

const match = stubMatch()

describe('Lookup', () => {
  describe('getCardFromHand', () => {
    let mutatedMatch: IMatch
    let player1Id: IPlayer['id']

    beforeEach(() => {
      mutatedMatch = stubMatch()
      player1Id = Object.keys(mutatedMatch.table.players)[0]

      // eslint-disable-next-line functional/immutable-data
      mutatedMatch.table.players[player1Id].hand[0] = stubCarrot
    })

    test('returns card from hand', () => {
      const cardInstance = lookup.getCardFromHand(mutatedMatch, player1Id, 0)

      expect(cardInstance).toBe(stubCarrot)
    })

    test('throws an error when specified card is not in hand', () => {
      expect(() => {
        lookup.getCardFromHand(
          mutatedMatch,
          player1Id,
          mutatedMatch.table.players[player1Id].hand.length
        )
      }).toThrow()
    })
  })

  describe('getOpponentPlayerIds', () => {
    test('returns opponent player IDs', () => {
      const opponentPlayerIds = lookup.getOpponentPlayerIds(match)
      const playerIds = Object.keys(match.table.players)

      expect(opponentPlayerIds).toHaveLength(playerIds.length - 1)
      expect(opponentPlayerIds).not.toContain(match.currentPlayerId)
    })
  })

  describe('getPlayer', () => {
    test('retrieves player', () => {
      const player = lookup.getPlayer(match, match.sessionOwnerPlayerId)

      expect(isPlayer(player)).toEqual(true)
    })

    test('throws an error when unavailable player is requested', () => {
      expect(() => {
        lookup.getPlayer(match, '')
      }).toThrow(InvalidIdError)
    })
  })

  describe('findCropIndexesInDeck', () => {
    test.each([
      { deck: [], howMany: undefined, expected: [] },
      { deck: [], howMany: 1, expected: [] },
      { deck: [instantiate(carrot)], howMany: 1, expected: [0] },
      { deck: [instantiate(water)], howMany: 1, expected: [] },
      {
        deck: [instantiate(carrot), instantiate(water), instantiate(carrot)],
        howMany: 3,
        expected: [0, 2],
      },
    ])(
      'retrieves $howMany crop indices in deck ($deck)',
      ({ deck, howMany, expected }) => {
        let match = stubMatch()

        match = updatePlayer(match, stubPlayer1.id, {
          deck,
        })

        const cropIndexesInDeck = lookup.findCropIndexesInDeck(
          match,
          stubPlayer1.id,
          howMany
        )

        expect(cropIndexesInDeck).toEqual(expected)
      }
    )
  })

  describe('findCropIndexesInPlayerHand', () => {
    test.each([
      { hand: [], expected: [] },
      { hand: [instantiate(carrot)], expected: [0] },
      {
        hand: [
          instantiate(carrot),
          instantiate(water),
          instantiate(water),
          instantiate(pumpkin),
        ],
        expected: [0, 3],
      },
    ])('retrieves crop indices in hand ($hand)', ({ hand, expected }) => {
      let match = stubMatch()

      match = updatePlayer(match, stubPlayer1.id, {
        hand,
      })

      const cropIndexesInHand = lookup.findCropIndexesInPlayerHand(
        match,
        stubPlayer1.id
      )

      expect(cropIndexesInHand).toEqual(expected)
    })
  })

  describe('findWaterIndexesInPlayerHand', () => {
    test.each([
      { hand: [], expected: [] },
      { hand: [instantiate(water)], expected: [0] },
      {
        hand: [
          instantiate(carrot),
          instantiate(water),
          instantiate(water),
          instantiate(pumpkin),
        ],
        expected: [1, 2],
      },
    ])('retrieves water indices in hand ($hand)', ({ hand, expected }) => {
      let match = stubMatch()

      match = updatePlayer(match, stubPlayer1.id, {
        hand,
      })

      const waterIndexesInHand = lookup.findWaterIndexesInPlayerHand(
        match,
        stubPlayer1.id
      )

      expect(waterIndexesInHand).toEqual(expected)
    })
  })

  describe('getPlayedCropFromField', () => {
    let mutatedMatch: IMatch

    beforeEach(() => {
      mutatedMatch = stubMatch()

      // eslint-disable-next-line functional/immutable-data
      mutatedMatch.table.players[stubPlayer1.id].field.crops[0] =
        factory.buildPlayedCrop(stubCarrot)
    })

    test('returns card from field', () => {
      const playedCrop = lookup.getPlayedCropFromField(
        mutatedMatch,
        stubPlayer1.id,
        0
      )

      expect(playedCrop).toEqual(factory.buildPlayedCrop(stubCarrot))
    })

    test('throws an error when specified card is not in field', () => {
      expect(() => {
        lookup.getPlayedCropFromField(
          mutatedMatch,
          stubPlayer1.id,
          mutatedMatch.table.players[stubPlayer1.id].field.crops.length
        )
      }).toThrow()
    })
  })

  describe('findEventIndexesInPlayerHand', () => {
    test.each([
      { hand: [], expected: [] },
      {
        hand: [stubRain],
        expected: [0],
      },
      {
        hand: [stubCarrot, stubRain, stubWater, stubRain],
        expected: [1, 3],
      },
    ])(
      'retrieves event indices $expected in hand (%s)',
      ({ hand, expected }) => {
        let match = stubMatch()

        match = updatePlayer(match, stubPlayer1.id, {
          hand,
        })

        const eventIndexesInHand = lookup.findEventIndexesInPlayerHand(
          match,
          stubPlayer1.id
        )

        expect(eventIndexesInHand).toEqual(expected)
      }
    )
  })

  describe('findToolIndexesInPlayerHand', () => {
    test.each([
      { hand: [], expected: [] },
      {
        hand: [stubShovel],
        expected: [0],
      },
      {
        hand: [stubCarrot, stubShovel, stubWater, stubShovel],
        expected: [1, 3],
      },
    ])(
      'retrieves tool indices $expected in hand (%s)',
      ({ hand, expected }) => {
        let match = stubMatch()

        match = updatePlayer(match, stubPlayer1.id, {
          hand,
        })

        const eventIndexesInHand = lookup.findToolIndexesInPlayerHand(
          match,
          stubPlayer1.id
        )

        expect(eventIndexesInHand).toEqual(expected)
      }
    )
  })

  describe('playerIds', () => {
    test('retrieves player IDs', () => {
      const playerIds = lookup.playerIds(match)

      expect(playerIds).toEqual([stubPlayer1.id, stubPlayer2.id])
    })
  })

  describe('nextPlayerIndex', () => {
    test('determines the next player ID', () => {
      const nextPlayer = lookup.nextPlayerIndex(match)

      expect(nextPlayer).toEqual(1)
    })
  })
})
