import { renderHook } from '@testing-library/react'
import { useContext } from 'react'
import { describe, expect, it } from 'vitest'

import { ShellContext } from './ShellContext'

describe('ShellContext', () => {
  it('throws error when blockingOperation is called outside of provider', () => {
    const { result } = renderHook(() => useContext(ShellContext))

    expect(() => result.current.blockingOperation(async () => {})).toThrow(
      'Calling context method outside of ShellContext.Provider'
    )
  })

  it('throws error when setIsHandInViewport is called outside of provider', () => {
    const { result } = renderHook(() => useContext(ShellContext))

    expect(() => result.current.setIsHandInViewport(true)).toThrow(
      'Calling context method outside of ShellContext.Provider'
    )
  })

  it('throws error when showNotification is called outside of provider', () => {
    const { result } = renderHook(() => useContext(ShellContext))

    expect(() => result.current.showNotification('message', 'success')).toThrow(
      'Calling context method outside of ShellContext.Provider'
    )
  })

  it('provides default value for isHandInViewport', () => {
    const { result } = renderHook(() => useContext(ShellContext))

    expect(result.current.isHandInViewport).toBe(true)
  })
})
