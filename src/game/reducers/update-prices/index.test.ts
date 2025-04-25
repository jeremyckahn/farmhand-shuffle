import { stubGame } from '../../../test-utils/stubs/game'
import { isCropPriceFluctuation } from '../../types/guards'

import { updatePrices } from './'

describe('updatePrices', () => {
  it('should set buffedCrop and nerfedCrop with different crops', () => {
    const mockGame = stubGame()
    const updatedGame = updatePrices(mockGame)

    expect(isCropPriceFluctuation(updatedGame.buffedCrop)).toEqual(true)
    expect(isCropPriceFluctuation(updatedGame.nerfedCrop)).toEqual(true)
    expect(updatedGame.buffedCrop?.crop).not.toBe(updatedGame.nerfedCrop?.crop)
  })
})
