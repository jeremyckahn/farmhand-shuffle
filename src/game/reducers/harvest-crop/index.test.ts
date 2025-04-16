import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { factory } from '../../services/Factory'
import { pricing } from '../../services/Pricing'
import { IGame, IPlayedCrop } from '../../types'

import { harvestCrop } from '.'

describe('harvestCrop', () => {
  let game: IGame
  let stubPlayedCrop: IPlayedCrop

  beforeEach(() => {
    game = stubGame()

    stubPlayedCrop = factory.buildPlayedCrop(stubCarrot)

    // eslint-disable-next-line functional/immutable-data
    game.table.players[stubPlayer1.id].field.crops[0] = stubPlayedCrop
  })

  it('should harvest the crop and return its sale value', () => {
    const saleValue = pricing.getCropSaleValue(game, stubPlayedCrop.instance)
    const initialCommunityFund = game.table.communityFund
    const initialPlayerFunds = game.table.players[stubPlayer1.id].funds

    game = harvestCrop(game, stubPlayer1.id, 0)

    expect(game.table.communityFund).toEqual(initialCommunityFund - saleValue)
    expect(game.table.players[stubPlayer1.id].field.crops).toEqual([undefined])
    expect(game.table.players[stubPlayer1.id].funds).toBe(
      initialPlayerFunds + saleValue
    )
  })
})
