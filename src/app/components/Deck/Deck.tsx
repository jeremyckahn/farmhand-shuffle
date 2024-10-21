import Box, { BoxProps } from '@mui/material/Box'

import useTheme from '@mui/material/styles/useTheme'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import * as cards from '../../../game/cards'
import { Card } from '../Card'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'

export interface DeckProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
  size?: CardSize
  deckThicknessPx?: number
}

export const defaultDeckThicknessPx = 30
export const defaultDeckCardSize = CardSize.MEDIUM

export const Deck = ({
  playerId,
  game,
  size = defaultDeckCardSize,
  deckThicknessPx = defaultDeckThicknessPx,
  ...rest
}: DeckProps) => {
  const theme = useTheme()
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box
      data-testid={`deck_${playerId}`}
      height={CARD_DIMENSIONS[size].height}
      width={CARD_DIMENSIONS[size].width}
      position="relative"
      {...rest}
    >
      {player.deck.map((cardId, idx) => {
        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]
        const offset = (deckThicknessPx / player.deck.length) * idx

        return (
          <Card
            key={`${cardId}_${idx}`}
            card={card}
            position="absolute"
            isFlipped
            sx={{
              transform: `translateX(${offset}px) translateY(${offset / 2}px)`,
              transition: theme.transitions.create(['transform']),
            }}
          />
        )
      })}
    </Box>
  )
}
