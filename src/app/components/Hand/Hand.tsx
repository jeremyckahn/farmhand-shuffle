import React, { useState } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import { math } from '../../../services/Math'
import { lookup } from '../../../game/services/Lookup'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import * as cards from '../../../game/cards'
import { GameState, IGame, IPlayer } from '../../../game/types'
import { isCardId } from '../../../game/types/guards'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { SELECTED_CARD_ELEVATION } from '../../../game/config'
import { useSelectedCardPosition } from '../../hooks/useSelectedCardPosition'
import { CardSize } from '../../types'
import { Card, CardFocusMode } from '../Card'
import { isSxArray } from '../../type-guards'
import { ActorContext } from '../Game/ActorContext'

const deselectedIdx = -1
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
  const { useSelector } = ActorContext
  const state = useSelector(({ value }) => value)

  const { containerRef, selectedCardSxProps } = useSelectedCardPosition({
    cardSize,
  })

  const player = lookup.getPlayer(game, playerId)

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

  const { width: containerWidth } =
    containerRef.current?.getBoundingClientRect() ?? {
      width: 0,
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
        },
        ...(isSxArray(sx) ? sx : [sx]),
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
        const multipliedGap = math.scaleNumber(
          idx / player.hand.length,
          0,
          1,
          -gapWidthTotal,
          gapWidthTotal
        )
        const xOffsetPx = containerWidth / 2 + multipliedGap

        const isSelected = selectedCardIdx === idx

        let cardFocusMode: undefined | CardFocusMode

        if (isSelected) {
          switch (state) {
            case GameState.WAITING_FOR_PLAYER_SETUP_ACTION: {
              cardFocusMode = CardFocusMode.CROP_PLACEMENT
              break
            }

            default:
          }
        }

        let transform = ''
        if (!isSelected) {
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
          transform = `translateX(${translateX}) translateY(${translateY}) rotate(${rotationDeg}deg) scale(${scale}) rotateY(25deg)`
        }

        return (
          <Card
            key={`${cardId}_${idx}`}
            card={card}
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
            onFocus={() => handleCardFocus(idx)}
            tabIndex={0}
            cardFocusMode={cardFocusMode}
          />
        )
      })}
    </Box>
  )
}
