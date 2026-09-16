import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { CardSize } from '../types'

import { useSelectedCardPosition } from './useSelectedCardPosition'

describe('useSelectedCardPosition', () => {
  const mockBoundingClientRect = {
    bottom: 100,
    height: 100,
    left: 50,
    right: 150,
    top: 50,
    width: 100,
    x: 50,
    y: 50,
    toJSON: () => '',
  }

  beforeEach(() => {
    // Mock window dimensions
    vi.spyOn(window, 'innerWidth', 'get').mockImplementation(() => 1024)
    vi.spyOn(window, 'innerHeight', 'get').mockImplementation(() => 768)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return containerRef and selectedCardSxProps', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => children

    const { result } = renderHook(
      () => useSelectedCardPosition({ cardSize: CardSize.MEDIUM }),
      { wrapper }
    )

    expect(result.current.containerRef).toBeDefined()
    expect(result.current.selectedCardSxProps).toEqual(
      expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        boxShadow: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transform: expect.stringContaining('translate'),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        zIndex: expect.any(Number),
      })
    )
  })

  it('should update containerRect when resize event occurs', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => children

    const { result } = renderHook(
      () => useSelectedCardPosition({ cardSize: CardSize.MEDIUM }),
      { wrapper }
    )

    // Mock the ref's current value and getBoundingClientRect
    const div = document.createElement('div')

    vi.spyOn(div, 'getBoundingClientRect').mockImplementation(
      () => mockBoundingClientRect
    )

    // eslint-disable-next-line functional/immutable-data
    result.current.containerRef.current = div

    // Trigger resize event
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    // Verify the transform calculation uses the updated containerRect
    expect(result.current.selectedCardSxProps.transform).toMatchInlineSnapshot(
      `"translate(calc(512px - calc(50px + 12rem / 2)), calc(384px - calc(50px + 21rem / 2))) scale(1)"`
    )
  })

  it("should re-measure containerRect when the container's own transform transition ends", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => children

    const { result } = renderHook(
      () => useSelectedCardPosition({ cardSize: CardSize.MEDIUM }),
      { wrapper }
    )

    // NOTE: The transitionend listener is registered on window and matches
    // by event.target, so the container must actually be in the document
    // (for the event to bubble up to window) rather than a detached node
    // like the resize test above uses.
    const div = document.createElement('div')

    document.body.appendChild(div)

    vi.spyOn(div, 'getBoundingClientRect').mockImplementation(
      () => mockBoundingClientRect
    )

    // eslint-disable-next-line functional/immutable-data
    result.current.containerRef.current = div

    // NOTE: Simulates the container settling after a CSS transition on its
    // own `transform` (e.g. Hand.tsx sliding the whole hand off/on screen)
    // -- this is what corrects a stale mid-transition measurement.
    act(() => {
      div.dispatchEvent(
        new TransitionEvent('transitionend', {
          propertyName: 'transform',
          bubbles: true,
        })
      )
    })

    document.body.removeChild(div)

    expect(result.current.selectedCardSxProps.transform).toMatchInlineSnapshot(
      `"translate(calc(512px - calc(50px + 12rem / 2)), calc(384px - calc(50px + 21rem / 2))) scale(1)"`
    )
  })

  it('should ignore transitionend events for unrelated properties', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => children

    const { result } = renderHook(
      () => useSelectedCardPosition({ cardSize: CardSize.MEDIUM }),
      { wrapper }
    )

    const div = document.createElement('div')

    document.body.appendChild(div)

    const originalTransform = result.current.selectedCardSxProps.transform

    vi.spyOn(div, 'getBoundingClientRect').mockImplementation(
      () => mockBoundingClientRect
    )

    // eslint-disable-next-line functional/immutable-data
    result.current.containerRef.current = div

    act(() => {
      div.dispatchEvent(
        new TransitionEvent('transitionend', {
          propertyName: 'opacity',
          bubbles: true,
        })
      )
    })

    document.body.removeChild(div)

    expect(result.current.selectedCardSxProps.transform).toEqual(
      originalTransform
    )
  })
})
