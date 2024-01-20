import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'
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
const selectedCardYOffset = -75

export interface FieldProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Field = ({ playerId, game, ...rest }: FieldProps) => {
  const player = lookup.getPlayer(game, playerId)

  const containerRef = useRef<HTMLDivElement>()
  const theme = useTheme()
  const [selectedCardIdx, setSelectedCardIdx] = useState(deselectedIdx)
  const [selectedCardTransform, setSelectedCardTransform] = useState('')
  const [windowWidth, windowHeight] = useWindowSize()

  const centerX = windowWidth / 2
  const centerY = windowHeight / 2

  const resetSelectedCard = () => {
    setSelectedCardIdx(deselectedIdx)

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      resetSelectedCard()
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const handleCardFocus = (
    evt: React.FocusEvent<HTMLDivElement, Element>,
    cardIdx: number
  ) => {
    const { target } = evt

    const boundingClientRect = target.getBoundingClientRect()
    const xDelta =
      centerX - (boundingClientRect.left + boundingClientRect.width / 2)
    const yDelta =
      centerY -
      (boundingClientRect.top + boundingClientRect.height / 2) +
      selectedCardYOffset

    setSelectedCardTransform(
      `translateX(${xDelta}px) translateY(${yDelta}px) scale(1.25)`
    )
    setSelectedCardIdx(cardIdx)
  }

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    switch (evt.key) {
      case 'Escape':
        resetSelectedCard()
        break
    }
  }

  const handleBlur = (evt: React.FocusEvent<HTMLDivElement, Element>) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(evt.relatedTarget)
    ) {
      resetSelectedCard()
    }
  }

  return (
    <Box
      {...rest}
      data-testid={`field_${playerId}`}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <Grid container spacing={2}>
        {player.field.crops.map((playedCrop, idx) => {
          const { id, waterCards } = playedCrop

          if (!isCardId(id)) {
            throw new UnimplementedError(`${id} is not a card`)
          }

          const card = cards[id]
          const isSelected = selectedCardIdx === idx

          return (
            <Grid key={`${idx}_${id}_${waterCards}`} item xs>
              <PlayedCrop
                card={card}
                playedCrop={playedCrop}
                onFocus={evt => handleCardFocus(evt, idx)}
                tabIndex={0}
                elevation={isSelected ? SELECTED_CARD_ELEVATION : undefined}
                sx={{
                  transition: theme.transitions.create([
                    'transition',
                    'transform',
                  ]),
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
