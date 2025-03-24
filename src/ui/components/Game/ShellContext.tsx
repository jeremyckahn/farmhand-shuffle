import { AlertColor } from '@mui/material/Alert'
import { createContext, ReactNode } from 'react'

export interface ShellContextProps {
  /**
   * Prevents user interaction while some asynchronous operation is performed.
   */
  blockingOperation: (fn: () => Promise<void>) => Promise<void>
  isHandInViewport: boolean
  setIsHandInViewport: React.Dispatch<React.SetStateAction<boolean>>
  showNotification: (message: ReactNode, severity: AlertColor) => void
}

export const ShellContext = createContext<ShellContextProps>({
  blockingOperation: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
  isHandInViewport: true,
  setIsHandInViewport: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
  showNotification: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
})
