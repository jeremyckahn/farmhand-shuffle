import React, { useEffect, useRef, useState } from 'react'
import { useDebounceCallback, useWindowSize } from 'usehooks-ts'
import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'

import { PlayedCrop } from '../PlayedCrop'
import * as cards from '../../../game/cards'
import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import { SELECTED_CARD_ELEVATION } from '../../../game/config'

const deselectedIdx = -1
const selectedCardYOffset = -25

export interface FieldProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const rotationTransform = 'rotate(180deg)'
export const selectedCardLabel = 'Selected field card'
export const unselectedCardLabel = 'Unselected field card'

export const Field = ({ playerId, game, ...rest }: FieldProps) => {
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

  const handleCardFocus = (
    event: React.FocusEvent<HTMLDivElement, Element>,
    cardIdx: number
  ) => {
    const { target } = event

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
      >
        {crops.map((playedCrop, idx) => {
          const { id, waterCards } = playedCrop

          if (!isCardId(id)) {
            throw new UnimplementedError(`${id} is not a card`)
          }

          const card = cards[id]
          const isSelected = selectedCardIdx === idx
          const isInBackground =
            selectedCardIdx !== deselectedIdx && !isSelected

          return (
            <Grid key={`${idx}_${id}_${waterCards}`} item xs>
              <PlayedCrop
                aria-label={
                  isSelected ? selectedCardLabel : unselectedCardLabel
                }
                tabIndex={0}
                cropCardProps={{
                  card,
                  playedCrop,
                  ...(isSelected && {
                    elevation: SELECTED_CARD_ELEVATION,
                  }),
                }}
                isInBackground={isInBackground}
                onFocus={event => handleCardFocus(event, idx)}
                sx={{
                  position: 'relative',
                  transition: theme.transitions.create(['transform']),
                  outline: 'none',
                  ...(!isSessionOwnerPlayer && {
                    transform: rotationTransform,
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
      </Grid>
    </Box>
  )
}
