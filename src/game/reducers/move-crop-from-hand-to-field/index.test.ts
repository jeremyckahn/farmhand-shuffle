import { stubCarrot, stubWater } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import {
  InvalidCardError,
  InvalidCardIndexError,
} from '../../services/Rules/errors'
import { IPlayedCrop } from '../../types'

import { moveCropFromHandToField } from '.'

describe('moveCropFromHandToField', () => {
  test("moves a card from a player's hand to their field", () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    // eslint-disable-next-line functional/immutable-data
    match.table.players[player1Id].hand[0] = stubCarrot
    const newMatch = moveCropFromHandToField(match, player1Id, 0)

    expect(newMatch.table.players[player1Id].hand).toEqual(
      match.table.players[player1Id].hand.slice(1)
    )

    expect(newMatch.table.players[player1Id].field.crops).toEqual<
      IPlayedCrop[]
    >([{ instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 }])
  })

  test('throws an error if an invalid card index is specified', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    expect(() => {
      moveCropFromHandToField(
        match,
        player1Id,
        match.table.players[player1Id].hand.length
      )
    }).toThrow(InvalidCardIndexError)
  })

  test('throws an error if an invalid card type is specified', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    // eslint-disable-next-line functional/immutable-data
    match.table.players[player1Id].hand[0] = stubWater

    expect(() => {
      moveCropFromHandToField(match, player1Id, 0)
    }).toThrow(InvalidCardError)
  })
})
