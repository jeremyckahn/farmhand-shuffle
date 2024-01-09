import { useState } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'

import { Card } from '../Card'
import { mathService } from '../../../services/Math/index'
import { lookup } from '../../../game/services/Lookup'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import * as cards from '../../../game/cards'
import { IGame, IPlayer } from '../../../game/types'
import { isCardId } from '../../../game/types/guards'
import { CARD_HEIGHT } from '../../config/dimensions'

export interface HandProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const selectedCardTransform = `translateX(-50%) translateY(calc(-${CARD_HEIGHT} / 2)) rotate(0deg) scale(1) rotateY(0deg)`

const deselectedIdx = -1

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

export const Hand = ({ playerId, game, sx = [], ...rest }: HandProps) => {
  const player = lookup.getPlayer(game, playerId)

  const theme = useTheme()
  const [selectedCardIdx, setSelectedCardIdx] = useState(deselectedIdx)

  const toggleCardIdx = (cardIdx: number) => {
    if (cardIdx === selectedCardIdx) {
      setSelectedCardIdx(deselectedIdx)
    } else {
      setSelectedCardIdx(cardIdx)
    }
  }

  const handleCardFocus = (cardIdx: number) => {
    toggleCardIdx(cardIdx)
  }

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === 'Escape') {
      setSelectedCardIdx(deselectedIdx)
    }
  }

  const handleClickAway = () => {
    setSelectedCardIdx(deselectedIdx)
  }

  const gapWidthPx = getGapPixelWidth(player.hand.length)

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        {...rest}
        data-testid={`hand_${playerId}`}
        sx={[
          {
            position: 'relative',
            minHeight: CARD_HEIGHT,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        onKeyDown={handleKeyDown}
      >
        {player.hand.map((cardId, idx) => {
          if (!isCardId(cardId)) {
            throw new UnimplementedError(`${cardId} is not a card`)
          }

          const card = cards[cardId]

          const gapWidthTotal = gapWidthPx * player.hand.length
          const xOffsetPx = mathService.scaleNumber(
            idx / player.hand.length,
            0,
            1,
            -gapWidthTotal,
            gapWidthTotal
          )

          const isSelected = selectedCardIdx === idx

          const translateYOffset =
            selectedCardIdx === deselectedIdx ? '0rem' : `(${CARD_HEIGHT} / 2)`

          const translateX = `calc(-50% + ${gapWidthPx}px + ${xOffsetPx}px)`
          const translateY = `calc(${translateYOffset})`
          const rotationDeg = -5
          const scale = selectedCardIdx === deselectedIdx ? 1 : 0.75

          const transform = isSelected
            ? selectedCardTransform
            : `translateX(${translateX}) translateY(${translateY}) rotate(${rotationDeg}deg) scale(${scale}) rotateY(25deg)`

          return (
            <Card
              key={`${cardId}_${idx}`}
              card={card}
              sx={{
                transform,
                position: 'absolute',
                transition: theme.transitions.create([
                  'transition',
                  'transform',
                ]),
                cursor: 'pointer',
              }}
              onFocus={() => handleCardFocus(idx)}
              tabIndex={0}
            />
          )
        })}
      </Box>
    </ClickAwayListener>
  )
}
