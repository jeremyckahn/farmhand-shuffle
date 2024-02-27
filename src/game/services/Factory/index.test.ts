import { isField, isGame, isPlayer, isTable } from '../../types/guards'
import { carrot } from '../../cards'

import { factory } from '.'

describe('Factory', () => {
  describe('buildField', () => {
    test('builds a field', () => {
      const field = factory.buildField()

      expect(isField(field)).toBe(true)
    })
  })

  describe('buildPlayer', () => {
    test('builds a player', () => {
      const player = factory.buildPlayer()

      expect(isPlayer(player)).toBe(true)
    })
  })

  describe('buildTable', () => {
    test('builds a table', () => {
      const table = factory.buildTable()

      expect(isTable(table)).toBe(true)
    })
  })

  describe('buildGame', () => {
    test('builds a game', () => {
      const game = factory.buildGame()

      expect(isGame(game)).toBe(true)
    })
  })

  describe('buildPlayedCrop', () => {
    test('builds a played crop', () => {
      const playedCard = factory.buildPlayedCrop(carrot)

      expect(playedCard).toEqual({
        id: carrot.id,
        waterCards: 0,
      })
    })
  })
})
