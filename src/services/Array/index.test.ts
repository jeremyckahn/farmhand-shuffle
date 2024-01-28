import { arrayService } from '.'

describe('ArrayService', () => {
  describe('removeAt', () => {
    test('removes an element from an array', () => {
      const array = arrayService.removeAt([1, 2, 3], 1)

      expect(array).toEqual([1, 3])
    })

    test('throws an out of bounds error', () => {
      expect(() => {
        arrayService.removeAt([1, 2, 3], 3)
      }).toThrow()
    })
  })
})
