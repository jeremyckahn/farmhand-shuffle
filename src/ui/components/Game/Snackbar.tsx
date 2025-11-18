import Alert, { AlertProps } from '@mui/material/Alert'
import Slide from '@mui/material/Slide'
import MuiSnackbar from '@mui/material/Snackbar'
import useTheme from '@mui/material/styles/useTheme'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

export interface SnackbarProps extends Pick<AlertProps, 'severity'> {
  message: ReactNode
  onClose: () => void
}

export const notificationDuration = 3000

export const emptyNotificationMessage = ''

export const Snackbar = ({ message, severity, onClose }: SnackbarProps) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [previousMessage, setPreviousMessage] =
    useState<SnackbarProps['message']>(null)

  const handleClose = useCallback(() => {
    setIsOpen(false)
    onClose?.()
  }, [onClose])

  const scheduleSnackbarClose = useDebounceCallback(
    handleClose,
    notificationDuration
  )

  useEffect(() => {
    if (message !== emptyNotificationMessage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreviousMessage(message)
      setIsOpen(true)

      scheduleSnackbarClose.cancel()
      scheduleSnackbarClose()
    }
  }, [message, severity, scheduleSnackbarClose])

  return (
    <MuiSnackbar
      TransitionComponent={Slide}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      onClose={handleClose}
      open={isOpen}
      sx={{ bottom: { xs: theme.spacing(11), sm: theme.spacing(2) } }}
    >
      <Alert severity={severity} elevation={12} variant="filled">
        {/*
          NOTE: previousMessage is shown as fallback content to prevent the
          Alert from visibly rerendering with empty content when it transitions
          away.
          */}
        {message || previousMessage}
      </Alert>
    </MuiSnackbar>
  )
}
