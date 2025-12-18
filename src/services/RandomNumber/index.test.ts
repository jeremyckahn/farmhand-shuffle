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

  describe('randomIndex', () => {
    test.each([
      { generateMock: 0.5, list: [1, 2, 3], result: 1 },
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
