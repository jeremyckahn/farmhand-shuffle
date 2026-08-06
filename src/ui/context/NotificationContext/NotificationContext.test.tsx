import { render, renderHook, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { vi } from 'vitest'

import { assertIsNonNullable } from '../../../game/types/assertions'
import * as SnackbarModule from '../../components/Snackbar'

import { NotificationProvider, useNotification } from './NotificationContext'

vi.mock('../../components/Snackbar', () => ({
  emptyNotificationMessage: '',
  Snackbar: vi.fn(() => <div data-testid="mock-snackbar" />),
}))

const TestConsumer = () => {
  const { showNotification } = useNotification()

  return (
    <button
      data-testid="show-button"
      onClick={() => showNotification('Test Notification', 'success')}
    >
      Show
    </button>
  )
}

describe('NotificationContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('throws error when showNotification is called outside NotificationProvider', () => {
    const { result } = renderHook(() => useNotification())

    expect(() => result.current.showNotification('test')).toThrow(
      'Calling showNotification outside of NotificationProvider'
    )
  })

  it('always mounts Snackbar with an empty message initially', () => {
    render(
      <NotificationProvider>
        <div data-testid="child">Child Content</div>
      </NotificationProvider>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByTestId('mock-snackbar')).toBeInTheDocument()
    expect(vi.mocked(SnackbarModule.Snackbar)).toHaveBeenCalledWith(
      expect.objectContaining({ message: '' }),
      expect.anything()
    )
  })

  it('displays Snackbar when showNotification is called', () => {
    render(
      <NotificationProvider>
        <TestConsumer />
      </NotificationProvider>
    )

    act(() => {
      screen.getByTestId('show-button').click()
    })

    expect(screen.getByTestId('mock-snackbar')).toBeInTheDocument()
    expect(vi.mocked(SnackbarModule.Snackbar)).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Test Notification',
        severity: 'success',
      }),
      expect.anything()
    )
  })

  it('resets the message when onClose is called, without unmounting Snackbar', () => {
    render(
      <NotificationProvider>
        <TestConsumer />
      </NotificationProvider>
    )

    act(() => {
      screen.getByTestId('show-button').click()
    })

    const snackbarProps = vi.mocked(SnackbarModule.Snackbar).mock.calls[0]?.[0]

    assertIsNonNullable(snackbarProps)

    act(() => {
      snackbarProps.onClose()
    })

    expect(screen.getByTestId('mock-snackbar')).toBeInTheDocument()
    expect(vi.mocked(SnackbarModule.Snackbar)).toHaveBeenLastCalledWith(
      expect.objectContaining({ message: '' }),
      expect.anything()
    )
  })
})
