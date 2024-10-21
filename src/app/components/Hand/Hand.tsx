import React, { useRef, useState } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import { math } from '../../../services/Math'
import { lookup } from '../../../game/services/Lookup'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import * as cards from '../../../game/cards'
import { IGame, IPlayer } from '../../../game/types'
import { isCardId } from '../../../game/types/guards'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { SELECTED_CARD_ELEVATION } from '../../../game/config'
import { CardSize } from '../../types'
import { Card } from '../Card'

export const selectedCardTransform = `translateX(-50%) translateY(0) rotate(0deg) scale(1) rotateY(0deg)`

const deselectedIdx = -1
const foregroundCardScale = 1
const backgroundCardScale = 0.65
const foregroundCardZIndex = 20

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
  game: IGame
  playerId: IPlayer['id']
  cardSize?: CardSize
}

export const Hand = ({
  playerId,
  game,
  cardSize = CardSize.LARGE,
  sx = [],
  ...rest
}: HandProps) => {
  const player = lookup.getPlayer(game, playerId)

  const containerRef = useRef<HTMLDivElement>()
  const theme = useTheme()
  const [selectedCardIdx, setSelectedCardIdx] = useState(deselectedIdx)

  const resetSelectedCard = () => {
    setSelectedCardIdx(deselectedIdx)

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  const handleCardFocus = (cardIdx: number) => {
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

  const gapWidthPx = getGapPixelWidth(player.hand.length)

  return (
    <Box
      {...rest}
      data-testid={`hand_${playerId}`}
      ref={containerRef}
      sx={[
        {
          position: 'relative',
          minHeight: CARD_DIMENSIONS[cardSize].height,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {player.hand.map((cardId, idx) => {
        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]

        const gapWidthTotal = gapWidthPx * player.hand.length
        const xOffsetPx = math.scaleNumber(
          idx / player.hand.length,
          0,
          1,
          -gapWidthTotal,
          gapWidthTotal
        )

        const isSelected = selectedCardIdx === idx

        const translateX = `calc(-50% + ${gapWidthPx}px + ${xOffsetPx}px)`
        const translateY =
          selectedCardIdx === deselectedIdx
            ? '0rem'
            : `calc(${CARD_DIMENSIONS[cardSize].height} / 2)`
        const rotationDeg = -5
        const scale =
          selectedCardIdx === deselectedIdx
            ? foregroundCardScale
            : backgroundCardScale

        const transform = isSelected
          ? selectedCardTransform
          : `translateX(${translateX}) translateY(${translateY}) rotate(${rotationDeg}deg) scale(${scale}) rotateY(25deg)`

        return (
          <Card
            key={`${cardId}_${idx}`}
            card={card}
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
              ...(isSelected && {
                zIndex: foregroundCardZIndex,
              }),
            }}
            onFocus={() => handleCardFocus(idx)}
            tabIndex={0}
          />
        )
      })}
    </Box>
  )
}
