import { mathService } from './index'

describe('MathService', () => {
  describe('scaleNumber', () => {
    test.each([
      {
        value: 0,
        localRangeMin: 0,
        localRangeMax: 10,
        targetRangeMin: 0,
        targetRangeMax: 10,
        expected: 0,
      },
      {
        value: 1,
        localRangeMin: 0,
        localRangeMax: 10,
        targetRangeMin: 0,
        targetRangeMax: 10,
        expected: 1,
      },
      {
        value: 0,
        localRangeMin: 0,
        localRangeMax: 10,
        targetRangeMin: -10,
        targetRangeMax: 10,
        expected: -10,
      },
      {
        value: 10,
        localRangeMin: 0,
        localRangeMax: 10,
        targetRangeMin: -10,
        targetRangeMax: 10,
        expected: 10,
      },
      {
        value: -1,
        localRangeMin: 0,
        localRangeMax: 10,
        targetRangeMin: -10,
        targetRangeMax: 10,
        expected: -12,
      },
    ])(
      'scales $value from ($localRangeMin, $localRangeMax) to ($targetRangeMin, $targetRangeMax)',
      ({
        value,
        localRangeMin,
        localRangeMax,
        targetRangeMin,
        targetRangeMax,
        expected,
      }) => {
        expect(
          mathService.scaleNumber(
            value,
            localRangeMin,
            localRangeMax,
            targetRangeMin,
            targetRangeMax
          )
        ).toEqual(expected)
      }
    )
  })
})
