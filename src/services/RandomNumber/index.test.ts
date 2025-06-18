import { randomNumber } from '.'

describe('RandomNumber', () => {
  describe('generate', () => {
    test('generates random number', () => {
      vitest.spyOn(Math, 'random').mockReturnValueOnce(0.5)

      const generatedNumber = randomNumber.generate()

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
        vitest.spyOn(randomNumber, 'generate').mockReturnValueOnce(generateMock)

        const selectedIndex = randomNumber.randomIndex(list)

        expect(selectedIndex).toEqual(result)
      }
    )
  })

  describe('chooseElement', () => {
    test('choses a random element from an array', () => {
      vitest.spyOn(randomNumber, 'generate').mockReturnValueOnce(0.5)

      const selectedIndex = randomNumber.chooseElement([1, 2, 3])

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
        vitest.spyOn(randomNumber, 'generate').mockReturnValueOnce(rngStub)

        const selectedNumber = randomNumber.chooseIntegerBetween(a, b)

        expect(selectedNumber).toEqual(expected)
      }
    )

    test.each([
      { a: 1, b: 2.5 },
      { a: 1.2, b: 2 },
    ])('throws an error if provided a floating point', ({ a, b }) => {
      expect(() => {
        randomNumber.chooseIntegerBetween(a, b)
      }).toThrow()
    })
  })
})
