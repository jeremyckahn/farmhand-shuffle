import { carrot } from '../../cards'
import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../../reducers/update-player'
import { GameStateCorruptError } from '../Rules/errors'
import { stubGame } from '../../../test-utils/stubs/game'

import { lookup } from '.'

describe('Lookup', () => {
  describe('getCardFromHand', () => {
    let game: IGame
    let player1Id: IPlayer['id']

    beforeEach(() => {
      game = stubGame()
      player1Id = Object.keys(game.table.players)[0]

      game.table.players[player1Id].hand[0] = carrot.id
    })

    test('returns card from hand', () => {
      const card = lookup.getCardFromHand(game, player1Id, 0)

      expect(card).toBe(carrot)
    })

    test('throws an error when specified card is not in hand', () => {
      expect(() => {
        lookup.getCardFromHand(
          game,
          player1Id,
          game.table.players[player1Id].hand.length
        )
      }).toThrow()
    })

    test('throws an error when specified card is not valid', () => {
      game = updatePlayer(game, player1Id, {
        hand: ['some-card-that-does-not-exist'],
      })

      expect(() => {
        lookup.getCardFromHand(game, player1Id, 0)
      }).toThrow(GameStateCorruptError)
    })
  })
})
