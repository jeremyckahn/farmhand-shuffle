export class ArrayService {
  /**
   * Removes an element of an array. Returns a new copy of the reduced array.
   */
  removeAt<T>(array: T[], idx: number): T[] {
    if (idx >= array.length) {
      throw new Error(`removeAt: Index ${idx} out of bounds`)
    }

    return [...array.slice(0, idx).concat(array.slice(idx + 1))]
  }
}

export const array = new ArrayService()
