import seedrandom from 'seedrandom'

export class RandomNumberService {
  private readonly rng: () => number

  constructor(seed?: string | null) {
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
   * Shuffles a list using the Fisher-Yates algorithm.
   * @param list - The list to shuffle.
   * @returns A shuffled copy of the list.
   */
  shuffle<T>(list: T[]): T[] {
    const copy = [...list]

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(this.generate() * (i + 1))
      // NOTE: The following line suppresses TypeScript errors related to noUncheckedIndexedAccess.
      // Since i and j are guaranteed to be within the bounds of the array, these accesses are safe.
      // We use 'as T' casting instead of '!' to avoid non-null assertion lint errors while satisfying the compiler.
      const temp = copy[i] as T
      // eslint-disable-next-line functional/immutable-data
      copy[i] = copy[j] as T
      // eslint-disable-next-line functional/immutable-data
      copy[j] = temp
    }

    return copy
  }

  /**
   * Returns a random index from a list.
   * @param list - The list to choose an index from.
   * @returns A random index from the list, or undefined if the list is empty.
   */
  randomIndex<T>(list: T[]) {
    if (list.length === 0) return

    return Math.floor(this.generate() * list.length)
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

    return Math.floor(this.generate() * (maximum - minimum + 1)) + minimum
  }
}

const seed = new URLSearchParams(window.location.search).get('seed')
export const randomNumber = new RandomNumberService(seed)
