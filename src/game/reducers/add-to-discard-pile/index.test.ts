import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'

import { addToDiscardPile } from '.'

describe('addToDiscardPile', () => {
  test("adds to a player's discard pile", () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)
    const newMatch = addToDiscardPile(match, player1Id, stubCarrot)

    expect(newMatch.table.players[player1Id].discardPile).toEqual([stubCarrot])
  })
})
