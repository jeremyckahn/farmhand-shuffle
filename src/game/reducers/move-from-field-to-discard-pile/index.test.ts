import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { factory } from '../../services/Factory'
import { InvalidCardIndexError } from '../../services/Rules/errors'

import { moveFromFieldToDiscardPile } from '.'

describe('moveFromFieldToDiscardPile', () => {
  test("moves a card from a player's field to their discard pile", () => {
    const match = stubMatch()

    // eslint-disable-next-line functional/immutable-data
    match.table.players[stubPlayer1.id].field.crops[0] =
      factory.buildPlayedCrop(stubCarrot)
    const newMatch = moveFromFieldToDiscardPile(match, stubPlayer1.id, 0)

    expect(newMatch.table.players[stubPlayer1.id].field.crops).toEqual([
      undefined,
    ])

    expect(newMatch.table.players[stubPlayer1.id].discardPile).toEqual([
      stubCarrot,
    ])
  })

  test('supports sparse fields', () => {
    const match = stubMatch()

    const playedCarrot = factory.buildPlayedCrop(stubCarrot)
    const playedPumpkin = factory.buildPlayedCrop(stubPumpkin)

    // eslint-disable-next-line functional/immutable-data
    match.table.players[stubPlayer1.id].field.crops[0] = playedCarrot
    // eslint-disable-next-line functional/immutable-data
    match.table.players[stubPlayer1.id].field.crops[1] = playedPumpkin
    const newMatch = moveFromFieldToDiscardPile(match, stubPlayer1.id, 0)

    expect(newMatch.table.players[stubPlayer1.id].field.crops).toEqual([
      undefined,
      playedPumpkin,
    ])
  })

  test('throws an error if an invalid card index is specified', () => {
    const match = stubMatch()

    expect(() => {
      moveFromFieldToDiscardPile(
        match,
        stubPlayer1.id,
        match.table.players[stubPlayer1.id].field.crops.length
      )
    }).toThrow(InvalidCardIndexError)
  })
})
