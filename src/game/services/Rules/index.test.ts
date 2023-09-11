import shuffle from 'lodash.shuffle'

import { stubPlayer } from '../../../test-utils/stubs/players'
import { pumpkin } from '../../cards/crops/pumpkin'
import { carrot } from '../../cards'
import {
  DECK_SIZE,
  INITIAL_HAND_SIZE,
  INITIAL_PLAYER_FUNDS,
  STANDARD_TAX_AMOUNT,
} from '../../config'
import { isGame } from '../../types/guards'
import { handlePlayFromHand as mockCropHandlePlayFromHand } from '../../cards/crops/handlePlayFromHand'
import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../../reducers/update-player'
import { RandomNumber } from '../../../services/RandomNumber'

import { Rules } from '.'

const player1 = stubPlayer()
const player2 = stubPlayer()

jest.mock('../../cards/crops/handlePlayFromHand', () => {
  return {
    handlePlayFromHand: jest.fn(),
  }
})

jest.mock('lodash.shuffle', () => ({
  __esModule: true,
  default: jest.fn(),
}))

beforeEach(() => {
  ;(shuffle as jest.Mock).mockImplementation((arr: any[]) => arr)
})

// Make player2's deck slightly different from player1's to prevent false
// positives.
player2.deck[DECK_SIZE - 1] = pumpkin.id

describe('Rules', () => {
  describe('processGameStart', () => {
    test('creates a new game', () => {
      const game = Rules.processGameStart([player1, player2])

      expect(isGame(game)).toBe(true)
    })

    test('shuffles decks', () => {
      Rules.processGameStart([player1, player2])

      expect(shuffle).toHaveBeenCalledWith(player1.deck)
      expect(shuffle).toHaveBeenCalledWith(player2.deck)
      expect(shuffle).toHaveBeenCalledTimes(2)
    })

    test('sets up player hands', () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.players[player1Id].hand).toEqual(
        player1.deck.slice(0, INITIAL_HAND_SIZE)
      )

      expect(game.table.players[player2Id].hand).toEqual(
        player2.deck.slice(0, INITIAL_HAND_SIZE)
      )
    })

    test('distributes community fund to players', () => {
      const game = Rules.processGameStart([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.communityFund).toEqual(0)
      expect(game.table.players[player1Id].funds).toEqual(INITIAL_PLAYER_FUNDS)
      expect(game.table.players[player2Id].funds).toEqual(INITIAL_PLAYER_FUNDS)
    })

    test('determines first player', () => {
      jest.spyOn(RandomNumber, 'generate').mockReturnValueOnce(1)
      const game = Rules.processGameStart([player1, player2])
      const [, player2Id] = Object.keys(game.table.players)

      expect(game.currentPlayerId).toEqual(player2Id)
    })
  })

  describe('processTurnStart', () => {
    let game: IGame
    let player1Id: IPlayer['id']

    beforeEach(() => {
      game = Rules.processGameStart([player1, player2])
      player1Id = Object.keys(game.table.players)[0]
    })

    test('pays tax to community fund', () => {
      const newGame = Rules.processTurnStart(game, player1Id)

      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds - STANDARD_TAX_AMOUNT
      )

      expect(newGame.table.communityFund).toEqual(
        game.table.communityFund + STANDARD_TAX_AMOUNT
      )
    })

    test('aborts if player is out of money after paying tax', () => {
      let newGame = updatePlayer(game, player1Id, {
        funds: STANDARD_TAX_AMOUNT,
      })

      expect(() => {
        Rules.processTurnStart(newGame, player1Id)
      }).toThrow(`[PlayerOutOfFundsError] Player ${player1Id} is out of funds.`)
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

  describe('processTurnEnd', () => {
    test('increments player', () => {
      jest.spyOn(RandomNumber, 'generate').mockReturnValueOnce(1)
      const game = Rules.processGameStart([player1, player2])
      const [player1Id] = Object.keys(game.table.players)

      const newGame = Rules.processTurnEnd(game)

      expect(newGame.currentPlayerId).toEqual(player1Id)
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

    test('throws an error when specified card is not valid', () => {
      game = updatePlayer(game, player1Id, {
        hand: ['some-card-that-does-not-exist'],
      })

      expect(async () => {
        await Rules.playCardFromHand(game, player1Id, 0)
      }).rejects.toThrow()
    })
  })
})
