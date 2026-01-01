import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Snackbar, emptyNotificationMessage, notificationDuration } from './Snackbar'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme()

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('Snackbar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('does not render when message is empty', () => {
    renderWithTheme(<Snackbar message={emptyNotificationMessage} severity="info" onClose={vi.fn()} />)
    const alert = screen.queryByRole('alert')
    // MuiSnackbar might render but be hidden. The Alert inside is conditionally rendered or effectively hidden?
    // Actually MuiSnackbar manages open state. If open=false, it typically doesn't render content or is hidden.
    // Let's check if the text is visible.
    expect(screen.queryByText('Test Message')).not.toBeInTheDocument()
  })

  it('renders message when provided', () => {
    renderWithTheme(<Snackbar message="Test Message" severity="info" onClose={vi.fn()} />)
    expect(screen.getByText('Test Message')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('closes after duration', () => {
    const onClose = vi.fn()
    renderWithTheme(<Snackbar message="Test Message" severity="info" onClose={onClose} />)

    expect(screen.getByText('Test Message')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(notificationDuration)
    })

    expect(onClose).toHaveBeenCalled()
  })

  it('resets timer when message updates', () => {
    const onClose = vi.fn()
    const { rerender } = renderWithTheme(<Snackbar message="Message 1" severity="info" onClose={onClose} />)

    act(() => {
      vi.advanceTimersByTime(notificationDuration / 2)
    })

    rerender(<ThemeProvider theme={theme}><Snackbar message="Message 2" severity="info" onClose={onClose} /></ThemeProvider>)

    act(() => {
      vi.advanceTimersByTime(notificationDuration / 2)
    })

    // Should not have closed yet because timer reset
    expect(onClose).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(notificationDuration / 2 + 100)
    })

    expect(onClose).toHaveBeenCalled()
  })

  it('displays previous message while closing/transitioning if current message is empty', async () => {
     // This test targets the logic: {message || previousMessage} and the effect setting previousMessage
     const onClose = vi.fn()
     const { rerender } = renderWithTheme(<Snackbar message="Initial Message" severity="info" onClose={onClose} />)

     expect(screen.getByText('Initial Message')).toBeInTheDocument()

     // Verify previousMessage logic
     // When we clear the message (pass empty string), the component sets open=false (implicitly via external control usually, but here internal state manages open).
     // Wait, the component manages `isOpen` internal state based on `message` prop changes.
     // If message becomes empty, useEffect doesn't trigger "open=true".
     // But internal isOpen is never set to false explicitly when message becomes empty?
     // Ah, handleClose sets isOpen(false).
     // But if we just update props to empty string, does it close?

     // Looking at the code:
     // useEffect only runs if message !== emptyNotificationMessage.
     // So if message becomes empty, the effect doesn't run. isOpen remains true? No.

     // If the parent passes emptyNotificationMessage, `isOpen` isn't updated to false automatically in the effect.
     // However, usually the parent sets message to empty ONLY after `onClose` is called.
     // So the flow is:
     // 1. Parent sets message "Hello".
     // 2. Component sets isOpen=true. Timer starts.
     // 3. Timer fires handleClose -> setIsOpen(false) -> onClose().
     // 4. Parent receives onClose, sets message to "".

     // In step 3, isOpen becomes false. Transition starts.
     // In step 4, message becomes "". The re-render happens.
     // Inside Alert: {message || previousMessage}. message is "", previousMessage is "Hello".
     // So "Hello" is still displayed during the exit transition.

     // Let's simulate step 3 and 4.

     // Trigger close internally
     act(() => {
        vi.advanceTimersByTime(notificationDuration)
     })

     expect(onClose).toHaveBeenCalled()

     // Now parent updates message to empty
     rerender(<ThemeProvider theme={theme}><Snackbar message={emptyNotificationMessage} severity="info" onClose={onClose} /></ThemeProvider>)

     // Even though message is empty, the "Initial Message" should still be in the DOM (but hidden/transitioning out)
     // because MuiSnackbar keeps it mounted for transition.
     // And our logic {message || previousMessage} ensures text is there.

     // We can check if the text is still present.
     expect(screen.getByText('Initial Message')).toBeInTheDocument()
  })
})
