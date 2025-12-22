import { MAX_RANDOM_VALUE } from '../../test-utils/mocks/constants'

import { RandomNumberService } from '.'

describe('RandomNumber', () => {
  afterEach(() => {
    vitest.restoreAllMocks()
  })

  describe('constructor', () => {
    test('produces the same sequence of numbers when the same seed is used', () => {
      const service1 = new RandomNumberService('test-seed')
      const sequence1 = Array.from({ length: 5 }, () => service1.generate())

      const service2 = new RandomNumberService('test-seed')
      const sequence2 = Array.from({ length: 5 }, () => service2.generate())

      expect(sequence1).toEqual(sequence2)
    })

    test('defaults to standard non-deterministic behavior when no seed is provided', () => {
      const service = new RandomNumberService()
      vitest.spyOn(Math, 'random').mockReturnValueOnce(0.5)

      const generatedNumber = service.generate()
      expect(generatedNumber).toEqual(0.5)
    })
  })

  describe('generate', () => {
    test('generates random number', () => {
      const service = new RandomNumberService()
      vitest.spyOn(Math, 'random').mockReturnValueOnce(0.5)

      const generatedNumber = service.generate()

      expect(generatedNumber).toEqual(0.5)
    })
  })

  describe('shuffle', () => {
    test('produces the same shuffled order when the same seed is used', () => {
      const list = [1, 2, 3, 4, 5]
      const service1 = new RandomNumberService('test-seed')
      const shuffled1 = service1.shuffle(list)

      const service2 = new RandomNumberService('test-seed')
      const shuffled2 = service2.shuffle(list)

      expect(shuffled1).toEqual(shuffled2)
    })

    test('produces different shuffled orders for unseeded instances (mocked)', () => {
      const list = [1, 2, 3, 4, 5]
      const service1 = new RandomNumberService()
      const service2 = new RandomNumberService()

      // Mock generate to produce different values
      vitest
        .spyOn(service1, 'generate')
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.2)
        .mockReturnValueOnce(0.3)
        .mockReturnValueOnce(0.4)
      vitest
        .spyOn(service2, 'generate')
        .mockReturnValueOnce(0.9)
        .mockReturnValueOnce(0.8)
        .mockReturnValueOnce(0.7)
        .mockReturnValueOnce(0.6)

      const shuffled1 = service1.shuffle(list)
      const shuffled2 = service2.shuffle(list)

      expect(shuffled1).not.toEqual(shuffled2)
    })

    test('returns a new array reference (immutability)', () => {
      const list = [1, 2, 3]
      const service = new RandomNumberService()
      const shuffled = service.shuffle(list)

      expect(shuffled).not.toBe(list)
      expect(list).toEqual([1, 2, 3])
    })
  })

  describe('randomIndex', () => {
    test.each([
      { generateMock: 0.5, list: [1, 2, 3], result: 1 },
      { generateMock: MAX_RANDOM_VALUE, list: [1, 2, 3], result: 2 },
      { generateMock: 0, list: [], result: undefined },
    ])(
      'choses a random index ($result) from an array $list',
      ({ generateMock, list, result }) => {
        const service = new RandomNumberService()
        vitest.spyOn(service, 'generate').mockReturnValueOnce(generateMock)

        const selectedIndex = service.randomIndex(list)

        expect(selectedIndex).toEqual(result)
      }
    )
  })

  describe('chooseElement', () => {
    test('choses a random element from an array', () => {
      const service = new RandomNumberService()
      vitest.spyOn(service, 'generate').mockReturnValueOnce(0.5)

      const selectedIndex = service.chooseElement([1, 2, 3])

      expect(selectedIndex).toEqual(2)
    })
  })

  describe('chooseInteger', () => {
    test.each([
      { a: 1, b: 2, rngStub: 0, expected: 1 },
      { a: 1, b: 2, rngStub: 1, expected: 2 },
      { a: 1, b: 2, rngStub: 1, expected: 2 },
      { a: 2, b: 1, rngStub: 1, expected: 2 },
      { a: 1, b: 2, rngStub: 0.5, expected: 2 },
      { a: 2, b: 1, rngStub: 0.5, expected: 2 },
      { a: 0, b: 10, rngStub: 0.5, expected: 5 },
      { a: 1, b: 10, rngStub: 0.5, expected: 6 },
      { a: 10, b: 1, rngStub: 0.5, expected: 6 },
      { a: 5, b: 5, rngStub: 0.5, expected: 5 },
      { a: -5, b: 5, rngStub: 0.5, expected: 0 },
    ])(
      'chooses a random number between $a and $b',
      ({ a, b, rngStub, expected }) => {
        const service = new RandomNumberService()
        vitest.spyOn(service, 'generate').mockReturnValueOnce(rngStub)

        const selectedNumber = service.chooseIntegerBetween(a, b)

        expect(selectedNumber).toEqual(expected)
      }
    )

    test.each([
      { a: 1, b: 2.5 },
      { a: 1.2, b: 2 },
    ])('throws an error if provided a floating point', ({ a, b }) => {
      const service = new RandomNumberService()
      expect(() => {
        service.chooseIntegerBetween(a, b)
      }).toThrow()
    })
  })
})
