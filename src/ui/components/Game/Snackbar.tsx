import Alert, { AlertProps } from '@mui/material/Alert'
import MuiSnackbar from '@mui/material/Snackbar'
import { ReactNode } from 'react'

export interface SnackbarProps extends Pick<AlertProps, 'severity'> {
  message: ReactNode
}

export const alertDuration = 5000

export const Snackbar = ({ message, severity }: SnackbarProps) => {
  return (
    <MuiSnackbar autoHideDuration={alertDuration}>
      <Alert severity={severity}>{message}</Alert>
    </MuiSnackbar>
  )
}
