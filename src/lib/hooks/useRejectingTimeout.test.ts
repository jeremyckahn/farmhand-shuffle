import { renderHook, waitFor } from '@testing-library/react'

import { useRejectingTimeout } from './useRejectingTimeout'

beforeEach(() => {
  vi.useFakeTimers() // Mock timers for testing
})

describe('useRejectingTimeout', () => {
  it('resolves the promise after a delay if not rejected', async () => {
    const { result } = renderHook(() => useRejectingTimeout())

    const { setRejectingTimeout } = result.current

    const resolveSpy = vi.fn()
    setRejectingTimeout(100)
      .then(resolveSpy)
      .catch(() => {})

    // Ensure timers are advanced to resolve the promise
    vi.advanceTimersByTime(100)
    vi.useRealTimers()

    await waitFor(() => {
      expect(resolveSpy).toHaveBeenCalled()
    })
  })

  it('rejects the promise if component unmounts before timeout', async () => {
    const { result, unmount } = renderHook(() => useRejectingTimeout())

    const { setRejectingTimeout } = result.current

    const rejectSpy = vi.fn()
    setRejectingTimeout(100)
      .then(() => {})
      .catch(rejectSpy)

    // Ensure timers are advanced to resolve the promise
    vi.advanceTimersByTime(50)
    vi.useRealTimers()

    unmount()
    await waitFor(() => {
      expect(rejectSpy).toHaveBeenCalled()
    })
  })
})
