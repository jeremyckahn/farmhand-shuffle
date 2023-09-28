import { RandomNumber } from '.'

describe('RandomNumber', () => {
  describe('generate', () => {
    test('generates random number', () => {
      jest.spyOn(Math, 'random').mockReturnValueOnce(0.5)

      const generatedNumber = RandomNumber.generate()

      expect(generatedNumber).toEqual(0.5)
    })
  })

  describe('randomIndex', () => {
    test('choses a random index from an array', () => {
      jest.spyOn(RandomNumber, 'generate').mockReturnValueOnce(0.5)

      const selectedIndex = RandomNumber.randomIndex([1, 2, 3])

      expect(selectedIndex).toEqual(1)
    })
  })

  describe('chooseElement', () => {
    test('choses a random element from an array', () => {
      jest.spyOn(RandomNumber, 'generate').mockReturnValueOnce(0.5)

      const selectedIndex = RandomNumber.chooseElement([1, 2, 3])

      expect(selectedIndex).toEqual(2)
    })
  })
})
