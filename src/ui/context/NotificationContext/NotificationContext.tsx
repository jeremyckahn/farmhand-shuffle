import { AlertColor } from '@mui/material/Alert/index.js'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { emptyNotificationMessage, Snackbar } from '../../components/Snackbar'

import { NotificationContextProps } from './types'

export const NotificationContext = createContext<NotificationContextProps>({
  showNotification: () => {
    throw new Error('Calling showNotification outside of NotificationProvider')
  },
})

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notificationState, setNotificationState] = useState<{
    message: ReactNode
    severity: AlertColor
  }>({
    message: emptyNotificationMessage,
    severity: 'info',
  })

  const handleClose = useCallback(() => {
    setNotificationState(prev => ({
      ...prev,
      message: emptyNotificationMessage,
    }))
  }, [])

  const showNotification = useCallback(
    (message: ReactNode, severity: AlertColor = 'info') => {
      setNotificationState({ message, severity })
    },
    []
  )

  const contextValue = useMemo(() => ({ showNotification }), [showNotification])

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <Snackbar
        message={notificationState.message}
        severity={notificationState.severity}
        onClose={handleClose}
      />
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
