/**
 * Creates a promise that resolves after a specified number of milliseconds.
 *
 * @param {number} milliseconds - The number of milliseconds to wait before resolving the promise.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
export const sleep = (milliseconds: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(resolve, milliseconds)
  })
}
