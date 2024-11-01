export class RandomNumberService {
  generate() {
    return Math.random()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  randomIndex(list: any[]) {
    return Math.round(this.generate() * (list.length - 1))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chooseElement<T = any>(list: T[]) {
    return list[this.randomIndex(list)]
  }
}

export const randomNumber = new RandomNumberService()
