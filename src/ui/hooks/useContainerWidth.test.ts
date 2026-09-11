import { renderHook, act } from '@testing-library/react'
import { createRef } from 'react'

import { useContainerWidth } from './useContainerWidth'

describe('useContainerWidth', () => {
  let observeSpy: ReturnType<typeof vi.fn>
  let disconnectSpy: ReturnType<typeof vi.fn>
  let resizeCallback: ResizeObserverCallback | undefined

  beforeEach(() => {
    observeSpy = vi.fn()
    disconnectSpy = vi.fn()

    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(callback: ResizeObserverCallback) {
          resizeCallback = callback
        }

        observe = observeSpy
        unobserve = vi.fn()
        disconnect = disconnectSpy
      }
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    resizeCallback = undefined
  })

  it('returns 0 before the element is observed', () => {
    const ref = createRef<HTMLDivElement>()

    const { result } = renderHook(() => useContainerWidth(ref))

    expect(result.current).toBe(0)
    expect(observeSpy).not.toHaveBeenCalled()
  })

  it('observes the ref element once attached', () => {
    const div = document.createElement('div')
    const ref = { current: div }

    renderHook(() => useContainerWidth(ref))

    expect(observeSpy).toHaveBeenCalledWith(div)
  })

  it('updates when the observer reports a new width', () => {
    const div = document.createElement('div')
    const ref = { current: div }

    const { result } = renderHook(() => useContainerWidth(ref))

    act(() => {
      resizeCallback?.(
        [{ contentRect: { width: 640 } }] as ResizeObserverEntry[],
        {} as ResizeObserver
      )
    })

    expect(result.current).toBe(640)
  })

  it('disconnects the observer on unmount', () => {
    const div = document.createElement('div')
    const ref = { current: div }

    const { unmount } = renderHook(() => useContainerWidth(ref))

    unmount()

    expect(disconnectSpy).toHaveBeenCalled()
  })
})
