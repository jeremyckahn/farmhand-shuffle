import { MockInstance } from 'vitest'
import shuffle from 'lodash.shuffle'

import { stubGame } from '../../../test-utils/stubs/game'
import { carrot, pumpkin, water } from '../../cards'
import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

import { drawCard } from '.'

vitest.mock('lodash.shuffle', () => ({
  __esModule: true,
  default: vitest.fn(),
}))

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation((arr: any[]) => arr)
})

describe('drawCard', () => {
  describe('drawing one card from the deck', () => {
    let game: IGame
    let newGame: IGame
    let player1Id: IPlayer['id']

    beforeAll(() => {
      game = stubGame()
      player1Id = Object.keys(game.table.players)[0]
      newGame = drawCard(game, player1Id)
    })

    test("adds the drawn card to the player's hand", () => {
      expect(newGame.table.players[player1Id].hand).toEqual([
        game.table.players[player1Id].deck[0],
      ])
    })

    test("removes the drawn card from the player's deck", () => {
      expect(newGame.table.players[player1Id].deck).toEqual(
        game.table.players[player1Id].deck.slice(1)
      )
    })
  })

  describe('draws multiple cards from the deck', () => {
    let game: IGame
    let newGame: IGame
    let player1Id: IPlayer['id']

    beforeAll(() => {
      game = stubGame()
      player1Id = Object.keys(game.table.players)[0]
      newGame = drawCard(game, player1Id, 2)
    })

    test("adds the drawn cards to the player's hand", () => {
      expect(newGame.table.players[player1Id].hand).toEqual(
        game.table.players[player1Id].deck.slice(0, 2)
      )
    })

    test("removes the drawn cards from the player's deck", () => {
      expect(newGame.table.players[player1Id].deck).toEqual(
        game.table.players[player1Id].deck.slice(2)
      )
    })
  })

  describe('does not draw more cards than there are in the deck', () => {
    let game: IGame
    let newGame: IGame
    let player1Id: IPlayer['id']

    beforeAll(() => {
      game = stubGame()
      player1Id = Object.keys(game.table.players)[0]
      newGame = drawCard(
        game,
        player1Id,
        game.table.players[player1Id].deck.length + 1
      )
    })

    test("adds the drawn cards to the player's hand", () => {
      expect(newGame.table.players[player1Id].hand).toEqual(
        game.table.players[player1Id].deck.slice(0)
      )
    })
  })

  describe('drawing the last card in the deck', () => {
    test('shuffles the discard pile into the deck', () => {
      let game = stubGame()

      const [player1Id] = Object.keys(game.table.players)

      const deck = [pumpkin.id, water.id, pumpkin.id]
      const discardPile = [water.id, carrot.id]
      const hand = [pumpkin.id]
      game = updatePlayer(game, player1Id, { deck, discardPile, hand })

      const newGame = drawCard(
        game,
        player1Id,
        game.table.players[player1Id].deck.length + 1
      )

      expect(shuffle).toHaveBeenCalledWith(discardPile)
      expect(newGame.table.players[player1Id]).toMatchObject({
        hand: [...hand, ...deck],
        discardPile: [],
        deck: discardPile,
      })
    })
  })
})
