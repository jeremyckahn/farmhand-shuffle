import { CardType, MatchState } from '..'
import { MatchStateCorruptError } from '../../services/Rules/errors'

import * as assertions from '.'

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

describe('assertIsCardId', () => {
  it('does not throw for valid card ID', () => {
    expect(() => assertions.assertIsCardId('carrot')).not.toThrow()
  })

  it('throws MatchStateCorruptError for invalid card ID', () => {
    expect(() => assertions.assertIsCardId('invalid')).toThrow(
      MatchStateCorruptError
    )
  })
})

describe('assertIsEventCardInstance', () => {
  it('does not throw for valid Event card', () => {
    const eventCard = { ...mockCardInstance, type: CardType.EVENT }

    expect(() =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
      assertions.assertIsEventCardInstance(eventCard as any)
    ).not.toThrow()
  })

  it('throws MatchStateCorruptError for non-Event card', () => {
    expect(() =>
      assertions.assertIsEventCardInstance(mockCardInstance)
    ).toThrow(MatchStateCorruptError)
  })
})

describe('assertIsToolCardInstance', () => {
  it('does not throw for valid Tool card', () => {
    const toolCard = { ...mockCardInstance, type: CardType.TOOL }

    expect(() =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
      assertions.assertIsToolCardInstance(toolCard as any)
    ).not.toThrow()
  })

  it('throws MatchStateCorruptError for non-Tool card', () => {
    expect(() => assertions.assertIsToolCardInstance(mockCardInstance)).toThrow(
      MatchStateCorruptError
    )
  })
})

describe('assertStringIsMatchState', () => {
  it('does not throw for valid MatchState string', () => {
    expect(() =>
      assertions.assertStringIsMatchState(MatchState.PLANTING_CARD)
    ).not.toThrow()
  })

  it('throws TypeError for invalid string', () => {
    expect(() => assertions.assertStringIsMatchState('INVALID_STATE')).toThrow(
      TypeError
    )
  })
})

describe('assertIsPlayedCrop', () => {
  it('does not throw for valid IPlayedCrop', () => {
    expect(() => assertions.assertIsPlayedCrop(mockPlayedCrop, 0)).not.toThrow()
  })

  it('throws TypeError for undefined', () => {
    expect(() => assertions.assertIsPlayedCrop(undefined, 0)).toThrow(TypeError)
  })
})
