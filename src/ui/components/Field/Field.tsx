import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import React, { useEffect, useRef, useState } from 'react'
import { useDebounceCallback, useWindowSize } from 'usehooks-ts'

import {
  SELECTED_CARD_ELEVATION,
  STANDARD_FIELD_SIZE,
} from '../../../game/config'
import { lookup } from '../../../game/services/Lookup'
import { IMatch, IPlayer } from '../../../game/types'
import { isPlayedCard } from '../../../game/types/guards'
import { CARD_DIMENSIONS, getFieldZoomScale } from '../../config/dimensions'
import { useIsNarrowViewport } from '../../hooks/useIsNarrowViewport'
import { foregroundCardZIndex } from '../../hooks/useSelectedCardPosition'
import { CardSize } from '../../types'
import { PlayedCard, playedCardClassName } from '../PlayedCard'

import { EmptyPlot } from './EmptyPlot'

const deselectedIdx = -1
const selectedCardYOffset = -25

// NOTE: On narrow viewports (cardSize === CardSize.COMPACT), a focused
// field card is rendered at this larger, fixed size instead of being
// scaled up via CSS transform -- crisp/readable rather than blurry
// upscaled pixel art, the same treatment (and the same size) Hand.tsx
// gives its focused card (see focusedCardSize there).
export const focusedFieldCardSize = CardSize.MEDIUM

export interface FieldProps extends BoxProps {
  match: IMatch
  playerId: IPlayer['id']
  cardSize?: CardSize
  /**
   * Notified whenever the currently-selected field card index changes.
   * Lets an ancestor (e.g. Table.tsx) track this field's selection without
   * owning it -- selection itself stays fully internal to this component.
   */
  onSelectedCardIdxChange?: (idx: number) => void
}

export const rotationTransform = 'rotate(180deg)'
export const selectedCardLabel = 'Selected field card'
export const unselectedCardLabel = 'Unselected field card'

export const Field = ({
  playerId,
  match,
  cardSize = CardSize.SMALL,
  onSelectedCardIdxChange,
  ...rest
}: FieldProps) => {
  const player = lookup.getPlayer(match, playerId)
  const isSessionOwnerPlayer = playerId === match.sessionOwnerPlayerId
  const isNarrowViewport = useIsNarrowViewport()

  const containerRef = useRef<HTMLDivElement>()
  const theme = useTheme()
  const [selectedCardIdx, setSelectedCardIdx] = useState(deselectedIdx)
  const [selectedCardTransform, setSelectedCardTransform] = useState('')

  const { width: windowWidth, height: windowHeight } = useWindowSize({
    // NOTE: debounceDelay value needs to be set to some number greater than 0
    // to avoid resetSelectedCard from being unbound before it is called.
    debounceDelay: 1,
  })

  const centerX = windowWidth / 2
  const centerY = windowHeight / 2

  const resetSelectedCard = () => {
    setSelectedCardIdx(deselectedIdx)
    onSelectedCardIdxChange?.(deselectedIdx)

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  const handleWindowResize = useDebounceCallback(
    () => {
      resetSelectedCard()
    },
    undefined,
    { leading: true }
  )

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  // NOTE: When the player.field data is changed, reset the selected card state
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCardIdx(deselectedIdx)
    onSelectedCardIdxChange?.(deselectedIdx)
  }, [player.field, onSelectedCardIdxChange])

  const handleCardFocus = (
    event: React.FocusEvent<HTMLDivElement, Element>,
    cardIdx: number
  ) => {
    const { target } = event

    // NOTE: This event handler gets triggered by UI elements within the
    // CardCore component (which is rendered by PlayedCard). So, this handler
    // needs to check to see if that would happen and abort its execution if
    // so.
    if (!target.classList.contains(playedCardClassName)) {
      return
    }

    const boundingClientRect = target.getBoundingClientRect()

    if (cardSize === CardSize.COMPACT) {
      // NOTE: On narrow viewports, the focused card renders at a larger,
      // fixed size (focusedFieldCardSize, via the cardProps.size override
      // below) instead of being scaled up from this card's actual
      // (illegibly small) rendered size. This card's own layout box stays
      // pinned at cardSize the whole time regardless of selection (see
      // the sx below), so it never reflows the row and this translate is
      // the only thing that ever changes -- letting it transition
      // smoothly from the card's actual position in the field, exactly
      // like the desktop path below. The translate target below aims for
      // where the BIGGER card's center needs to land, using
      // focusedFieldCardSize's dimensions rather than this bounding
      // rect's own (smaller) ones -- otherwise the resulting position
      // would be off by half of the size difference.
      // NOTE: rem is relative to the root font size, which isn't always
      // 16px (e.g. a browser's accessibility text-size setting) -- using
      // calc() here lets the browser resolve focusedWidth/Height's rem
      // units against the real root font size, instead of this needing to
      // read and convert it in JS.
      const focusedWidth = CARD_DIMENSIONS[focusedFieldCardSize].width
      const focusedHeight = CARD_DIMENSIONS[focusedFieldCardSize].height

      setSelectedCardTransform(
        `translateX(calc(${centerX}px - ${boundingClientRect.left}px - (${focusedWidth} / 2))) translateY(calc(${centerY}px - ${boundingClientRect.top}px - (${focusedHeight} / 2)))`
      )
    } else {
      const xDelta =
        centerX - (boundingClientRect.left + boundingClientRect.width / 2)
      const yDelta =
        centerY -
        (boundingClientRect.top + boundingClientRect.height / 2) +
        (isSessionOwnerPlayer ? selectedCardYOffset : -selectedCardYOffset)

      setSelectedCardTransform(
        `translateX(${xDelta}px) translateY(${yDelta}px) scale(${getFieldZoomScale(
          cardSize
        )})`
      )
    }

    setSelectedCardIdx(cardIdx)
    onSelectedCardIdxChange?.(cardIdx)
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

  const paddedCrops = new Array(STANDARD_FIELD_SIZE)
    .fill(undefined)
    .map((_, idx) => player.field.cards[idx])

  const displayedCards = isSessionOwnerPlayer
    ? paddedCrops
    : [...paddedCrops].reverse()

  return (
    <Box
      {...rest}
      data-testid={`field_${playerId}`}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <Box
        display="flex"
        flexWrap="nowrap"
        // NOTE: This row is intentionally never clipped. Browsers force
        // overflow-y back to 'auto' whenever overflow-x isn't 'visible'
        // (per the CSS Overflow spec), and 'auto' still clips paint that
        // extends past the box -- outlines, hover/selected box-shadows,
        // and the tap-to-zoom transform in handleCardFocus -- even when
        // there's nothing to scroll. Compact sizing is already tuned to
        // fit real device widths without wrapping, so there's no
        // horizontal-scroll safety net to trade off against.
        overflow="visible"
        gap={
          cardSize === CardSize.COMPACT ? theme.spacing(0.5) : theme.spacing(2)
        }
        alignItems={isSessionOwnerPlayer ? 'flex-start' : 'flex-end'}
        justifyContent={cardSize === CardSize.COMPACT ? 'flex-start' : 'center'}
      >
        {displayedCards.map((playedCard, renderedIdx) => {
          const fieldIdx = isSessionOwnerPlayer
            ? renderedIdx
            : STANDARD_FIELD_SIZE - 1 - renderedIdx

          if (!isPlayedCard(playedCard)) {
            return (
              <EmptyPlot
                key={renderedIdx}
                cardSize={cardSize}
                playerId={playerId}
                fieldIdx={fieldIdx}
              />
            )
          }

          const { instance: cardInstance } = playedCard

          const isSelected = selectedCardIdx === fieldIdx
          const isInBackground =
            selectedCardIdx !== deselectedIdx && !isSelected
          const isFocusedCompactCard =
            isSelected && cardSize === CardSize.COMPACT

          return (
            <PlayedCard
              key={cardInstance.instanceId}
              aria-label={isSelected ? selectedCardLabel : unselectedCardLabel}
              tabIndex={0}
              cardProps={{
                cardInstance,
                cardIdxInField: fieldIdx,
                cropIdxInFieldToWater: fieldIdx,
                cropIdxInFieldToHarvest: fieldIdx,
                isInField: true,
                isFocused: isSelected,
                playerId: player.id,
                size: isFocusedCompactCard ? focusedFieldCardSize : cardSize,
                stackActionButtonsBelowCard: isNarrowViewport,
                ...(isSelected && {
                  elevation: SELECTED_CARD_ELEVATION,
                }),
                paperProps: {
                  ...(isSelected && {
                    elevation: SELECTED_CARD_ELEVATION,
                  }),
                },
              }}
              playedCard={playedCard}
              isInBackground={isInBackground}
              onFocus={event => handleCardFocus(event, fieldIdx)}
              sx={{
                flexShrink: 0,
                mx: 'auto',
                position: 'relative',
                // NOTE: Always given a real (non-auto) z-index -- combined
                // with position: 'relative' above, this makes this box a
                // stacking context of its own at all times, not just while
                // selected. PlayedCard's water-indicator row (a sibling of
                // Card, both rendered inside this box) relies on that: its
                // negative z-index is meant to stay behind Card's own paint
                // layer, but without an actual stacking context here to
                // contain it, it would otherwise escape to whatever
                // ancestor further up the tree happens to establish one.
                zIndex: 0,
                transition: theme.transitions.create(['transform']),
                outline: 'none',
                // NOTE: This is needed to fix a Firefox bug that prevents
                // opponent fields from appearing upside down
                transformStyle: 'preserve-3d',
                ...(!isSessionOwnerPlayer && {
                  transform: rotationTransform,
                }),
                ...(!isSelected && {
                  cursor: 'pointer',
                }),
                ...(isSelected && {
                  transform: selectedCardTransform,
                  zIndex: foregroundCardZIndex,
                }),
                ...(cardSize === CardSize.COMPACT && {
                  // NOTE: Pin this wrapper's own layout box to the row's
                  // normal (small) card size at all times, whether or not
                  // it's focused -- the focused card's actual (larger)
                  // content is rendered via cardProps.size above and just
                  // overflows this box (the row uses overflow: visible),
                  // so the row never reflows, and this box's position
                  // never has to jump for the transform transition above
                  // to animate smoothly from the card's actual position.
                  width: CARD_DIMENSIONS[cardSize].width,
                  height: CARD_DIMENSIONS[cardSize].height,
                }),
              }}
            />
          )
        })}
      </Box>
    </Box>
  )
}
