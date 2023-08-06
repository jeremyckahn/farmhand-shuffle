import { isField, isPlayer } from '../../types/guards'

import { Factory } from './'

describe('Factory', () => {
  test('buildField', () => {
    const field = Factory.buildField()

    expect(isField(field)).toBe(true)
  })

  test('buildPlayer', () => {
    const player = Factory.buildPlayer()

    expect(isPlayer(player)).toBe(true)
  })
})
