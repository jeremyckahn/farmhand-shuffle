import { describe, expect, it } from 'vitest'

import { CardType, MatchState } from '../'
import { MatchStateCorruptError } from '../../services/Rules/errors'
import { stubShovel, stubSprinkler } from '../../../test-utils/stubs/cards'
import { instantiate, sprinkler } from '../../cards'
import { factory } from '../../services/Factory'

import * as guards from './index'

// Mock data for testing
const mockCard = {
  id: 'carrot',
  name: 'Carrot',
  type: CardType.CROP as const,
  waterToMature: 1,
}

const mockCardInstance = {
  ...mockCard,
  instanceId: 'some-uuid',
}

const mockPlayedCrop = {
  instance: mockCardInstance,
  waterCards: 0,
  wasWateredDuringTurn: false,
}

const mockField = {
  cards: [mockPlayedCrop, undefined, undefined, undefined],
}

const mockPlayer = {
  id: 'player1',
  funds: 10,
  deck: [mockCardInstance],
  hand: [mockCardInstance],
  discardPile: [mockCardInstance],
  cardsPlayedDuringTurn: [],
  field: mockField,
}

const mockTable = {
  communityFund: 100,
  players: { player1: mockPlayer },
}

const mockFluctuation = {
  crop: mockCard,
  multiplier: 2,
}

const mockMatch = {
  table: mockTable,
  currentPlayerId: 'player1',
  sessionOwnerPlayerId: 'player1',
  buffedCrop: null,
  nerfedCrop: null,
  cardsToDrawAtTurnStart: 1,
  eventCardsThatCanBePlayed: 1,
  selectedWaterCardInHandIdx: -1,
  winner: null,
}

describe('Type Guards', () => {
  describe('isCardInstance', () => {
    it('returns true for valid CardInstance', () => {
      expect(guards.isCardInstance(mockCardInstance)).toBe(true)
    })

    it('returns false for non-object or null', () => {
      expect(guards.isCardInstance(null)).toBe(false)
      expect(guards.isCardInstance('string')).toBe(false)
    })

    it('returns false if missing properties', () => {
      expect(guards.isCardInstance({ id: '1' })).toBe(false)
      expect(guards.isCardInstance({ ...mockCard })).toBe(false) // Missing instanceId
    })
  })

  describe('isCrop', () => {
    it('returns true for valid ICrop', () => {
      expect(guards.isCrop(mockCard)).toBe(true)
    })

    it('returns false for non-crop card', () => {
      expect(guards.isCrop({ ...mockCard, type: CardType.EVENT })).toBe(false)
    })

    it('returns false for invalid input', () => {
      expect(guards.isCrop(null)).toBe(false)
      expect(guards.isCrop({})).toBe(false)
    })
  })

  describe('isPlayedCrop', () => {
    it('returns true for valid IPlayedCrop', () => {
      expect(guards.isPlayedCrop(mockPlayedCrop)).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isPlayedCrop(null)).toBe(false)
      expect(guards.isPlayedCrop({})).toBe(false)
      expect(guards.isPlayedCrop({ instance: {} })).toBe(false)
    })
  })

  describe('isPlayedTool', () => {
    it('returns true for valid isPlayedTool', () => {
      expect(
        guards.isPlayedTool(factory.buildPlayedTool(instantiate(sprinkler)))
      ).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isPlayedTool(null)).toBe(false)
      expect(guards.isPlayedTool({})).toBe(false)
      expect(guards.isPlayedTool({ instance: {} })).toBe(false)
    })
  })

  describe('isField', () => {
    it('returns true for valid IField', () => {
      expect(guards.isField(mockField)).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isField(null)).toBe(false)
      expect(guards.isField({ cards: 'not-array' })).toBe(false)
      expect(guards.isField({ cards: [null] })).toBe(false) // null is not allowed in crops array (undefined is)
    })
  })

  describe('isPlayer', () => {
    it('returns true for valid IPlayer', () => {
      expect(guards.isPlayer(mockPlayer)).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isPlayer(null)).toBe(false)
      expect(guards.isPlayer({ ...mockPlayer, funds: '10' })).toBe(false)
    })
  })

  describe('isTable', () => {
    it('returns true for valid ITable', () => {
      expect(guards.isTable(mockTable)).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isTable(null)).toBe(false)
      expect(guards.isTable({ ...mockTable, communityFund: 'string' })).toBe(
        false
      )
    })
  })

  describe('isCropPriceFluctuation', () => {
    it('returns true for valid ICropPriceFluctuation', () => {
      expect(guards.isCropPriceFluctuation(mockFluctuation)).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isCropPriceFluctuation(null)).toBe(false)
      expect(guards.isCropPriceFluctuation({ crop: {}, multiplier: 1 })).toBe(
        false
      )
    })
  })

  describe('isMatch', () => {
    it('returns true for valid IMatch', () => {
      expect(guards.isMatch(mockMatch)).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isMatch(null)).toBe(false)
      expect(guards.isMatch({ ...mockMatch, table: null })).toBe(false)
    })
  })

  describe('isCardId', () => {
    it('returns true for valid card ID', () => {
      expect(guards.isCardId('carrot')).toBe(true)
    })

    it('returns false for invalid card ID', () => {
      expect(guards.isCardId('invalid-id')).toBe(false)
    })
  })

  describe('isCard', () => {
    it('returns true for valid ICard', () => {
      expect(guards.isCard(mockCard)).toBe(true)
    })

    it('returns false for invalid input', () => {
      expect(guards.isCard(null)).toBe(false)
      expect(guards.isCard({ id: 'invalid', name: 'name', type: 'CROP' })).toBe(
        false
      )
    })
  })

  describe('assertIsCardId', () => {
    it('does not throw for valid card ID', () => {
      expect(() => guards.assertIsCardId('carrot')).not.toThrow()
    })

    it('throws MatchStateCorruptError for invalid card ID', () => {
      expect(() => guards.assertIsCardId('invalid')).toThrow(
        MatchStateCorruptError
      )
    })
  })

  describe('assertIsEventCardInstance', () => {
    it('does not throw for valid Event card', () => {
      const eventCard = { ...mockCardInstance, type: CardType.EVENT }

      expect(() =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
        guards.assertIsEventCardInstance(eventCard as any)
      ).not.toThrow()
    })

    it('throws MatchStateCorruptError for non-Event card', () => {
      expect(() => guards.assertIsEventCardInstance(mockCardInstance)).toThrow(
        MatchStateCorruptError
      )
    })
  })

  describe('assertIsToolCardInstance', () => {
    it('does not throw for valid Tool card', () => {
      const toolCard = { ...mockCardInstance, type: CardType.TOOL }

      expect(() =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
        guards.assertIsToolCardInstance(toolCard as any)
      ).not.toThrow()
    })

    it('throws MatchStateCorruptError for non-Tool card', () => {
      expect(() => guards.assertIsToolCardInstance(mockCardInstance)).toThrow(
        MatchStateCorruptError
      )
    })
  })

  describe('assertCurrentPlayer', () => {
    it('does not throw for valid string', () => {
      expect(() => guards.assertCurrentPlayer('player1')).not.toThrow()
    })

    it('throws TypeError for null', () => {
      expect(() => guards.assertCurrentPlayer(null)).toThrow(TypeError)
    })
  })

  describe('assertStringIsMatchState', () => {
    it('does not throw for valid MatchState string', () => {
      expect(() =>
        guards.assertStringIsMatchState(MatchState.PLANTING_CROP)
      ).not.toThrow()
    })

    it('throws TypeError for invalid string', () => {
      expect(() => guards.assertStringIsMatchState('INVALID_STATE')).toThrow(
        TypeError
      )
    })
  })

  describe('assertIsPlayedCrop', () => {
    it('does not throw for valid IPlayedCrop', () => {
      expect(() => guards.assertIsPlayedCrop(mockPlayedCrop, 0)).not.toThrow()
    })

    it('throws TypeError for undefined', () => {
      expect(() => guards.assertIsPlayedCrop(undefined, 0)).toThrow(TypeError)
    })
  })

  describe('isCropCardInstance', () => {
    it('returns true for CROP card instance', () => {
      expect(guards.isCropCardInstance(mockCardInstance)).toBe(true)
    })

    it('returns false for non-CROP card instance', () => {
      expect(guards.isCropCardInstance(stubSprinkler)).toBe(false)
    })
  })

  describe('isPlantableCardInstance', () => {
    it('returns true for CROP card instance', () => {
      expect(guards.isPlantableCardInstance(mockCardInstance)).toBe(true)
    })

    it('returns true for plantable TOOL card instance', () => {
      expect(guards.isPlantableCardInstance(stubSprinkler)).toBe(true)
    })

    it('returns false for non-plantable TOOL card instance', () => {
      expect(guards.isPlantableCardInstance(stubShovel)).toBe(false)
    })
  })
})
