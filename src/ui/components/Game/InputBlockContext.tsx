import { createContext } from 'react'

export interface InputBlockContextProps {
  /**
   * Prevents user interaction while some asynchronous operation is performed.
   */
  blockingOperation: (fn: () => Promise<void>) => Promise<void>
}

export const InputBlockContext = createContext<InputBlockContextProps>({
  blockingOperation: () => {
    throw new Error(
      'Calling blockingOperation outside of InputBlockContext.Provider'
    )
  },
})
