import { vi } from 'vitest'

import {
  stubCarrot,
  stubPumpkin,
  stubShovel,
  stubSprinkler,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { factory } from '../Factory'

import { rules } from './index'

describe('rules.applyDailyEffects', () => {
  test('returns context unmodified if current player has no cards in field', () => {
    const match = stubMatch({ currentPlayerId: stubPlayer1.id })

    // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    ;(match.table.players[stubPlayer1.id]!.field as any).cards = []

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const context = { match } as any

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const nextContext = rules.applyDailyEffects(context)

    expect(nextContext).toBe(context)
    expect(nextContext.match).toBe(match)
  })

  test("returns context unmodified if current player's field contains only crop cards", () => {
    const match = stubMatch({ currentPlayerId: stubPlayer1.id })

    // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    ;(match.table.players[stubPlayer1.id]!.field as any).cards = [
      factory.buildPlayedCrop(stubCarrot),
      factory.buildPlayedCrop(stubPumpkin),
    ]

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const context = { match } as any

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const nextContext = rules.applyDailyEffects(context)

    expect(nextContext).toBe(context)
  })

  test('returns context unmodified for tool cards that do not implement applyDailyEffect', () => {
    const match = stubMatch({ currentPlayerId: stubPlayer1.id })
    // Shovel is a tool card but does not implement applyDailyEffect
    const shovelCard = factory.buildPlayedTool(stubShovel)

    expect(shovelCard.instance.applyDailyEffect).toBeUndefined()

    // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    ;(match.table.players[stubPlayer1.id]!.field as any).cards = [shovelCard]

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const context = { match } as any

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const nextContext = rules.applyDailyEffects(context)

    expect(nextContext).toBe(context)
  })

  test('calls applyDailyEffect for tool cards that implement it and accumulates context', () => {
    const match = stubMatch({ currentPlayerId: stubPlayer1.id })

    const sprinkler1 = factory.buildPlayedTool(stubSprinkler)
    const sprinkler2 = factory.buildPlayedTool(stubSprinkler)

    // We mock the applyDailyEffect for both sprinklers

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const mockedContext1 = { match: { ...match, turn: 2 } } as any
    const applyDailyEffectSpy1 = vi.fn().mockReturnValue(mockedContext1)

    // eslint-disable-next-line functional/immutable-data
    sprinkler1.instance = {
      ...sprinkler1.instance,
      applyDailyEffect: applyDailyEffectSpy1,
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const mockedContext2 = { match: { ...match, turn: 3 } } as any
    const applyDailyEffectSpy2 = vi.fn().mockReturnValue(mockedContext2)

    // eslint-disable-next-line functional/immutable-data
    sprinkler2.instance = {
      ...sprinkler2.instance,
      applyDailyEffect: applyDailyEffectSpy2,
    }

    // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    ;(match.table.players[stubPlayer1.id]!.field as any).cards = [
      factory.buildPlayedCrop(stubCarrot),
      sprinkler1,
      factory.buildPlayedCrop(stubPumpkin),
      sprinkler2,
    ]

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const context = { match } as any

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const finalContext = rules.applyDailyEffects(context)

    expect(applyDailyEffectSpy1).toHaveBeenCalledTimes(1)
    // The first sprinkler gets the context
    // The context argument to `applyDailyEffect` merges `{ ...context, match }`
    // but the implementation doesn't use the original context if it's `{ match }`
    // The original code: `context = card.instance.applyDailyEffect({ ...context, match }, i)`
    expect(applyDailyEffectSpy1).toHaveBeenCalledWith(
      expect.objectContaining({ match }),
      1
    )

    expect(applyDailyEffectSpy2).toHaveBeenCalledTimes(1)
    // The second sprinkler gets the context returned by the first sprinkler, and its index (3)
    expect(applyDailyEffectSpy2).toHaveBeenCalledWith(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      expect.objectContaining({ match: mockedContext1.match }),
      3
    )

    // The final returned context should be what the last sprinkler returned
    expect(finalContext).toBe(mockedContext2)
  })
})
