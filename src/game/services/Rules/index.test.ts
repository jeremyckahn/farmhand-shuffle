import { MockInstance } from 'vitest'
import shuffle from 'lodash.shuffle'

import { stubPlayer } from '../../../test-utils/stubs/players'
import {
  DECK_SIZE,
  INITIAL_HAND_SIZE,
  INITIAL_PLAYER_FUNDS,
  STANDARD_TAX_AMOUNT,
} from '../../config'
import { isGame } from '../../types/guards'
import { handlePlayFromHand as mockCropHandlePlayFromHand } from '../../cards/crops/handlePlayFromHand'
import { ICard, IGame, IPlayer } from '../../types'
import { updatePlayer } from '../../reducers/update-player'
import { randomNumber } from '../../../services/RandomNumber'
import { carrot, pumpkin } from '../../cards'
import { stubInteractionHandlers } from '../../../test-utils/stubs/interactionHandlers'

import { rules } from '.'

const player1 = stubPlayer()
const player2 = stubPlayer()
const interactionHandlers = stubInteractionHandlers()

vitest.mock('../../cards/crops/handlePlayFromHand', () => {
  return {
    handlePlayFromHand: vitest.fn(),
  }
})

vitest.mock('lodash.shuffle', () => ({
  __esModule: true,
  default: vitest.fn(),
}))

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation(
    (arr: ICard[]) => arr
  )
})

// Make player2's deck slightly different from player1's to prevent false
// positives.
// eslint-disable-next-line functional/immutable-data
player2.deck[DECK_SIZE - 1] = pumpkin.id

describe('Rules', () => {
  describe('initializeGame', () => {
    test('creates a new game', () => {
      const game = rules.initializeGame([player1, player2])

      expect(isGame(game)).toBe(true)
    })

    test('shuffles decks', () => {
      rules.initializeGame([player1, player2])

      expect(shuffle).toHaveBeenCalledWith(player1.deck)
      expect(shuffle).toHaveBeenCalledWith(player2.deck)
      expect(shuffle).toHaveBeenCalledTimes(2)
    })

    test('sets up player hands', () => {
      const game = rules.initializeGame([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.players[player1Id].hand).toEqual(
        player1.deck.slice(0, INITIAL_HAND_SIZE)
      )

      expect(game.table.players[player2Id].hand).toEqual(
        player2.deck.slice(0, INITIAL_HAND_SIZE)
      )
    })

    test('distributes community fund to players', () => {
      const game = rules.initializeGame([player1, player2])
      const [player1Id, player2Id] = Object.keys(game.table.players)

      expect(game.table.communityFund).toEqual(0)
      expect(game.table.players[player1Id].funds).toEqual(INITIAL_PLAYER_FUNDS)
      expect(game.table.players[player2Id].funds).toEqual(INITIAL_PLAYER_FUNDS)
    })

    test('determines first player', () => {
      vitest.spyOn(randomNumber, 'generate').mockReturnValueOnce(1)
      const game = rules.initializeGame([player1, player2])
      const [, player2Id] = Object.keys(game.table.players)

      expect(game.currentPlayerId).toEqual(player2Id)
    })
  })

  describe('processTurnStart', () => {
    let game: IGame
    let player1Id: IPlayer['id']

    beforeEach(() => {
      game = rules.initializeGame([player1, player2])
      player1Id = Object.keys(game.table.players)[0]
    })

    test('pays tax to community fund', () => {
      const newGame = rules.processTurnStart(game, player1Id)

      expect(newGame.table.players[player1Id].funds).toEqual(
        game.table.players[player1Id].funds - STANDARD_TAX_AMOUNT
      )

      expect(newGame.table.communityFund).toEqual(
        game.table.communityFund + STANDARD_TAX_AMOUNT
      )
    })

    test('aborts if player is out of money after paying tax', () => {
      const newGame = updatePlayer(game, player1Id, {
        funds: STANDARD_TAX_AMOUNT,
      })

      expect(() => {
        rules.processTurnStart(newGame, player1Id)
      }).toThrow(`[PlayerOutOfFundsError] Player ${player1Id} is out of funds.`)
    })

    test('draws a card from the deck', () => {
      const newGame = rules.processTurnStart(game, player1Id)

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
      vitest.spyOn(randomNumber, 'generate').mockReturnValueOnce(1)
      const game = rules.initializeGame([player1, player2])
      const [player1Id] = Object.keys(game.table.players)

      const newGame = rules.processTurnEnd(game)

      expect(newGame.currentPlayerId).toEqual(player1Id)
    })
  })

  describe('playCardFromHand', () => {
    let game: IGame
    let player1Id: IPlayer['id']

    beforeEach(() => {
      ;(
        mockCropHandlePlayFromHand as unknown as MockInstance<
          typeof mockCropHandlePlayFromHand
        >
      ).mockImplementation((game: IGame) => {
        return Promise.resolve(game)
      })

      game = rules.initializeGame([player1, player2])
      player1Id = Object.keys(game.table.players)[0]

      // eslint-disable-next-line functional/immutable-data
      game.table.players[player1Id].hand[0] = carrot.id
    })

    test('removes played card from hand', async () => {
      const newGame = await rules.playCardFromHand(
        game,
        interactionHandlers,
        player1Id,
        0
      )

      expect(newGame.table.players[player1Id].hand.length).toEqual(
        game.table.players[player1Id].hand.length - 1
      )
    })

    test('moves played card to discard pile', async () => {
      const newGame = await rules.playCardFromHand(
        game,
        interactionHandlers,
        player1Id,
        0
      )

      expect(newGame.table.players[player1Id].discardPile).toEqual([carrot.id])
    })

    test('performs card-specific behavior', async () => {
      await rules.playCardFromHand(game, interactionHandlers, player1Id, 0)

      expect(mockCropHandlePlayFromHand).toHaveBeenCalledWith(
        game,
        interactionHandlers,
        player1Id,
        0
      )
    })
  })
})
