import useTheme from '@mui/material/styles/useTheme'
import Alert, { AlertProps } from '@mui/material/Alert'
import MuiSnackbar from '@mui/material/Snackbar'
import { ReactNode, useEffect, useState } from 'react'

export interface SnackbarProps extends Pick<AlertProps, 'severity'> {
  message: ReactNode
}

export const alertDuration = 3000

export const Snackbar = ({ message, severity }: SnackbarProps) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (message) {
      setIsOpen(true)
    }
  }, [message, severity])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <MuiSnackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={alertDuration}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      sx={{ bottom: { xs: theme.spacing(11), sm: theme.spacing(2) } }}
    >
      <Alert severity={severity}>{message}</Alert>
    </MuiSnackbar>
  )
}
