import {
  FC,
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from 'react'
import Box from '@mui/material/Box'

import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'

interface ISelectedCardContext {
  selectedCardTransform: string
  selectedCardSize: CardSize
  setSelectedCardSize: Dispatch<SetStateAction<CardSize>>
}

const selectedCardContextInitialValue: ISelectedCardContext = {
  selectedCardTransform: '',
  selectedCardSize: CardSize.MEDIUM,
  setSelectedCardSize: () => {
    throw new Error('setSelectedCardSize called outside of SelectedCardContext')
  },
}

export const SelectedCardInnerContext = createContext<ISelectedCardContext>(
  selectedCardContextInitialValue
)

const defaultContainerRect: DOMRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: () => {
    throw new Error('Unimplemented toJSON called')
  },
}

export const SelectedCardContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>()
  const [containerRect, setContainerRect] =
    useState<DOMRect>(defaultContainerRect)
  const [selectedCardSize, setSelectedCardSize] = useState<CardSize>(
    CardSize.MEDIUM
  )

  useEffect(() => {
    const updateContainerRect = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect())
      }
    }

    updateContainerRect()
    window.addEventListener('resize', updateContainerRect)

    return () => {
      window.removeEventListener('resize', updateContainerRect)
    }
  }, [])

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  const cardCenterX = `calc(${containerRect.left}px + ${CARD_DIMENSIONS[selectedCardSize].width} / 2)`
  const cardCenterY = `calc(${containerRect.top}px + ${CARD_DIMENSIONS[selectedCardSize].height} / 2)`

  const translateX = `calc(${centerX}px - ${cardCenterX})`
  const translateY = `calc(${centerY}px - ${cardCenterY})`
  const selectedCardTransform = `translate(${translateX}, ${translateY}) scale(1)`

  return (
    <SelectedCardInnerContext.Provider
      value={{
        selectedCardTransform,
        selectedCardSize,
        setSelectedCardSize,
      }}
    >
      <Box ref={containerRef}>{children}</Box>
    </SelectedCardInnerContext.Provider>
  )
}
