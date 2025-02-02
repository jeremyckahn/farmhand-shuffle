import { stubPlayer } from '../../../test-utils/stubs/players'
import { carrot, water } from '../../cards'
import { GameStateCorruptError } from '../Rules/errors'

import { validate } from './' // Update path accordingly

describe('ValidationService', () => {
  it('should return true when player deck contains at least one crop', () => {
    const player = stubPlayer({
      deck: [carrot.id],
    })

    expect(validate.player(player)).toBe(true)
  })

  it('should throw GameStateCorruptError if a card ID is invalid', () => {
    const player = stubPlayer({
      deck: ['some-nonexistent-card'],
    })

    expect(() => validate.player(player)).toThrow(GameStateCorruptError)
  })

  it("should throw GameStateCorruptError if no crops are found in the player's deck", () => {
    const player = stubPlayer({
      deck: [water.id],
    })

    expect(() => validate.player(player)).toThrow(GameStateCorruptError)
  })

  it('should throw GameStateCorruptError if deck is empty', () => {
    const player = stubPlayer({
      deck: [],
    })

    expect(() => validate.player(player)).toThrow(GameStateCorruptError)
  })
})
