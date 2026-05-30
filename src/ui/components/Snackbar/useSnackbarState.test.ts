import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useSnackbarState } from './useSnackbarState'
import { emptyNotificationMessage } from './Snackbar'

describe('useSnackbarState Hook', () => {
  it('initializes with default props', () => {
    const { result } = renderHook(() => useSnackbarState())

    expect(result.current.snackbarProps.message).toBe('')
    expect(result.current.snackbarProps.severity).toBe('info')
    expect(typeof result.current.snackbarProps.onClose).toBe('function')
  })

  it('updates notification state when showNotification is called', () => {
    const { result } = renderHook(() => useSnackbarState())

    act(() => {
      result.current.showNotification('Test message', 'success')
    })

    expect(result.current.snackbarProps.message).toBe('Test message')
    expect(result.current.snackbarProps.severity).toBe('success')
  })

  it('resets message when onClose is called', () => {
    const { result } = renderHook(() => useSnackbarState())

    act(() => {
      result.current.showNotification('Test message', 'success')
    })

    expect(result.current.snackbarProps.message).toBe('Test message')

    act(() => {
      result.current.snackbarProps.onClose()
    })

    expect(result.current.snackbarProps.message).toBe(emptyNotificationMessage)
  })
})
