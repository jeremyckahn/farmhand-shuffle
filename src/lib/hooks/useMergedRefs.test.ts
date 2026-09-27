import { renderHook } from '@testing-library/react'
import { MutableRefObject } from 'react'

import { useMergedRefs } from './useMergedRefs'

const createRef = <T>(): MutableRefObject<T | null> => ({ current: null })

describe('useMergedRefs', () => {
  it('assigns the node to every given ref', () => {
    const refA = createRef<string>()
    const refB = createRef<string>()
    const { result } = renderHook(() => useMergedRefs(refA, refB))

    result.current('node')

    expect(refA.current).toBe('node')
    expect(refB.current).toBe('node')
  })

  it('skips undefined refs', () => {
    const ref = createRef<string>()
    const { result } = renderHook(() => useMergedRefs(ref, undefined))

    result.current('node')

    expect(ref.current).toBe('node')
  })

  it('returns a stable callback when the refs are unchanged', () => {
    const ref = createRef<string>()
    const { result, rerender } = renderHook(() => useMergedRefs(ref))
    const initialCallback = result.current

    rerender()

    expect(result.current).toBe(initialCallback)
  })

  it('returns a new callback when a ref changes', () => {
    const ref = createRef<string>()
    const { result, rerender } = renderHook(
      ({ includeRef }) => useMergedRefs(includeRef ? ref : undefined),
      { initialProps: { includeRef: true } }
    )
    const initialCallback = result.current

    rerender({ includeRef: false })

    expect(result.current).not.toBe(initialCallback)
  })
})
