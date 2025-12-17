import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { factory } from '../../services/Factory'
import { pricing } from '../../services/Pricing'
import { IMatch, IPlayedCrop } from '../../types'

import { harvestCrop } from '.'

describe('harvestCrop', () => {
  let match: IMatch
  let stubPlayedCrop: IPlayedCrop

  beforeEach(() => {
    match = stubMatch()

    stubPlayedCrop = factory.buildPlayedCrop(stubCarrot)
    const player = match.table.players[stubPlayer1.id]

    if (!player) {
      throw new Error('Player not found in test setup')
    }

    // eslint-disable-next-line functional/immutable-data
    player.field.crops[0] = stubPlayedCrop
  })

  it('should harvest the crop and return its sale value', () => {
    const playerBefore = match.table.players[stubPlayer1.id]
    if (!playerBefore) {
      throw new Error('Player not found in test setup')
    }

    const saleValue = pricing.getCropSaleValue(match, stubPlayedCrop.instance)
    const initialCommunityFund = match.table.communityFund
    const initialPlayerFunds = playerBefore.funds

    match = harvestCrop(match, stubPlayer1.id, 0)
    const playerAfter = match.table.players[stubPlayer1.id]
    if (!playerAfter) {
      throw new Error('Player not found after harvesting')
    }

    expect(match.table.communityFund).toEqual(initialCommunityFund - saleValue)
    expect(playerAfter.field.crops).toEqual([undefined])
    expect(playerAfter.funds).toBe(initialPlayerFunds + saleValue)
  })
})
