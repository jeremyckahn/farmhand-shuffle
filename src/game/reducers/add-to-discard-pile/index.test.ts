import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'

import { addToDiscardPile } from '.'

describe('addToDiscardPile', () => {
  test("adds to a player's discard pile", () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const newMatch = addToDiscardPile(match, player1Id, stubCarrot)

    const newPlayer = newMatch.table.players[player1Id]

    if (!newPlayer) {
      throw new Error('Player not found')
    }

    expect(newPlayer.discardPile).toEqual([stubCarrot])
  })
})
