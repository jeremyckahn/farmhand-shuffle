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
import { getFieldZoomScale } from '../../config/dimensions'
import { CardSize } from '../../types'
import { PlayedCard, playedCardClassName } from '../PlayedCard'

import { EmptyPlot } from './EmptyPlot'

const deselectedIdx = -1
const selectedCardYOffset = -25

export interface FieldProps extends BoxProps {
  match: IMatch
  playerId: IPlayer['id']
  cardSize?: CardSize
}

export const rotationTransform = 'rotate(180deg)'
export const selectedCardLabel = 'Selected field card'
export const unselectedCardLabel = 'Unselected field card'

export const Field = ({
  playerId,
  match,
  cardSize = CardSize.SMALL,
  ...rest
}: FieldProps) => {
  const player = lookup.getPlayer(match, playerId)
  const isSessionOwnerPlayer = playerId === match.sessionOwnerPlayerId

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
  }, [player.field])

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
    setSelectedCardIdx(cardIdx)
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
                size: cardSize,
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
                  zIndex: 20,
                }),
              }}
            />
          )
        })}
      </Box>
    </Box>
  )
}
