import { stubCarrot, stubWater } from '../../../test-utils/stubs/cards'
import { stubPlayer } from '../../../test-utils/stubs/players'
import { GameStateCorruptError } from '../Rules/errors'

import { validate } from './' // Update path accordingly

describe('ValidationService', () => {
  it('should return true when player deck contains at least one crop', () => {
    const player = stubPlayer({
      deck: [stubCarrot],
    })

    expect(validate.player(player)).toBe(true)
  })

  it('should throw GameStateCorruptError if a card ID is invalid', () => {
    const player = stubPlayer({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      deck: [{ id: 'some-nonexistent-card' } as any],
    })

    expect(() => validate.player(player)).toThrow(GameStateCorruptError)
  })

  it("should throw GameStateCorruptError if no crops are found in the player's deck", () => {
    const player = stubPlayer({
      deck: [stubWater],
    })

    expect(() => validate.player(player)).toThrow(GameStateCorruptError)
  })

  // TODO: Revisit this. It should be valid for the player to have an empty
  // deck.
  it('should throw GameStateCorruptError if deck is empty', () => {
    const player = stubPlayer({
      deck: [],
    })

    expect(() => validate.player(player)).toThrow(GameStateCorruptError)
  })
})
