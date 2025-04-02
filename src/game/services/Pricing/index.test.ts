import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards'
import { updateTable } from '../../reducers/update-table'

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
  })
})
