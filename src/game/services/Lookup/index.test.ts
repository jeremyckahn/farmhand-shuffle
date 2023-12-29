import { carrot } from '../../cards'
import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../../reducers/update-player'
import { GameStateCorruptError } from '../Rules/errors'
import { stubGame } from '../../../test-utils/stubs/game'

import { lookup } from '.'

const game = stubGame()

describe('Lookup', () => {
  describe('getCardFromHand', () => {
    let mutatedGame: IGame
    let player1Id: IPlayer['id']

    beforeEach(() => {
      mutatedGame = stubGame()
      player1Id = Object.keys(mutatedGame.table.players)[0]

      mutatedGame.table.players[player1Id].hand[0] = carrot.id
    })

    test('returns card from hand', () => {
      const card = lookup.getCardFromHand(mutatedGame, player1Id, 0)

      expect(card).toBe(carrot)
    })

    test('throws an error when specified card is not in hand', () => {
      expect(() => {
        lookup.getCardFromHand(
          mutatedGame,
          player1Id,
          mutatedGame.table.players[player1Id].hand.length
        )
      }).toThrow()
    })

    test('throws an error when specified card is not valid', () => {
      mutatedGame = updatePlayer(mutatedGame, player1Id, {
        hand: ['some-card-that-does-not-exist'],
      })

      expect(() => {
        lookup.getCardFromHand(mutatedGame, player1Id, 0)
      }).toThrow(GameStateCorruptError)
    })
  })

  describe('getOpponentPlayerIds', () => {
    test('returns opponent player IDs', () => {
      const opponentPlayerIds = lookup.getOpponentPlayerIds(game)

      expect(opponentPlayerIds).toHaveLength(1)
      expect(opponentPlayerIds).not.toContain(game.currentPlayerId)
    })
  })
})
