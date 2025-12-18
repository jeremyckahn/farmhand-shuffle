import { randomNumber } from '../../../services/RandomNumber'
import { stubPumpkin, stubWater } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

import { pullCardFromDeck } from '.'

beforeEach(() => {
  vi.spyOn(randomNumber, 'shuffle').mockImplementation(
    <T>(arr: T[] | null | undefined) => arr || []
  )
})

describe('pullCardFromDeck', () => {
  test('pulls card from top of deck', () => {
    const match = stubMatch()
    const player1Id = Object.keys(match.table.players)[0]

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const newMatch = pullCardFromDeck(match, player1Id, 0)

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
    expect(newPlayer.deck).toEqual(player.deck.slice(1))
  })

  test('pulls card from middle of deck', () => {
    let match = stubMatch()
    const player1Id = stubPlayer1.id

    const deck = [stubPumpkin, stubWater]
    const hand: IPlayer['hand'] = []

    match = updatePlayer(match, player1Id, { deck, hand })
    match = pullCardFromDeck(match, player1Id, 1)

    const player = match.table.players[player1Id]

    if (!player) {
      throw new Error('Player not found')
    }

    expect(player.hand).toEqual([stubWater])
    expect(player.deck).toEqual([stubPumpkin])
  })

  describe('drawing the last card in the deck', () => {
    test('shuffles the discard pile into the deck', () => {
      let match = stubMatch()

      const [player1Id] = Object.keys(match.table.players)

      if (!player1Id) {
        throw new Error('Player not found')
      }

      const deck = [stubPumpkin]
      const discardPile = [stubWater]
      const hand: IPlayer['hand'] = []
      match = updatePlayer(match, player1Id, { deck, discardPile, hand })

      const newMatch = pullCardFromDeck(match, player1Id, 0)
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

  test('throws out of bounds error', () => {
    let match = stubMatch()
    const player1Id = stubPlayer1.id

    const deck = [stubPumpkin, stubWater]
    const hand: IPlayer['hand'] = []

    match = updatePlayer(match, player1Id, { deck, hand })

    expect(() => {
      pullCardFromDeck(match, player1Id, 2)
    }).toThrowError(InvalidCardIndexError)
  })
})
