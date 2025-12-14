import { stubMatch } from '../../../test-utils/stubs/match'
import { isCropPriceFluctuation } from '../../types/guards'

import { updatePrices } from './'

describe('updatePrices', () => {
  it('should set buffedCrop and nerfedCrop with different crops', () => {
    const mockMatch = stubMatch()
    const updatedMatch = updatePrices(mockMatch)

    expect(isCropPriceFluctuation(updatedMatch.buffedCrop)).toEqual(true)
    expect(isCropPriceFluctuation(updatedMatch.nerfedCrop)).toEqual(true)
    expect(updatedMatch.buffedCrop?.crop).not.toBe(
      updatedMatch.nerfedCrop?.crop
    )
  })
})
