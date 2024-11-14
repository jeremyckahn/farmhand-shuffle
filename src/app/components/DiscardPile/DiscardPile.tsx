import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import Tooltip from '@mui/material/Tooltip'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { CardSize } from '../../types'
import { Card } from '../Card'
import { CARD_DIMENSIONS } from '../../config/dimensions'

export interface DiscardPileProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
  cardSize?: CardSize
  discardPileThicknessPx?: number
}

export const defaultDiscardPileThicknessPx = 30
export const defaultDiscardPileCardSize = CardSize.MEDIUM

export const DiscardPile = ({
  playerId,
  game,
  cardSize = defaultDiscardPileCardSize,
  discardPileThicknessPx = defaultDiscardPileThicknessPx,
  ...rest
}: DiscardPileProps) => {
  const theme = useTheme()
  const player = lookup.getPlayer(game, playerId)

  const isSessionOwnerPlayer = playerId === game.sessionOwnerPlayerId

  return (
    <Box
      data-testid={`discard-pile_${playerId}`}
      height={CARD_DIMENSIONS[cardSize].height}
      width={CARD_DIMENSIONS[cardSize].width}
      position="relative"
      sx={{
        ...(!isSessionOwnerPlayer && { transform: 'rotate(180deg)' }),
      }}
      {...rest}
    >
      {player.discardPile.map((card, idx) => {
        const offset =
          (discardPileThicknessPx / player.discardPile.length) * idx

        return (
          <Tooltip
            key={`${card.id}_${idx}`}
            title={card.name}
            placement="top"
            arrow
          >
            <Card
              card={card}
              position="absolute"
              sx={{
                transform: `translateX(${offset}px)`,
                transition: theme.transitions.create(['transform']),
              }}
            />
          </Tooltip>
        )
      })}
    </Box>
  )
}
