import { stubMatch } from '../../../test-utils/stubs/match'
import { carrot } from '../../cards'
import { updateTable } from '../../reducers/update-table'
import { updateMatch } from '../../reducers/update-match'

import { pricing } from '.'

describe('PricingService', () => {
  describe('getCropBaseValue', () => {
    it('should return double the waterToMature value of the crop', () => {
      expect(pricing.getCropBaseValue(carrot)).toBe(6)
    })
  })

  describe('getCropSaleValue', () => {
    it('should return the community fund if it is less than base value', () => {
      let match = stubMatch()

      match = updateTable(match, { communityFund: 2 })

      expect(pricing.getCropSaleValue(match, carrot)).toBe(2)
    })

    it('should return the base value if it is equal to community fund', () => {
      let match = stubMatch()

      match = updateTable(match, { communityFund: 10 })

      expect(pricing.getCropSaleValue(match, carrot)).toBe(6)
    })

    it('should increase the sale value when the crop is buffed', () => {
      let match = stubMatch()

      match = updateTable(match, {
        communityFund: 100,
      })

      match = updateMatch(match, {
        // NOTE: Crop is spread here to prevent false-positives by creating a
        // new object that would break any improper object reference
        // comparisons.
        buffedCrop: { crop: { ...carrot }, multiplier: 2 },
      })

      expect(pricing.getCropSaleValue(match, carrot)).toBe(12)
    })

    it('should decrease the sale value when the crop is nerfed', () => {
      let match = stubMatch()

      match = updateTable(match, {
        communityFund: 100,
      })

      match = updateMatch(match, {
        // NOTE: Crop is spread here to prevent false-positives by creating a
        // new object that would break any improper object reference
        // comparisons.
        nerfedCrop: { crop: { ...carrot }, multiplier: 0.5 },
      })

      expect(pricing.getCropSaleValue(match, carrot)).toBe(3)
    })
  })
})
