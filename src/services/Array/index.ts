export class ArrayService {
  /**
   * Removes an element of an array. Returns a new copy of the reduced array.
   */
  removeAt<T>(array: T[], idx: number): T[] {
    if (idx >= array.length) {
      throw new Error(`removeAt: Index ${idx} out of bounds`)
    }

    return array.filter((_, i) => i !== idx)
  }

  /**
   * Replaces an element in an array at the given index. Returns a new copy of the modified array.
   */
  replaceAt<T>(array: T[], idx: number, element: T): T[] {
    const head = array.slice(0, idx)
    const tail = array.slice(idx + 1)

    // NOTE: This is necessary to support dynamic array resizing
    const paddedHead = Array.from({ length: idx }, (_, idx) => {
      return head[idx] as T
    })

    return [...paddedHead, element, ...tail]
  }
}

export const array = new ArrayService()
