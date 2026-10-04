import Box, { BoxProps } from '@mui/material/Box/index.js'
import useTheme from '@mui/material/styles/useTheme'
import React, { useCallback, useContext, useEffect, useRef } from 'react'

import { SELECTED_CARD_ELEVATION } from '../../../game/config'
import { lookup } from '../../../game/services/Lookup'
import { IMatch, IPlayer } from '../../../game/types'
import { useMergedRefs } from '../../../lib/hooks/useMergedRefs'
import { useRejectingTimeout } from '../../../lib/hooks/useRejectingTimeout'
import { math } from '../../../services/Math'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { useSelectedCardPosition } from '../../hooks/useSelectedCardPosition'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { Card } from '../Card'
import { ShellContext } from '../Match/ShellContext'

import { deselectedCardIdx } from '../constants'

const foregroundCardScale = 1
const backgroundCardScale = 0.65

// NOTE: The focused/selected hand card is always rendered at this fixed
// size, regardless of the viewport-responsive `cardSize` used for the rest
// of the hand -- it should read the same size on every screen.
export const focusedCardSize = CardSize.MEDIUM

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
    isNarrowViewport,
    selectedHandCardIdx,
    setSelectedHandCardIdx,
    isHandCardSelected,
    isHandCardSelectionLocked,
    handContainerRef,
  } = useContext(ShellContext)
  const { setRejectingTimeout } = useRejectingTimeout()

  const { containerRef, selectedCardSxProps, selectedCardTransform } =
    useSelectedCardPosition({
      cardSize: focusedCardSize,
    })

  const player = lookup.getPlayer(match, playerId)

  const theme = useTheme()

  const selectedCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // NOTE: Regains card focus when the player cancels placement. This also
    // re-runs when the selection lock lifts because if the Hand was re-shown
    // mid-placement, isHandInViewport doesn't change on cancel -- and any
    // blur that happened while locked (e.g. clicking "Cancel placement")
    // was ignored, so without refocusing, the card would stay selected with
    // no focus for blur/Escape handling to deselect it.
    if (isHandInViewport && isHandCardSelected && !isHandCardSelectionLocked) {
      selectedCardRef.current?.focus()
    }
  }, [
    isHandInViewport,
    selectedCardRef,
    isHandCardSelected,
    isHandCardSelectionLocked,
  ])

  const resetSelectedCard = useCallback(() => {
    setSelectedHandCardIdx(deselectedCardIdx)

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

  // NOTE: The user interaction handlers below leave the selection alone while
  // it's locked. Otherwise, re-showing the Hand mid-placement and then
  // clicking a Field plot blurs the selected card (clearing the selection)
  // before EmptyPlot sends SELECT_CARD_POSITION, which then carries an
  // invalid hand index that crashes the state machine and leaves the player
  // unable to place the card or cancel placement.
  const handleCardFocus = (cardIdx: number) => {
    if (isHandCardSelectionLocked) {
      return
    }

    setSelectedHandCardIdx(cardIdx)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isHandCardSelectionLocked) {
      return
    }

    switch (event.key) {
      case 'Escape':
        resetSelectedCard()
        break
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement, Element>) => {
    if (
      !isHandCardSelectionLocked &&
      containerRef.current &&
      !containerRef.current.contains(event.relatedTarget)
    ) {
      resetSelectedCard()
    }
  }

  // NOTE: getGapPixelWidth's thresholds were tuned against
  // focusedCardSize (the size hand cards have always rendered at) -- scale
  // them by how much smaller/larger cardSize actually is so the fan-out
  // spacing stays proportional to the cards' own size instead of going
  // stale on narrow viewports where cardSize shrinks.
  const gapSizeScale =
    parseFloat(CARD_DIMENSIONS[cardSize].width) /
    parseFloat(CARD_DIMENSIONS[focusedCardSize].width)
  const gapWidthPx = getGapPixelWidth(player.hand.length) * gapSizeScale

  const { width: containerWidth } =
    // eslint-disable-next-line react-hooks/refs
    containerRef.current?.getBoundingClientRect() ?? {
      width: 0,
    }

  const containerRefs = useMergedRefs(containerRef, handContainerRef)

  const handleBeforePlay = async () => {
    await blockingOperation(async () => {
      await setRejectingTimeout(theme.transitions.duration.shortest)
    })
  }

  return (
    <Box
      {...rest}
      data-testid={`hand_${playerId}`}
      ref={containerRefs}
      sx={[
        {
          position: 'relative',
          minHeight: CARD_DIMENSIONS[cardSize].height,
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
        const isVisuallySelected = isHandCardSelected && isHandInViewport

        let transform = ''

        if (!isSelected) {
          const translateX = `calc(-50% + ${gapWidthPx}px + ${xOffsetPx}px)`
          const translateY = !isVisuallySelected
            ? '0rem'
            : `calc(${CARD_DIMENSIONS[cardSize].height} / 2)`
          const rotationDeg = -5
          const scale = isVisuallySelected
            ? backgroundCardScale
            : foregroundCardScale

          transform = `translateX(${translateX}) translateY(${translateY}) rotate(${rotationDeg}deg) scale(${scale}) rotateY(25deg)`
        }

        // NOTE: The hide/show slide used to live on the shared container's
        // own transform, but that container is also what centering math
        // (useSelectedCardPosition) measures via getBoundingClientRect --
        // a CSS transition on that same element could be caught by that
        // measurement mid-flight, briefly centering the focused card
        // against a stale, still-transitioning position. Applying the
        // slide to each card's own transform instead keeps the container
        // itself static (and thus always measurable at rest), with no
        // correctness cost since translateY offsets compose additively.
        const hideOffsetTranslateY = `translateY(${
          isHandInViewport ? 0 : CARD_DIMENSIONS[cardSize].height
        })`

        return (
          <Card
            key={cardInstance.instanceId}
            disableEnterAnimation
            cardInstance={cardInstance}
            cardIdxInHand={idx}
            playerId={playerId}
            size={isSelected ? focusedCardSize : cardSize}
            paperProps={{
              ...(isSelected && {
                elevation: SELECTED_CARD_ELEVATION,
              }),
            }}
            sx={{
              position: 'absolute',
              transition: theme.transitions.create(['transform']),
              cursor: 'pointer',
              ...(isSelected && selectedCardSxProps),
              transform: `${
                isSelected ? selectedCardTransform : transform
              } ${hideOffsetTranslateY}`,
            }}
            onBeforePlay={handleBeforePlay}
            onFocus={() => handleCardFocus(idx)}
            tabIndex={isHandInViewport ? 0 : -1}
            isFocused={isSelected}
            stackActionButtonsBelowCard={isNarrowViewport}
            ref={isSelected ? selectedCardRef : undefined}
          />
        )
      })}
    </Box>
  )
}
