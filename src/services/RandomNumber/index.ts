export class RandomNumberService {
  generate() {
    return Math.random()
  }

  randomIndex(list: any[]) {
    return Math.round(this.generate() * (list.length - 1))
  }

  chooseElement<T = any>(list: T[]) {
    return list[this.randomIndex(list)]
  }
}

export const randomNumber = new RandomNumberService()
