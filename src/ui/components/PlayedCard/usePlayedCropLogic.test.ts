import { factory } from '../../../game/services/Factory'
import { InvalidCardError } from '../../../game/services/Rules/errors'
import { CardInstance, IPlayedCrop } from '../../../game/types'
import { stubCarrot } from '../../../test-utils/stubs/cards'

import { usePlayedCropLogic } from './usePlayedCropLogic'

describe('usePlayedCropLogic', () => {
  const validCard = stubCarrot

  const playedCropNoWater: IPlayedCrop = {
    ...factory.buildPlayedCrop(validCard),
    waterCards: 0,
  }

  const playedCropWithEnoughWater: IPlayedCrop = {
    ...factory.buildPlayedCrop(validCard),
    waterCards: validCard.waterToMature,
  }

  const playedCropWithExtraWater: IPlayedCrop = {
    ...factory.buildPlayedCrop(validCard),
    waterCards: validCard.waterToMature + 1,
  }

  it('should throw InvalidCardError if card is not a crop card', () => {
    // @ts-expect-error Intentially incorrect
    const invalidCard: CardInstance = { id: '2', type: 'non-crop' }

    expect(() =>
      usePlayedCropLogic({ card: invalidCard, playedCrop: playedCropNoWater })
    ).toThrow(InvalidCardError)
  })

  it('should calculate waterIconsToRender correctly when not enough water', () => {
    const result = usePlayedCropLogic({
      card: validCard,
      playedCrop: playedCropNoWater,
    })

    expect(result.waterIconsToRender).toBe(validCard.waterToMature)
  })

  it('should calculate waterIconsToRender correctly when enough water', () => {
    const result = usePlayedCropLogic({
      card: validCard,
      playedCrop: playedCropWithEnoughWater,
    })

    expect(result.waterIconsToRender).toBe(validCard.waterToMature)
  })

  it('should calculate waterIconsToRender correctly when there is extra water', () => {
    const result = usePlayedCropLogic({
      card: validCard,
      playedCrop: playedCropWithExtraWater,
    })

    expect(result.waterIconsToRender).toBe(playedCropWithExtraWater.waterCards)
  })

  it('should determine canBeWatered correctly when not watered', () => {
    const result = usePlayedCropLogic({
      card: validCard,
      playedCrop: playedCropNoWater,
    })

    expect(result.canBeWatered).toBe(true)
  })

  it('should determine canBeHarvested correctly when not enough water', () => {
    const result = usePlayedCropLogic({
      card: validCard,
      playedCrop: playedCropNoWater,
    })

    expect(result.canBeHarvested).toBe(false)
  })

  it('should determine canBeHarvested correctly when enough water', () => {
    const result = usePlayedCropLogic({
      card: validCard,
      playedCrop: playedCropWithEnoughWater,
    })

    expect(result.canBeHarvested).toBe(true)
  })
})
