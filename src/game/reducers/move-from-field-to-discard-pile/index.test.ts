import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { factory } from '../../services/Factory'
import { InvalidCardIndexError } from '../../services/Rules/errors'

import { moveFromFieldToDiscardPile } from '.'

describe('moveFromFieldToDiscardPile', () => {
  test("moves a card from a player's field to their discard pile", () => {
    const match = stubMatch()
    const player = match.table.players[stubPlayer1.id]
    if (!player) throw new Error('Player not found')

    // eslint-disable-next-line functional/immutable-data
    player.field.crops[0] = factory.buildPlayedCrop(stubCarrot)
    const newMatch = moveFromFieldToDiscardPile(match, stubPlayer1.id, 0)
    const newPlayer = newMatch.table.players[stubPlayer1.id]
    if (!newPlayer) throw new Error('Player not found')

    expect(newPlayer.field.crops).toEqual([undefined])
    expect(newPlayer.discardPile).toEqual([stubCarrot])
  })

  test('supports sparse fields', () => {
    const match = stubMatch()
    const player = match.table.players[stubPlayer1.id]
    if (!player) throw new Error('Player not found')

    const playedCarrot = factory.buildPlayedCrop(stubCarrot)
    const playedPumpkin = factory.buildPlayedCrop(stubPumpkin)

    // eslint-disable-next-line functional/immutable-data
    player.field.crops[0] = playedCarrot
    // eslint-disable-next-line functional/immutable-data
    player.field.crops[1] = playedPumpkin
    const newMatch = moveFromFieldToDiscardPile(match, stubPlayer1.id, 0)
    const newPlayer = newMatch.table.players[stubPlayer1.id]
    if (!newPlayer) throw new Error('Player not found')

    expect(newPlayer.field.crops).toEqual([undefined, playedPumpkin])
  })

  test('throws an error if an invalid card index is specified', () => {
    const match = stubMatch()
    const player = match.table.players[stubPlayer1.id]
    if (!player) throw new Error('Player not found')

    expect(() => {
      moveFromFieldToDiscardPile(match, stubPlayer1.id, player.field.crops.length)
    }).toThrow(InvalidCardIndexError)
  })
})
