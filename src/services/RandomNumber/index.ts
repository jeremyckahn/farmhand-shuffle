export class RandomNumber {
  static generate() {
    return Math.random()
  }

  static randomIndex(list: any[]) {
    return Math.round(RandomNumber.generate() * (list.length - 1))
  }

  static chooseElement(list: any[]) {
    return list[RandomNumber.randomIndex(list)]
  }
}
