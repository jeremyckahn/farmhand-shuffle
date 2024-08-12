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
    test('choses a random index from an array', () => {
      vitest.spyOn(randomNumber, 'generate').mockReturnValueOnce(0.5)

      const selectedIndex = randomNumber.randomIndex([1, 2, 3])

      expect(selectedIndex).toEqual(1)
    })
  })

  describe('chooseElement', () => {
    test('choses a random element from an array', () => {
      vitest.spyOn(randomNumber, 'generate').mockReturnValueOnce(0.5)

      const selectedIndex = randomNumber.chooseElement([1, 2, 3])

      expect(selectedIndex).toEqual(2)
    })
  })
})
