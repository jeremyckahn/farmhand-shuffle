import { stubPlayer } from '../../../test-utils/stubs/players'
import { pumpkin } from '../../cards/crops/pumpkin'
import { carrot } from '../../cards'
import { deckSize, initialHandSize } from '../../config'
import { isGame } from '../../types/guards'
import { handlePlayFromHand as mockCropHandlePlayFromHand } from '../../cards/crops/handlePlayFromHand'
import { IGame } from '../../types/index'

import { Rules } from './Rules'

const player1 = stubPlayer()
const player2 = stubPlayer()

jest.mock('../../cards/crops/handlePlayFromHand', () => {
  return {
    handlePlayFromHand: jest.fn(),
  }
})

// Make player2's deck slightly different from player1's to prevent false
// positives.
player2.deck[deckSize - 1] = pumpkin.id

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

  describe('playCardFromHand', () => {
    beforeEach(() => {
      ;(
        mockCropHandlePlayFromHand as jest.Mock<Promise<IGame>>
      ).mockImplementation(async (game: IGame) => {
        return game
      })
    })

    test('removes played card from hand', async () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id] = Object.keys(game.table.players)

      const newGame = await Rules.playCardFromHand(game, player1Id, 0)

      expect(newGame.table.players[player1Id].hand.length).toEqual(
        game.table.players[player1Id].hand.length - 1
      )
    })

    test('moves played card to discard pile', async () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id] = Object.keys(game.table.players)

      game.table.players[player1Id].hand[0] = carrot.id

      const newGame = await Rules.playCardFromHand(game, player1Id, 0)

      expect(newGame.table.players[player1Id].discardPile).toEqual([carrot.id])
    })

    test('performs card-specific behavior', async () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id] = Object.keys(game.table.players)

      game.table.players[player1Id].hand[0] = carrot.id

      await Rules.playCardFromHand(game, player1Id, 0)

      expect(mockCropHandlePlayFromHand).toHaveBeenCalledWith(
        game,
        player1Id,
        0
      )
    })

    test('throws an error when specified card is not in hand', () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id] = Object.keys(game.table.players)

      expect(async () => {
        await Rules.playCardFromHand(
          game,
          player1Id,
          game.table.players[player1Id].hand.length
        )
      }).rejects.toThrow()
    })
  })
})
