import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import { MouseEventHandler } from 'react'

import { lookup } from '../../../game/services/Lookup'
import { IMatch, IPlayer } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { useSelectedCardPosition } from '../../hooks/useSelectedCardPosition'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { Card } from '../Card'

export interface DeckProps extends BoxProps {
  match: IMatch
  handleClickTopCard?: MouseEventHandler<HTMLDivElement>
  isTopCardSelected?: boolean
  playerId: IPlayer['id']
  deckThicknessPx?: number
  cardSize?: CardSize
}

export const defaultDeckThicknessPx = 30
export const defaultDeckCardSize = CardSize.MEDIUM

export const Deck = ({
  match,
  handleClickTopCard,
  isTopCardSelected,
  playerId,
  deckThicknessPx = defaultDeckThicknessPx,
  cardSize = defaultDeckCardSize,
  sx = [],
  ...rest
}: DeckProps) => {
  const { containerRef, selectedCardSxProps } = useSelectedCardPosition({
    cardSize,
  })

  const theme = useTheme()
  const player = lookup.getPlayer(match, playerId)

  const isSessionOwnerPlayer = playerId === match.sessionOwnerPlayerId

  return (
    <Box
      data-testid={`deck_${playerId}`}
      height={CARD_DIMENSIONS[cardSize].height}
      width={CARD_DIMENSIONS[cardSize].width}
      position="relative"
      ref={containerRef}
      sx={[
        {
          ...(!isSessionOwnerPlayer && { transform: 'rotate(180deg)' }),
        },
        ...(isSxArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      {player.deck.map((cardInstance, idx) => {
        const offset = (deckThicknessPx / player.deck.length) * idx
        const isTopCard = idx === player.deck.length - 1

        return (
          <Card
            key={cardInstance.instanceId}
            cardInstance={cardInstance}
            cardIdx={idx}
            playerId={player.id}
            position="absolute"
            isFlipped={!(isTopCard && isTopCardSelected)}
            size={cardSize}
            sx={{
              transform: `translateX(${offset}px) translateY(${offset / 2}px)`,
              transition: theme.transitions.create(['transform']),
              ...(isTopCard && isTopCardSelected && selectedCardSxProps),
            }}
            {...(isTopCard && {
              onClick: handleClickTopCard,
            })}
          />
        )
      })}
    </Box>
  )
}
