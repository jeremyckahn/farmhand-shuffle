import { AlertColor } from '@mui/material'
import { ReactNode, useCallback, useState } from 'react'
import reactNodeToString from 'react-node-to-string'

import { isDebugEnabled } from '../../config/constants'

import { emptyNotificationMessage, SnackbarProps } from './Snackbar'

export const useSnackbarState = () => {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
    message: '',
    severity: 'info',
    onClose: () => {
      setSnackbarProps(prev => ({
        ...prev,
        message: emptyNotificationMessage,
      }))
    },
  })

  const showNotification = useCallback(
    (message: ReactNode, severity: AlertColor) => {
      if (isDebugEnabled) {
        console.debug(`Notification: ${reactNodeToString(message)}`)
      }

      setSnackbarProps(prev => ({ ...prev, message, severity }))
    },
    [setSnackbarProps]
  )

  return { showNotification, snackbarProps }
}
