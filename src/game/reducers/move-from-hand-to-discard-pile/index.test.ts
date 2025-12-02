import { stubMatch } from '../../../test-utils/stubs/match'
import { InvalidCardIndexError } from '../../services/Rules/errors'

import { stubCarrot } from '../../../test-utils/stubs/cards'

import { moveFromHandToDiscardPile } from '.'

describe('moveFromHandToDiscardPile', () => {
  test("moves a card from a player's hand to their discard pile", () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    // eslint-disable-next-line functional/immutable-data
    match.table.players[player1Id].hand[0] = stubCarrot
    const newMatch = moveFromHandToDiscardPile(match, player1Id, 0)

    expect(newMatch.table.players[player1Id].hand).toEqual(
      match.table.players[player1Id].hand.slice(1)
    )

    expect(newMatch.table.players[player1Id].discardPile).toEqual([stubCarrot])
  })

  test('throws an error if an invalid card is specified', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    expect(() => {
      moveFromHandToDiscardPile(
        match,
        player1Id,
        match.table.players[player1Id].hand.length
      )
    }).toThrow(InvalidCardIndexError)
  })
})
