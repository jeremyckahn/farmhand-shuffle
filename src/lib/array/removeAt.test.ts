import { removeAt } from './removeAt'

describe('removeAt', () => {
  test('removes an element from an array', () => {
    const array = removeAt([1, 2, 3], 1)

    expect(array).toEqual([1, 3])
  })

  test('throws an out of bounds error', () => {
    expect(() => {
      removeAt([1, 2, 3], 3)
    }).toThrow()
  })
})
