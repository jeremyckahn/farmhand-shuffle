import { RandomNumber } from '.'

describe('RandomNumber', () => {
  test('generates random number', () => {
    jest.spyOn(Math, 'random').mockReturnValueOnce(0.5)

    const generatedNumber = RandomNumber.generate()

    expect(generatedNumber).toEqual(0.5)
  })
})
