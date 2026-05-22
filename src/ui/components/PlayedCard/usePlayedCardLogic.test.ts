import { factory } from '../../../game/services/Factory'
import { IPlayedCrop } from '../../../game/types'
import { stubCarrot } from '../../../test-utils/stubs/cards'

import { usePlayedCardLogic } from './usePlayedCardLogic'

describe('usePlayedCardLogic', () => {
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

  it('should calculate waterIconsToRender correctly when not enough water', () => {
    const result = usePlayedCardLogic({
      playedCard: playedCropNoWater,
    })

    expect(result.waterIconsToRender).toBe(validCard.waterToMature)
  })

  it('should calculate waterIconsToRender correctly when enough water', () => {
    const result = usePlayedCardLogic({
      playedCard: playedCropWithEnoughWater,
    })

    expect(result.waterIconsToRender).toBe(validCard.waterToMature)
  })

  it('should calculate waterIconsToRender correctly when there is extra water', () => {
    const result = usePlayedCardLogic({
      playedCard: playedCropWithExtraWater,
    })

    expect(result.waterIconsToRender).toBe(playedCropWithExtraWater.waterCards)
  })

  it('should determine canBeWatered correctly when not watered', () => {
    const result = usePlayedCardLogic({
      playedCard: playedCropNoWater,
    })

    expect(result.canBeWatered).toBe(true)
  })

  it('should determine canBeHarvested correctly when not enough water', () => {
    const result = usePlayedCardLogic({
      playedCard: playedCropNoWater,
    })

    expect(result.canBeHarvested).toBe(false)
  })

  it('should determine canBeHarvested correctly when enough water', () => {
    const result = usePlayedCardLogic({
      playedCard: playedCropWithEnoughWater,
    })

    expect(result.canBeHarvested).toBe(true)
  })
})
