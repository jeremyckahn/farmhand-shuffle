import { AlertColor } from '@mui/material/Alert'
import { createContext, ReactNode, SetStateAction } from 'react'

import { deselectedCardIdx } from '../constants'

export interface ShellContextProps {
  /**
   * Prevents user interaction while some asynchronous operation is performed.
   */
  blockingOperation: (fn: () => Promise<void>) => Promise<void>
  isHandInViewport: boolean
  setIsHandInViewport: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Whether the viewport is narrow (mobile-sized). Computed once here
   * (rather than via useIsNarrowViewport in each consumer) so the whole
   * Match tree shares a single useMediaQuery subscription.
   */
  isNarrowViewport: boolean
  showNotification: (message: ReactNode, severity: AlertColor) => void
  selectedHandCardIdx: number
  setSelectedHandCardIdx: React.Dispatch<SetStateAction<number>>
  selectedFieldCardIdx: number
  setSelectedFieldCardIdx: React.Dispatch<SetStateAction<number>>
}

export const ShellContext = createContext<ShellContextProps>({
  blockingOperation: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
  isHandInViewport: true,
  setIsHandInViewport: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
  isNarrowViewport: false,
  showNotification: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
  selectedHandCardIdx: deselectedCardIdx,
  setSelectedHandCardIdx: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
  selectedFieldCardIdx: deselectedCardIdx,
  setSelectedFieldCardIdx: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
})
