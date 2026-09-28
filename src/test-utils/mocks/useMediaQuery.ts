// NOTE: jsdom (the test environment) doesn't implement matchMedia, so
// @mui/material's useMediaQuery would otherwise resolve unpredictably.
// Mocking its default export directly -- rather than polyfilling
// window.matchMedia -- means tests just set a boolean via
// mockUseMediaQuery.mockReturnValue(...), instead of having to correctly
// drive a MediaQueryList's matches/addEventListener/removeEventListener
// subscription behavior.
//
// Import this (for its vi.mock side effect) before any other import that
// transitively imports the real useMediaQuery, and call
// mockUseMediaQuery.mockReturnValue(...) to control it -- see
// Card.test.tsx/Table.test.tsx for example usage.
export const mockUseMediaQuery = vi.fn<() => boolean>(() => false)

vi.mock('@mui/material/useMediaQuery/useMediaQuery', () => ({
  default: () => mockUseMediaQuery(),
}))
