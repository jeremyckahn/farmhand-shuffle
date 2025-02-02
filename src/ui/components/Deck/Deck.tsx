import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import { MouseEventHandler } from 'react'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import * as cards from '../../../game/cards'
import { Card } from '../Card'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { useSelectedCardPosition } from '../../hooks/useSelectedCardPosition'
import { isSxArray } from '../../type-guards'

export interface DeckProps extends BoxProps {
  game: IGame
  handleClickTopCard?: MouseEventHandler<HTMLDivElement>
  isTopCardSelected?: boolean
  playerId: IPlayer['id']
  deckThicknessPx?: number
  cardSize?: CardSize
}

export const defaultDeckThicknessPx = 30
export const defaultDeckCardSize = CardSize.MEDIUM

export const Deck = ({
  game,
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
  const player = lookup.getPlayer(game, playerId)

  const isSessionOwnerPlayer = playerId === game.sessionOwnerPlayerId

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
      {player.deck.map((_, idx, deck) => {
        // NOTE: Looping backwards through the deck prevents card animation
        // artifacting (for some reason)
        const cardId = deck[deck.length - 1 - idx]

        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]
        const offset = (deckThicknessPx / player.deck.length) * idx
        const isTopCard = idx === player.deck.length - 1

        return (
          <Card
            key={`${cardId}_${idx}`}
            card={card}
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
