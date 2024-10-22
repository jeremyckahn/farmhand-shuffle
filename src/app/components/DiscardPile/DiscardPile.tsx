import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import * as cards from '../../../game/cards'
import { CardSize } from '../../types'
import { Card } from '../Card'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'

export interface DiscardPileProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
  size?: CardSize
  discardPileThicknessPx?: number
}

export const defaultDiscardPileThicknessPx = 30
export const defaultDiscardPileCardSize = CardSize.MEDIUM

export const DiscardPile = ({
  playerId,
  game,
  size = defaultDiscardPileCardSize,
  discardPileThicknessPx = defaultDiscardPileThicknessPx,
  ...rest
}: DiscardPileProps) => {
  const theme = useTheme()
  const player = lookup.getPlayer(game, playerId)

  const isSessionOwnerPlayer = playerId === game.sessionOwnerPlayerId

  return (
    <Box
      data-testid={`discard-pile_${playerId}`}
      height={CARD_DIMENSIONS[size].height}
      width={CARD_DIMENSIONS[size].width}
      position="relative"
      sx={{
        ...(!isSessionOwnerPlayer && { transform: 'rotate(180deg)' }),
      }}
      {...rest}
    >
      {player.discardPile.map((cardId, idx) => {
        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]
        const offset =
          (discardPileThicknessPx / player.discardPile.length) * idx

        return (
          <Card
            key={`${cardId}_${idx}`}
            card={card}
            position="absolute"
            sx={{
              transform: `translateX(${offset}px)`,
              transition: theme.transitions.create(['transform']),
            }}
          />
        )
      })}
    </Box>
  )
}
