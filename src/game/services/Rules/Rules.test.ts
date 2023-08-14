import { stubPlayer } from '../../../test-utils/stubs/players'
import { carrot } from '../../cards/crops/carrot/carrot'
import { deckSize, initialHandSize } from '../../config'
import { isGame } from '../../types/guards'

import { Rules } from './Rules'

const player1 = stubPlayer()
const player2 = stubPlayer()

// Make player2's deck slightly different from player1's to prevent false
// positives.
player2.deck[deckSize - 1] = carrot.id

describe('Rules', () => {
  describe('processGameStart', () => {
    test('creates a new game', () => {
      const game = Rules.processGameStart([player1, player2])

      expect(isGame(game)).toBe(true)
    })

    test('shuffles decks', () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.players[player1Id].deck).toEqual(
        player1.deck.slice().reverse().slice(initialHandSize)
      )

      expect(game.table.players[player2Id].deck).toEqual(
        player2.deck.slice().reverse().slice(initialHandSize)
      )
    })

    test('sets up player hands', () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.players[player1Id].hand).toEqual(
        player1.deck.slice().reverse().slice(0, initialHandSize)
      )

      expect(game.table.players[player2Id].hand).toEqual(
        player2.deck.slice().reverse().slice(0, initialHandSize)
      )
    })
  })
})
