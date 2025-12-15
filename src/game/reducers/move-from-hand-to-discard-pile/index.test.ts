import { stubMatch } from '../../../test-utils/stubs/match'
import { InvalidCardIndexError } from '../../services/Rules/errors'

import { stubCarrot } from '../../../test-utils/stubs/cards'

import { moveFromHandToDiscardPile } from '.'

describe('moveFromHandToDiscardPile', () => {
  test("moves a card from a player's hand to their discard pile", () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const player = match.table.players[player1Id]

    if (!player) {
      throw new Error('Player not found')
    }

    // eslint-disable-next-line functional/immutable-data
    player.hand[0] = stubCarrot
    const newMatch = moveFromHandToDiscardPile(match, player1Id, 0)
    const newPlayer = newMatch.table.players[player1Id]

    if (!newPlayer) {
      throw new Error('Player not found')
    }

    expect(newPlayer.hand).toEqual(player.hand.slice(1))
    expect(newPlayer.discardPile).toEqual([stubCarrot])
  })

  test('throws an error if an invalid card is specified', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const player = match.table.players[player1Id]

    if (!player) {
      throw new Error('Player not found')
    }

    expect(() => {
      moveFromHandToDiscardPile(match, player1Id, player.hand.length)
    }).toThrow(InvalidCardIndexError)
  })
})
