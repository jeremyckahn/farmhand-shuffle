import { test } from 'vitest'

import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { carrot, instantiate, pumpkin, water } from '../../cards'
import { updatePlayer } from '../../reducers/update-player'
import { IGame, IPlayer } from '../../types'
import { isPlayer } from '../../types/guards'
import { InvalidIdError } from '../Rules/errors'

import { lookup } from '.'

const game = stubGame()

describe('Lookup', () => {
  describe('getCardFromHand', () => {
    let mutatedGame: IGame
    let player1Id: IPlayer['id']

    beforeEach(() => {
      mutatedGame = stubGame()
      player1Id = Object.keys(mutatedGame.table.players)[0]

      // eslint-disable-next-line functional/immutable-data
      mutatedGame.table.players[player1Id].hand[0] = stubCarrot
    })

    test('returns card from hand', () => {
      const cardInstance = lookup.getCardFromHand(mutatedGame, player1Id, 0)

      expect(cardInstance).toBe(stubCarrot)
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
  })

  describe('getOpponentPlayerIds', () => {
    test('returns opponent player IDs', () => {
      const opponentPlayerIds = lookup.getOpponentPlayerIds(game)
      const playerIds = Object.keys(game.table.players)

      expect(opponentPlayerIds).toHaveLength(playerIds.length - 1)
      expect(opponentPlayerIds).not.toContain(game.currentPlayerId)
    })
  })

  describe('getPlayer', () => {
    test('retrieves player', () => {
      const player = lookup.getPlayer(game, game.sessionOwnerPlayerId)

      expect(isPlayer(player)).toEqual(true)
    })

    test('throws an error when unavailable player is requested', () => {
      expect(() => {
        lookup.getPlayer(game, '')
      }).toThrow(InvalidIdError)
    })
  })

  describe('findCropIndexesInDeck', () => {
    test.each([
      { deck: [], howMany: undefined, expected: [] },
      { deck: [], howMany: 1, expected: [] },
      { deck: [instantiate(carrot)], howMany: 1, expected: [0] },
      { deck: [instantiate(water)], howMany: 1, expected: [] },
      {
        deck: [instantiate(carrot), instantiate(water), instantiate(carrot)],
        howMany: 3,
        expected: [0, 2],
      },
    ])(
      'retrieves $howMany crop indices in deck ($deck)',
      ({ deck, howMany, expected }) => {
        let game = stubGame()

        game = updatePlayer(game, stubPlayer1.id, {
          deck,
        })

        const cropIndexesInDeck = lookup.findCropIndexesInDeck(
          game,
          stubPlayer1.id,
          howMany
        )

        expect(cropIndexesInDeck).toEqual(expected)
      }
    )
  })

  describe('findCropIndexesInPlayerHand', () => {
    test.each([
      { hand: [], expected: [] },
      { hand: [instantiate(carrot)], expected: [0] },
      {
        hand: [
          instantiate(carrot),
          instantiate(water),
          instantiate(water),
          instantiate(pumpkin),
        ],
        expected: [0, 3],
      },
    ])('retrieves crop indices in hand ($hand)', ({ hand, expected }) => {
      let game = stubGame()

      game = updatePlayer(game, stubPlayer1.id, {
        hand,
      })

      const cropIndexesInHand = lookup.findCropIndexesInPlayerHand(
        game,
        stubPlayer1.id
      )

      expect(cropIndexesInHand).toEqual(expected)
    })
  })
})
