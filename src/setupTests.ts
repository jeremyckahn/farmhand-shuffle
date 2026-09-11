import '@testing-library/jest-dom'

// jsdom doesn't implement ResizeObserver. jsdom also doesn't perform real
// layout, so a functioning implementation wouldn't report anything useful
// here anyway - this just needs to exist so components using it (e.g. via
// useContainerWidth) don't throw on render.
if (typeof globalThis.ResizeObserver === 'undefined') {
  // eslint-disable-next-line functional/immutable-data
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}
