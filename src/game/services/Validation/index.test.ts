import { stubCarrot, stubWater } from '../../../test-utils/stubs/cards'
import { stubPlayer } from '../../../test-utils/stubs/players'
import { DECK_SIZE } from '../../config'
import { CropInstance, IPlayer, WaterInstance } from '../../types'
import { GameStateCorruptError } from '../Rules/errors'

import { validate } from './' // Update path accordingly

describe('ValidationService', () => {
  it('should return true when player deck contains at least one crop', () => {
    const deck: IPlayer['deck'] = [
      stubCarrot,
      ...new Array<WaterInstance>(DECK_SIZE - 1).fill(stubWater),
    ]

    const player = stubPlayer({
      deck,
    })

    expect(validate.playerSeed(player)).toBe(true)
  })

  it('should throw GameStateCorruptError if a card ID is invalid', () => {
    const player = stubPlayer({
      deck: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { id: 'some-nonexistent-card' } as any,
        ...new Array<CropInstance>(DECK_SIZE - 1).fill(stubCarrot),
      ],
    })

    expect(() => validate.playerSeed(player)).toThrow(GameStateCorruptError)
  })

  it("should throw GameStateCorruptError if no crops are found in the player's deck", () => {
    const player = stubPlayer({
      deck: new Array<WaterInstance>(DECK_SIZE).fill(stubWater),
    })

    expect(() => validate.playerSeed(player)).toThrow(GameStateCorruptError)
  })

  it('should throw GameStateCorruptError if deck contains wrong amount of cards', () => {
    const player = stubPlayer({
      deck: [],
    })

    expect(() => validate.playerSeed(player)).toThrow(GameStateCorruptError)
  })
})
