export class MathService {
  scaleNumber = (
    value: number,
    localRangeMin: number,
    localRangeMax: number,
    targetRangeMin: number,
    targetRangeMax: number
  ) => {
    return (
      ((value - localRangeMin) * (targetRangeMax - targetRangeMin)) /
        (localRangeMax - localRangeMin) +
      targetRangeMin
    )
  }
}

export const math = new MathService()
