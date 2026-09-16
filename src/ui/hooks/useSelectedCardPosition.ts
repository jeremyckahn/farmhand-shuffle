import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { SxProps, useTheme } from '@mui/material'

import { CARD_DIMENSIONS } from '../config/dimensions'
import { CardSize } from '../types'

export const foregroundCardZIndex = 20

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
  const theme = useTheme()
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

  // NOTE: The container itself (e.g. Hand.tsx's outer Box) can be the
  // target of its own CSS transition -- e.g. Hand.tsx transitions its
  // `transform` to slide the whole hand off/on screen when hidden/shown.
  // Reading getBoundingClientRect() synchronously right after that kind of
  // change (as the layout effect below does, on every render) can catch
  // the transition's *starting* value rather than its resting one, since
  // the browser hasn't advanced the transition yet at that point --
  // leaving the focused card centered against a stale, mid-transition
  // position. Re-measuring once the transition actually finishes corrects
  // that, without needing to touch the deliberately dependency-less effect
  // below (still needed for a container that moves without any transition
  // at all, e.g. Table.tsx's ResizeObserver-driven repositioning).
  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'transform') {
        return
      }

      setContainerRect(container.getBoundingClientRect())
    }

    container.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      container.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [containerRef])

  // NOTE: The container can move without a `resize` event firing -- e.g.
  // Table.tsx repositions the Hand container in response to an unrelated
  // layout shift elsewhere on the page (a ResizeObserver-driven update, not
  // a viewport resize). Re-measuring after every render (bailing out when
  // nothing actually changed, to avoid a re-render loop) keeps this in
  // sync with wherever the container currently renders, rather than only
  // the position it had when this hook first mounted. This intentionally
  // has no dependency array, so it re-measures after every render; the
  // bail-out above (returning prevRect unchanged) prevents an update loop.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    if (!containerRef.current) {
      return
    }

    const rect = containerRef.current.getBoundingClientRect()

    setContainerRect(prevRect =>
      prevRect.top === rect.top &&
      prevRect.left === rect.left &&
      prevRect.width === rect.width &&
      prevRect.height === rect.height
        ? prevRect
        : rect
    )
  })

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  const cardCenterX = `calc(${containerRect.left}px + ${CARD_DIMENSIONS[cardSize].width} / 2)`
  const cardCenterY = `calc(${containerRect.top}px + ${CARD_DIMENSIONS[cardSize].height} / 2)`

  const translateX = `calc(${centerX}px - ${cardCenterX})`
  const translateY = `calc(${centerY}px - ${cardCenterY})`

  const selectedCardSxProps: SxProps = {
    boxShadow: theme.shadows['11'],
    transform: `translate(${translateX}, ${translateY}) scale(1)`,
    zIndex: foregroundCardZIndex,
  }

  return {
    containerRef,
    selectedCardSxProps,
  }
}
