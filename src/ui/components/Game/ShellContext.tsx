import { createContext } from 'react'

export interface ShellContextProps {
  /**
   * Prevents user interaction while some asynchronous operation is performed.
   */
  blockingOperation: (fn: () => Promise<void>) => Promise<void>
  isHandInViewport: boolean
  setIsHandInViewport: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShellContext = createContext<ShellContextProps>({
  blockingOperation: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
  isHandInViewport: true,
  setIsHandInViewport: () => {
    throw new Error('Calling context method outside of ShellContext.Provider')
  },
})
