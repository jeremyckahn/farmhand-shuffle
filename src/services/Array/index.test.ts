import { array } from '.'

describe('ArrayService', () => {
  describe('removeAt', () => {
    test('removes an element from an array', () => {
      const arr = array.removeAt([1, 2, 3], 1)

      expect(arr).toEqual([1, 3])
    })

    test('throws an out of bounds error', () => {
      expect(() => {
        array.removeAt([1, 2, 3], 3)
      }).toThrow()
    })
  })

  describe('replaceAt', () => {
    test('replaces an element in an array', () => {
      const arr = array.replaceAt([1, 2, 3], 1, 4)

      expect(arr).toEqual([1, 4, 3])
    })
  })
})
