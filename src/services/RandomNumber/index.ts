export class RandomNumberService {
  generate() {
    return Math.random()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  randomIndex(list: any[]) {
    return Math.floor(this.generate() * (list.length - 1))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chooseElement<T = any>(list: T[]) {
    return list[this.randomIndex(list)]
  }

  // FIXME: Test this
  chooseNumber(minimum: number, maximum: number) {
    minimum = Math.ceil(minimum)
    maximum = Math.floor(maximum)

    return Math.floor(this.generate() * (maximum - minimum + 1)) + minimum
  }
}

export const randomNumber = new RandomNumberService()
