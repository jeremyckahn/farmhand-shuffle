import { stubPlayer } from '../../../test-utils/stubs/players'
import { pumpkin } from '../../cards/crops/pumpkin'
import { carrot } from '../../cards'
import {
  deckSize,
  initialHandSize,
  initialPlayerFunds,
  standardTaxAmount,
} from '../../config'
import { isGame } from '../../types/guards'
import { handlePlayFromHand as mockCropHandlePlayFromHand } from '../../cards/crops/handlePlayFromHand'
import { IGame, IPlayer } from '../../types'

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

    test('distributes community fund to players', () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.communityFund).toEqual(0)
      expect(game.table.players[player1Id].funds).toEqual(initialPlayerFunds)
      expect(game.table.players[player2Id].funds).toEqual(initialPlayerFunds)
    })
  })

  describe('processTurnStart', () => {
    let game: IGame
    let player1Id: IPlayer['id']
    let player2Id: IPlayer['id']

    beforeEach(() => {
      game = Rules.processGameStart([player1, player2])
      game = Rules.processGameStart([player1, player2])
      player1Id = Object.keys(game.table.players)[0]
      player2Id = Object.keys(game.table.players)[1]
    })

    test('pays tax to community fund', () => {
      const newGame = Rules.processTurnStart(game, player1Id)

      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds - standardTaxAmount
      )

      expect(newGame.table.players[player2Id].funds).toEqual(
        game.table.players[player2Id].funds - standardTaxAmount
      )

      expect(newGame.table.communityFund).toEqual(
        game.table.communityFund + standardTaxAmount * 2
      )
    })

    test('draws a card from the deck', () => {
      const newGame = Rules.processTurnStart(game, player1Id)

      expect(newGame.table.players[player1Id].hand).toEqual([
        ...game.table.players[player1Id].hand,
        game.table.players[player1Id].deck[0],
      ])

      expect(newGame.table.players[player1Id].deck).toEqual(
        game.table.players[player1Id].deck.slice(1)
      )
    })
  })

  describe('playCardFromHand', () => {
    let game: IGame
    let player1Id: IPlayer['id']

    beforeEach(() => {
      ;(
        mockCropHandlePlayFromHand as jest.Mock<Promise<IGame>>
      ).mockImplementation(async (game: IGame) => {
        return game
      })

      game = Rules.processGameStart([player1, player2])
      player1Id = Object.keys(game.table.players)[0]

      game.table.players[player1Id].hand[0] = carrot.id
    })

    test('removes played card from hand', async () => {
      const newGame = await Rules.playCardFromHand(game, player1Id, 0)

      expect(newGame.table.players[player1Id].hand.length).toEqual(
        game.table.players[player1Id].hand.length - 1
      )
    })

    test('moves played card to discard pile', async () => {
      const newGame = await Rules.playCardFromHand(game, player1Id, 0)

      expect(newGame.table.players[player1Id].discardPile).toEqual([carrot.id])
    })

    test('performs card-specific behavior', async () => {
      await Rules.playCardFromHand(game, player1Id, 0)

      expect(mockCropHandlePlayFromHand).toHaveBeenCalledWith(
        game,
        player1Id,
        0
      )
    })

    test('throws an error when specified card is not in hand', () => {
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
