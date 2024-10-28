import { useRef, useState, useEffect } from 'react'
import { SxProps } from '@mui/material'

import { CARD_DIMENSIONS } from '../config/dimensions'
import { CardSize } from '../types'

const foregroundCardZIndex = 20

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

export const useSelectedCardPosition = ({
  cardSize,
}: {
  cardSize: CardSize
}) => {
  const containerRef = useRef<HTMLDivElement>()
  const [containerRect, setContainerRect] =
    useState<DOMRect>(defaultContainerRect)

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
  }, [containerRef])

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  const cardCenterX = `calc(${containerRect.left}px + ${CARD_DIMENSIONS[cardSize].width} / 2)`
  const cardCenterY = `calc(${containerRect.top}px + ${CARD_DIMENSIONS[cardSize].height} / 2)`

  const translateX = `calc(${centerX}px - ${cardCenterX})`
  const translateY = `calc(${centerY}px - ${cardCenterY})`

  const selectedCardSxProps: SxProps = {
    transform: `translate(${translateX}, ${translateY}) scale(1)`,
    zIndex: foregroundCardZIndex,
  }

  return {
    containerRef,
    selectedCardSxProps,
  }
}
