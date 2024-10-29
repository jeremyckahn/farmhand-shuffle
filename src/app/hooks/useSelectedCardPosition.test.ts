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
        boxShadow: expect.any(String),
        transform: expect.stringContaining('translate'),
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
})
