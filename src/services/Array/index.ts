export class ArrayService {
  static removeAt<T = any>(array: T[], idx: number): T[] {
    if (idx >= array.length) {
      throw new Error(`removeAt: Index ${idx} out of bounds`)
    }

    return [...array.slice(0, idx).concat(array.slice(idx + 1))]
  }
}
