import { stubMatch } from '../../../test-utils/stubs/match'
import { isCropPriceFluctuation } from '../../types/guards'
import { factory } from '../../services/Factory'
import { instantiate } from '../../cards'
import { carrot, pumpkin } from '../../cards/crops'
import { stubPlayer } from '../../../test-utils/stubs/players'

import { updatePrices } from './'

describe('updatePrices', () => {
  it('should set buffedCrop and nerfedCrop with different crops', () => {
    // Ensure we have at least 2 types of crops in the match
    const player1 = stubPlayer({
      id: 'player1',
      deck: [instantiate(carrot), instantiate(pumpkin)],
    })

    const mockMatch = stubMatch({
      table: {
        players: {
          [player1.id]: player1
        },
        communityFund: 0
      }
    })
    const updatedMatch = updatePrices(mockMatch)

    expect(isCropPriceFluctuation(updatedMatch.buffedCrop)).toEqual(true)
    expect(isCropPriceFluctuation(updatedMatch.nerfedCrop)).toEqual(true)
    expect(updatedMatch.buffedCrop?.crop).not.toBe(
      updatedMatch.nerfedCrop?.crop
    )
  })
})
