import { isField } from '../../types/guards'

import { Factory } from './'

describe('Factory', () => {
  test('buildField', () => {
    const field = Factory.buildField()

    expect(isField(field)).toBe(true)
  })
})
