import { MockInstance } from 'vitest'
import shuffle from 'lodash.shuffle'

import { stubMatch } from '../../../test-utils/stubs/match'
import { carrot, instantiate, pumpkin, water } from '../../cards'
import { ICard, IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

import { drawCard } from '.'

vitest.mock('lodash.shuffle')

beforeEach(() => {
  ;(shuffle as unknown as MockInstance).mockImplementation(
    (arr: ICard[]) => arr
  )
})

describe('drawCard', () => {
  describe('drawing one card from the deck', () => {
    let match: IMatch
    let newMatch: IMatch
    let player1Id: IPlayer['id']

    beforeAll(() => {
      match = stubMatch()
      player1Id = Object.keys(match.table.players)[0]
      newMatch = drawCard(match, player1Id)
    })

    test("adds the drawn card to the player's hand", () => {
      expect(newMatch.table.players[player1Id].hand).toEqual([
        match.table.players[player1Id].deck[0],
      ])
    })

    test("removes the drawn card from the player's deck", () => {
      expect(newMatch.table.players[player1Id].deck).toEqual(
        match.table.players[player1Id].deck.slice(1)
      )
    })
  })

  describe('draws multiple cards from the deck', () => {
    let match: IMatch
    let newMatch: IMatch
    let player1Id: IPlayer['id']

    beforeAll(() => {
      match = stubMatch()
      player1Id = Object.keys(match.table.players)[0]
      newMatch = drawCard(match, player1Id, 2)
    })

    test("adds the drawn cards to the player's hand", () => {
      expect(newMatch.table.players[player1Id].hand).toEqual(
        match.table.players[player1Id].deck.slice(0, 2)
      )
    })

    test("removes the drawn cards from the player's deck", () => {
      expect(newMatch.table.players[player1Id].deck).toEqual(
        match.table.players[player1Id].deck.slice(2)
      )
    })
  })

  describe('does not draw more cards than there are in the deck', () => {
    let match: IMatch
    let newMatch: IMatch
    let player1Id: IPlayer['id']

    beforeAll(() => {
      match = stubMatch()
      player1Id = Object.keys(match.table.players)[0]
      newMatch = drawCard(
        match,
        player1Id,
        match.table.players[player1Id].deck.length + 1
      )
    })

    test("adds the drawn cards to the player's hand", () => {
      expect(newMatch.table.players[player1Id].hand).toEqual(
        match.table.players[player1Id].deck.slice(0)
      )
    })
  })

  describe('drawing the last card in the deck', () => {
    test('shuffles the discard pile into the deck', () => {
      let match = stubMatch()

      const [player1Id] = Object.keys(match.table.players)

      const deck = [
        instantiate(pumpkin),
        instantiate(water),
        instantiate(pumpkin),
      ]
      const discardPile = [instantiate(water), instantiate(carrot)]
      const hand = [instantiate(pumpkin)]
      match = updatePlayer(match, player1Id, { deck, discardPile, hand })

      const newMatch = drawCard(
        match,
        player1Id,
        match.table.players[player1Id].deck.length + 1
      )

      expect(shuffle).toHaveBeenCalledWith(discardPile)
      expect(newMatch.table.players[player1Id]).toMatchObject({
        hand: [...hand, ...deck],
        discardPile: [],
        deck: discardPile,
      })
    })
  })
})
