import { AlertColor } from '@mui/material/Alert'
import { ReactNode } from 'react'

export interface NotificationContextProps {
  showNotification: (message: ReactNode, severity?: AlertColor) => void
}
