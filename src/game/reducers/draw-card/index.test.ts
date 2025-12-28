import { randomNumber } from '../../../services/RandomNumber'
import { stubMatch } from '../../../test-utils/stubs/match'
import { carrot, instantiate, pumpkin, water } from '../../cards'
import { IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

import { drawCard } from '.'

beforeEach(() => {
  vi.spyOn(randomNumber, 'shuffle').mockImplementation(
    <T>(arr: T[] | null | undefined) => arr || []
  )
})

describe('drawCard', () => {
  describe('drawing one card from the deck', () => {
    let match: IMatch
    let newMatch: IMatch
    let player1Id: IPlayer['id']

    beforeAll(() => {
      match = stubMatch()
      const maybePlayer1Id = Object.keys(match.table.players)[0]

      if (!maybePlayer1Id) {
        throw new Error('Player not found')
      }

      player1Id = maybePlayer1Id
      newMatch = drawCard(match, player1Id)
    })

    test("adds the drawn card to the player's hand", () => {
      const player = match.table.players[player1Id]
      const newPlayer = newMatch.table.players[player1Id]

      if (!player || !newPlayer) {
        throw new Error('Player not found')
      }

      const drawnCard = player.deck[0]

      if (!drawnCard) {
        throw new Error('Card not found')
      }

      expect(newPlayer.hand).toEqual([drawnCard])
    })

    test("removes the drawn card from the player's deck", () => {
      const player = match.table.players[player1Id]
      const newPlayer = newMatch.table.players[player1Id]

      if (!player || !newPlayer) {
        throw new Error('Player not found')
      }

      expect(newPlayer.deck).toEqual(player.deck.slice(1))
    })
  })

  describe('draws multiple cards from the deck', () => {
    let match: IMatch
    let newMatch: IMatch
    let player1Id: IPlayer['id']

    beforeAll(() => {
      match = stubMatch()
      const maybePlayer1Id = Object.keys(match.table.players)[0]

      if (!maybePlayer1Id) {
        throw new Error('Player not found')
      }

      player1Id = maybePlayer1Id
      newMatch = drawCard(match, player1Id, 2)
    })

    test("adds the drawn cards to the player's hand", () => {
      const player = match.table.players[player1Id]
      const newPlayer = newMatch.table.players[player1Id]

      if (!player || !newPlayer) {
        throw new Error('Player not found')
      }

      expect(newPlayer.hand).toEqual(player.deck.slice(0, 2))
    })

    test("removes the drawn cards from the player's deck", () => {
      const player = match.table.players[player1Id]
      const newPlayer = newMatch.table.players[player1Id]

      if (!player || !newPlayer) {
        throw new Error('Player not found')
      }

      expect(newPlayer.deck).toEqual(player.deck.slice(2))
    })
  })

  describe('does not draw more cards than there are in the deck', () => {
    let match: IMatch
    let newMatch: IMatch
    let player1Id: IPlayer['id']

    beforeAll(() => {
      match = stubMatch()
      const maybePlayer1Id = Object.keys(match.table.players)[0]

      if (!maybePlayer1Id) {
        throw new Error('Player not found')
      }

      player1Id = maybePlayer1Id
      const player = match.table.players[player1Id]

      if (!player) {
        throw new Error('Player not found')
      }

      newMatch = drawCard(match, player1Id, player.deck.length + 1)
    })

    test("adds the drawn cards to the player's hand", () => {
      const player = match.table.players[player1Id]
      const newPlayer = newMatch.table.players[player1Id]

      if (!player || !newPlayer) {
        throw new Error('Player not found')
      }

      expect(newPlayer.hand).toEqual(player.deck.slice(0))
    })
  })

  describe('drawing the last card in the deck', () => {
    test('shuffles the discard pile into the deck', () => {
      let match = stubMatch()

      const [player1Id] = Object.keys(match.table.players)

      if (!player1Id) {
        throw new Error('Player not found')
      }

      const deck = [
        instantiate(pumpkin),
        instantiate(water),
        instantiate(pumpkin),
      ]
      const discardPile = [instantiate(water), instantiate(carrot)]
      const hand = [instantiate(pumpkin)]

      match = updatePlayer(match, player1Id, { deck, discardPile, hand })
      const player = match.table.players[player1Id]

      if (!player) {
        throw new Error('Player not found')
      }

      const newMatch = drawCard(match, player1Id, player.deck.length + 1)
      const newPlayer = newMatch.table.players[player1Id]

      if (!newPlayer) {
        throw new Error('Player not found')
      }

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(randomNumber.shuffle).toHaveBeenCalledWith(discardPile)
      expect(newPlayer).toMatchObject({
        hand: [...hand, ...deck],
        discardPile: [],
        deck: discardPile,
      })
    })
  })
})
