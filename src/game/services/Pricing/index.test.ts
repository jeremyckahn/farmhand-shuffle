import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards'
import { updateTable } from '../../reducers/update-table'
import { updateGame } from '../../reducers/update-game'

import { pricing } from '.'

describe('PricingService', () => {
  describe('getCropBaseValue', () => {
    it('should return double the waterToMature value of the crop', () => {
      expect(pricing.getCropBaseValue(carrot)).toBe(6)
    })
  })

  describe('getCropSaleValue', () => {
    it('should return the community fund if it is less than base value', () => {
      let game = stubGame()
      game = updateTable(game, { communityFund: 2 })

      expect(pricing.getCropSaleValue(game, carrot)).toBe(2)
    })

    it('should return the base value if it is equal to community fund', () => {
      let game = stubGame()
      game = updateTable(game, { communityFund: 10 })

      expect(pricing.getCropSaleValue(game, carrot)).toBe(6)
    })

    it('should increase the sale value when the crop is buffed', () => {
      let game = stubGame()

      game = updateTable(game, {
        communityFund: 100,
      })

      game = updateGame(game, {
        // NOTE: Crop is spread here to prevent false-positives by creating a
        // new object that would break any improper object reference
        // comparisons.
        buffedCrop: { crop: { ...carrot }, multiplier: 2 },
      })

      expect(pricing.getCropSaleValue(game, carrot)).toBe(12)
    })

    it('should decrease the sale value when the crop is nerfed', () => {
      let game = stubGame()

      game = updateTable(game, {
        communityFund: 100,
      })

      game = updateGame(game, {
        // NOTE: Crop is spread here to prevent false-positives by creating a
        // new object that would break any improper object reference
        // comparisons.
        nerfedCrop: { crop: { ...carrot }, multiplier: 0.5 },
      })

      expect(pricing.getCropSaleValue(game, carrot)).toBe(3)
    })
  })
})
