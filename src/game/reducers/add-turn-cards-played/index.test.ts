import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { updatePlayer } from '../update-player'

import { addCardsPlayedDuringTurn } from '.'

describe('addCardsPlayedDuringTurn', () => {
  test("adds to a player's turn cards played record", () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)
    const newMatch = addCardsPlayedDuringTurn(match, player1Id, [
      stubCarrot,
      stubPumpkin,
    ])

    expect(newMatch.table.players[player1Id].cardsPlayedDuringTurn).toEqual([
      stubCarrot,
      stubPumpkin,
    ])
  })

  test('cards are prepended', () => {
    let match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)
    match = updatePlayer(match, player1Id, {
      cardsPlayedDuringTurn: [stubCarrot, stubWater],
    })
    const newMatch = addCardsPlayedDuringTurn(match, player1Id, [stubPumpkin])

    expect(newMatch.table.players[player1Id].cardsPlayedDuringTurn).toEqual([
      stubPumpkin,
      stubCarrot,
      stubWater,
    ])
  })
})
