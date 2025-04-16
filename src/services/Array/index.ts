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

  /**
   * Inserts an element into an array at the given index. Returns a new copy of the extended array.
   */
  insertAt<T>(array: T[], idx: number, element: T): T[] {
    return [...array.slice(0, idx), element, ...array.slice(idx)]
  }

  /**
   * Replaces an element in an array at the given index. Returns a new copy of the modified array.
   */
  replaceAt<T>(array: T[], idx: number, element: T): T[] {
    array = this.removeAt(array, idx)
    return this.insertAt(array, idx, element)
  }
}

export const array = new ArrayService()
