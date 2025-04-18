import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'
import React, { useEffect, useRef, useState } from 'react'
import { useDebounceCallback, useWindowSize } from 'usehooks-ts'

import {
  SELECTED_CARD_ELEVATION,
  STANDARD_FIELD_SIZE,
} from '../../../game/config'
import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { PlayedCrop, playedCropClassName } from '../PlayedCrop'

const deselectedIdx = -1
const selectedCardYOffset = -25

export interface FieldProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
  cardSize?: CardSize
}

export const rotationTransform = 'rotate(180deg)'
export const selectedCardLabel = 'Selected field card'
export const unselectedCardLabel = 'Unselected field card'

const EmptyPlot = ({
  cardSize = CardSize.SMALL,
}: Pick<FieldProps, 'cardSize'>) => {
  const theme = useTheme()
  return (
    <Grid item xs={6} sm={4} md={2}>
      <Box
        height={CARD_DIMENSIONS[cardSize].height}
        width={CARD_DIMENSIONS[cardSize].width}
        sx={{
          mx: 'auto',
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineColor: theme.palette.divider,
          borderRadius: theme.shape.borderRadius,
        }}
      />
    </Grid>
  )
}

export const Field = ({
  playerId,
  game,
  cardSize = CardSize.SMALL,
  ...rest
}: FieldProps) => {
  const player = lookup.getPlayer(game, playerId)
  const isSessionOwnerPlayer = playerId === game.sessionOwnerPlayerId

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

  useEffect(() => {
    setSelectedCardIdx(deselectedIdx)
  }, [player.field])

  const handleCardFocus = (
    event: React.FocusEvent<HTMLDivElement, Element>,
    cardIdx: number
  ) => {
    const { target } = event

    // NOTE: This event handler gets triggered by UI elements within the
    // CardCore component (which is rendered by PlayedCrop). So, this handler
    // needs to check to see if that would happen and abort its execution if
    // so.
    if (!target.classList.contains(playedCropClassName)) {
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
      `translateX(${xDelta}px) translateY(${yDelta}px) scale(1.25)`
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

  const crops = isSessionOwnerPlayer
    ? player.field.crops
    : [...player.field.crops].reverse()

  const emptyCardSlots = new Array(STANDARD_FIELD_SIZE - crops.length)
    .fill(null)
    .map((_, idx) => {
      return <EmptyPlot key={idx} cardSize={cardSize} />
    })

  return (
    <Box
      {...rest}
      data-testid={`field_${playerId}`}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <Grid
        container
        spacing={2}
        alignItems={isSessionOwnerPlayer ? 'flex-start' : 'flex-end'}
        justifyContent="center"
      >
        {!isSessionOwnerPlayer && emptyCardSlots}
        {crops.map((playedCrop, idx) => {
          if (!playedCrop) {
            return <EmptyPlot key={idx} cardSize={cardSize} />
          }

          const { instance: cardInstance } = playedCrop

          const isSelected = selectedCardIdx === idx
          const isInBackground =
            selectedCardIdx !== deselectedIdx && !isSelected

          return (
            <Grid key={cardInstance.instanceId} item xs={6} sm={4} md={2}>
              <PlayedCrop
                aria-label={
                  isSelected ? selectedCardLabel : unselectedCardLabel
                }
                tabIndex={0}
                cropCardProps={{
                  cardInstance,
                  cardIdx: idx,
                  isInField: true,
                  isFocused: isSelected,
                  playerId: player.id,
                  size: cardSize,
                  playedCrop,
                  ...(isSelected && {
                    elevation: SELECTED_CARD_ELEVATION,
                  }),
                  paperProps: {
                    ...(isSelected && {
                      elevation: SELECTED_CARD_ELEVATION,
                    }),
                  },
                }}
                isInBackground={isInBackground}
                onFocus={event => handleCardFocus(event, idx)}
                sx={{
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
            </Grid>
          )
        })}
        {isSessionOwnerPlayer && emptyCardSlots}
      </Grid>
    </Box>
  )
}
