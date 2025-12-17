import seedrandom from 'seedrandom'

export class RandomNumberService {
  private rng: () => number = () => Math.random()

  /**
   * Initializes the random number generator with an optional seed.
   * @param seed - The seed to use for the random number generator.
   */
  init(seed?: string) {
    // eslint-disable-next-line functional/immutable-data
    this.rng = seed ? seedrandom(seed) : () => Math.random()
  }

  /**
   * Generates a random number between 0 (inclusive) and 1 (exclusive).
   * @returns A random number.
   */
  generate() {
    return this.rng()
  }

  /**
   * Returns a random index from a list.
   * @param list - The list to choose an index from.
   * @returns A random index from the list, or undefined if the list is empty.
   */
  randomIndex<T>(list: T[]) {
    if (list.length === 0) return

    return Math.floor(this.generate() * (list.length - 1))
  }

  /**
   * Chooses a random element from a list.
   * @param list - The list to choose an element from.
   * @returns A random element from the list, or undefined if the list is empty.
   */
  chooseElement<T>(list: T[]) {
    const randomIdx = this.randomIndex(list)

    if (randomIdx === undefined) return

    return list[randomIdx]
  }

  /**
   * Chooses a random integer between two given integers (inclusive).
   * Throws an error if inputs are not integers.
   * @param a - The first integer.
   * @param b - The second integer.
   * @returns A random integer between a and b (inclusive).
   * @throws {Error} If `a` or `b` are not integers.
   */
  chooseIntegerBetween(a: number, b: number) {
    if (![a, b].every(Number.isInteger)) {
      throw new Error(
        `chooseInteger requires integers. Received: ${a} and ${b}`
      )
    }

    const [minimum, maximum] = [a, b].sort()

    if (minimum === undefined || maximum === undefined) {
      throw new TypeError(
        `chooseInteger requires two numbers. Received: ${a} and ${b}`
      )
    }

    return Math.round(this.generate() * (maximum - minimum)) + minimum
  }
}

export const randomNumber = new RandomNumberService()
