import { createContext } from 'react'

export interface ShellContextProps {
  /**
   * Prevents user interaction while some asynchronous operation is performed.
   */
  blockingOperation: (fn: () => Promise<void>) => Promise<void>
}

export const ShellContext = createContext<ShellContextProps>({
  blockingOperation: () => {
    throw new Error(
      'Calling blockingOperation outside of InputBlockContext.Provider'
    )
  },
})
