import { isGame } from '../../types/guards/index'

import { Rules } from './Rules'

describe('Rules', () => {
  describe('processGameStart', () => {
    test('creates a new game', () => {
      const game = Rules.processGameStart()

      expect(isGame(game)).toBe(true)
    })
  })
})
