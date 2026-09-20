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
   * Whether the viewport is narrow (mobile-sized).
   */
  isNarrowViewport: boolean
  showNotification: (message: ReactNode, severity: AlertColor) => void
  selectedHandCardIdx: number
  setSelectedHandCardIdx: React.Dispatch<SetStateAction<number>>
  selectedFieldCardIdx: number
  setSelectedFieldCardIdx: React.Dispatch<SetStateAction<number>>
  /**
   * Whether a hand/field card is currently selected -- i.e. whether its
   * respective *CardIdx above is not deselectedCardIdx.
   */
  isHandCardSelected: boolean
  isFieldCardSelected: boolean
  /**
   * The DOM node of the user's own Hand container. Lets Match navigate
   * between rendered cards (see handleCardNav in Match.tsx) via this
   * component-owned ref instead of a global document.querySelector.
   */
  handContainerRef: React.MutableRefObject<HTMLDivElement | null>
  /**
   * The DOM node of the user's own Field container (not any opponent's).
   * Same purpose as handContainerRef above.
   */
  fieldContainerRef: React.MutableRefObject<HTMLDivElement | null>
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
  isHandCardSelected: false,
  isFieldCardSelected: false,
  handContainerRef: { current: null },
  fieldContainerRef: { current: null },
})
