import { vi } from 'vitest'

import {
  stubCarrot,
  stubPumpkin,
  stubShovel,
} from '../../../test-utils/stubs/cards'
import { stubContext } from '../../../test-utils/stubs/context'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { instantiate, sprinkler } from '../../cards'
import { updatePlayer } from '../../reducers/update-player'
import { factory } from '../Factory'

import { rules } from './index'

describe('rules.applyDailyEffects', () => {
  test('returns context unmodified if current player has no cards in field', () => {
    let match = stubMatch({ currentPlayerId: stubPlayer1.id })

    match = updatePlayer(match, stubPlayer1.id, {
      field: { cards: [] },
    })

    const nextContext = rules.applyDailyEffects({ ...stubContext, match })

    expect(nextContext.match).toEqual(match)
  })

  test("returns context unmodified if current player's field contains only crop cards", () => {
    let match = stubMatch({ currentPlayerId: stubPlayer1.id })

    match = updatePlayer(match, stubPlayer1.id, {
      field: {
        cards: [
          factory.buildPlayedCrop(stubCarrot),
          factory.buildPlayedCrop(stubPumpkin),
        ],
      },
    })

    const nextContext = rules.applyDailyEffects({ ...stubContext, match })

    expect(nextContext.match).toEqual(match)
  })

  test('returns context unmodified for tool cards that do not implement applyDailyEffect', () => {
    let match = stubMatch({ currentPlayerId: stubPlayer1.id })

    // NOTE: Shovel is a tool card but does not implement applyDailyEffect
    const shovelCard = factory.buildPlayedTool(stubShovel)

    expect(shovelCard.instance.applyDailyEffect).toBeUndefined()

    match = updatePlayer(match, stubPlayer1.id, {
      field: {
        cards: [shovelCard],
      },
    })

    const nextContext = rules.applyDailyEffects({ ...stubContext, match })

    expect(nextContext.match).toEqual(match)
  })

  test('calls applyDailyEffect for tool cards that implement it and accumulates context', () => {
    let match = stubMatch({ currentPlayerId: stubPlayer1.id })

    const sprinkler1 = factory.buildPlayedTool(instantiate(sprinkler))
    const sprinkler2 = factory.buildPlayedTool(instantiate(sprinkler))

    // We mock the applyDailyEffect for both sprinklers

    const mockedContext1 = { ...stubContext, match }

    vi.spyOn(sprinkler1.instance, 'applyDailyEffect').mockReturnValue(
      mockedContext1
    )

    const mockedContext2 = { ...stubContext, match }

    vi.spyOn(sprinkler2.instance, 'applyDailyEffect').mockReturnValue(
      mockedContext2
    )

    match = updatePlayer(match, stubPlayer1.id, {
      field: {
        cards: [
          factory.buildPlayedCrop(stubCarrot),
          sprinkler1,
          factory.buildPlayedCrop(stubPumpkin),
          sprinkler2,
        ],
      },
    })

    rules.applyDailyEffects({ ...stubContext, match })

    expect(sprinkler1.instance.applyDailyEffect).toHaveBeenCalledTimes(1)
    expect(sprinkler1.instance.applyDailyEffect).toHaveBeenCalledWith(
      expect.objectContaining({ match }),
      1
    )

    expect(sprinkler2.instance.applyDailyEffect).toHaveBeenCalledTimes(1)
    expect(sprinkler2.instance.applyDailyEffect).toHaveBeenCalledWith(
      mockedContext1,
      3
    )
  })
})
