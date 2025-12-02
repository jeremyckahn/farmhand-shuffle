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

    // eslint-disable-next-line functional/immutable-data
    match.table.players[stubPlayer1.id].field.crops[0] = stubPlayedCrop
  })

  it('should harvest the crop and return its sale value', () => {
    const saleValue = pricing.getCropSaleValue(match, stubPlayedCrop.instance)
    const initialCommunityFund = match.table.communityFund
    const initialPlayerFunds = match.table.players[stubPlayer1.id].funds

    match = harvestCrop(match, stubPlayer1.id, 0)

    expect(match.table.communityFund).toEqual(initialCommunityFund - saleValue)
    expect(match.table.players[stubPlayer1.id].field.crops).toEqual([undefined])
    expect(match.table.players[stubPlayer1.id].funds).toBe(
      initialPlayerFunds + saleValue
    )
  })
})
