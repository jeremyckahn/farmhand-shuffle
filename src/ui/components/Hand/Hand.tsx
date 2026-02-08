import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import React, { useCallback, useContext, useEffect, useRef } from 'react'

import { SELECTED_CARD_ELEVATION } from '../../../game/config'
import { lookup } from '../../../game/services/Lookup'
import { IMatch, IPlayer } from '../../../game/types'
import { useRejectingTimeout } from '../../../lib/hooks/useRejectingTimeout'
import { math } from '../../../services/Math'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { useSelectedCardPosition } from '../../hooks/useSelectedCardPosition'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { Card } from '../Card'
import { ShellContext } from '../Match/ShellContext'

import { deselectedHandIdx } from '../constants'

const foregroundCardScale = 1
const backgroundCardScale = 0.65

export const getGapPixelWidth = (numberOfCards: number) => {
  if (numberOfCards > 60) {
    return 3
  } else if (numberOfCards > 30) {
    return 5
  } else if (numberOfCards > 20) {
    return 10
  } else if (numberOfCards > 10) {
    return 15
  } else if (numberOfCards > 5) {
    return 30
  }

  return 50
}

export interface HandProps extends BoxProps {
  match: IMatch
  playerId: IPlayer['id']
  cardSize?: CardSize
}

export const Hand = ({
  playerId,
  match,
  cardSize = CardSize.LARGE,
  sx = [],
  ...rest
}: HandProps) => {
  const {
    blockingOperation,
    isHandInViewport,
    setIsHandInViewport,
    selectedHandCardIdx,
    setSelectedHandCardIdx,
  } = useContext(ShellContext)
  const { setRejectingTimeout } = useRejectingTimeout()

  const { containerRef, selectedCardSxProps } = useSelectedCardPosition({
    cardSize,
  })

  const player = lookup.getPlayer(match, playerId)

  const theme = useTheme()

  const selectedCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // NOTE: Regains card focus when the player cancels placement
    if (isHandInViewport && selectedHandCardIdx !== deselectedHandIdx) {
      selectedCardRef.current?.focus()
    }
  }, [isHandInViewport, selectedCardRef, selectedHandCardIdx])

  const resetSelectedCard = useCallback(() => {
    setSelectedHandCardIdx(deselectedHandIdx)

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }, [setSelectedHandCardIdx])

  useEffect(() => {
    resetSelectedCard()
    setIsHandInViewport(true)
  }, [
    // NOTE: player.hand is intentionally present here because updated hand
    // data should reset the presentation of the hand to the player.
    player.hand,

    setIsHandInViewport,
    resetSelectedCard,
  ])

  const handleCardFocus = (cardIdx: number) => {
    setSelectedHandCardIdx(cardIdx)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'Escape':
        resetSelectedCard()
        break
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement, Element>) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.relatedTarget)
    ) {
      resetSelectedCard()
    }
  }

  const gapWidthPx = getGapPixelWidth(player.hand.length)

  const { width: containerWidth } =
    // eslint-disable-next-line react-hooks/refs
    containerRef.current?.getBoundingClientRect() ?? {
      width: 0,
    }

  const handleBeforePlay = async () => {
    await blockingOperation(async () => {
      await setRejectingTimeout(theme.transitions.duration.shortest)
    })
  }

  return (
    <Box
      {...rest}
      data-testid={`hand_${playerId}`}
      ref={containerRef}
      sx={[
        {
          position: 'relative',
          minHeight: CARD_DIMENSIONS[cardSize].height,
          transform: `translateY(${
            isHandInViewport ? 0 : CARD_DIMENSIONS[cardSize].height
          })`,
          transition: theme.transitions.create(['transform']),
          pointerEvents: isHandInViewport ? undefined : 'none',
        },
        ...(isSxArray(sx) ? sx : [sx]),
      ]}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {player.hand.map((cardInstance, idx) => {
        const gapWidthTotal = gapWidthPx * player.hand.length
        const multipliedGap = math.scaleNumber(
          idx / player.hand.length,
          0,
          1,
          -gapWidthTotal,
          gapWidthTotal
        )
        const xOffsetPx = containerWidth / 2 + multipliedGap
        const isSelected = selectedHandCardIdx === idx && isHandInViewport
        const isVisuallySelected =
          selectedHandCardIdx !== deselectedHandIdx && isHandInViewport

        let transform = ''

        if (!isSelected) {
          const translateX = `calc(-50% + ${gapWidthPx}px + ${xOffsetPx}px)`
          const translateY = !isVisuallySelected
            ? '0rem'
            : `calc(${CARD_DIMENSIONS[cardSize].height} / 2)`
          const rotationDeg = -5
          const scale = !isVisuallySelected
            ? foregroundCardScale
            : backgroundCardScale

          transform = `translateX(${translateX}) translateY(${translateY}) rotate(${rotationDeg}deg) scale(${scale}) rotateY(25deg)`
        }

        return (
          <Card
            key={cardInstance.instanceId}
            disableEnterAnimation
            cardInstance={cardInstance}
            cardIdx={idx}
            playerId={playerId}
            size={cardSize}
            paperProps={{
              ...(isSelected && {
                elevation: SELECTED_CARD_ELEVATION,
              }),
            }}
            sx={{
              transform,
              position: 'absolute',
              transition: theme.transitions.create(['transform']),
              cursor: 'pointer',
              ...(isSelected && selectedCardSxProps),
            }}
            onBeforePlay={handleBeforePlay}
            onFocus={() => handleCardFocus(idx)}
            tabIndex={isHandInViewport ? 0 : -1}
            isFocused={isSelected}
            ref={isSelected ? selectedCardRef : undefined}
          />
        )
      })}
    </Box>
  )
}
