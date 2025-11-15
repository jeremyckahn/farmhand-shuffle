import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
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
      let game = stubGame()
      const [player1Id] = Object.keys(game.table.players)
      game = updatePlayer(game, player1Id, {
        cardsPlayedDuringTurn: startingCardsPlayedDuringTurn,
      })
      const newGame = removeTurnCardsPlayed(game, player1Id, howMany)

      expect(newGame.table.players[player1Id].cardsPlayedDuringTurn).toEqual(
        resultingCardsPlayedDuringTurn
      )
    }
  )
})
