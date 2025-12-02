import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { updatePlayer } from '../update-player'

import { removeTurnCardsPlayed } from '.'

describe('removeTurnCardsPlayed', () => {
  test.each([
    {
      startingCardsPlayedDuringTurn: [stubPumpkin, stubCarrot],
      resultingCardsPlayedDuringTurn: [stubCarrot],
      howMany: 1,
    },
    {
      startingCardsPlayedDuringTurn: [stubPumpkin, stubCarrot],
      resultingCardsPlayedDuringTurn: [],
      howMany: undefined,
    },
    {
      startingCardsPlayedDuringTurn: [stubCarrot],
      resultingCardsPlayedDuringTurn: [],
      howMany: 1,
    },
  ])(
    'removes the latest $howMany card(s) from $startingCardsPlayedDuringTurn',
    ({
      startingCardsPlayedDuringTurn,
      resultingCardsPlayedDuringTurn,
      howMany,
    }) => {
      let match = stubMatch()
      const [player1Id] = Object.keys(match.table.players)
      match = updatePlayer(match, player1Id, {
        cardsPlayedDuringTurn: startingCardsPlayedDuringTurn,
      })
      const newMatch = removeTurnCardsPlayed(match, player1Id, howMany)

      expect(newMatch.table.players[player1Id].cardsPlayedDuringTurn).toEqual(
        resultingCardsPlayedDuringTurn
      )
    }
  )
})
