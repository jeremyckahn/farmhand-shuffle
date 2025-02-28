// NOTE: For the sake of predictable testing, cards are not shuffled.
// Assertions on mocks should be used to validate that shuffling occurred.

const shuffle = vi.fn((arr: unknown[]) => {
  return arr
})

export default shuffle
