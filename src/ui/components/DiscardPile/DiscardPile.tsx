import Box, { BoxProps } from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { Card } from '../Card'

export interface DiscardPileProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
  cardSize?: CardSize
  discardPileThicknessPx?: number
}

export const defaultDiscardPileThicknessPx = 30
export const defaultDiscardPileCardSize = CardSize.SMALL

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
        // NOTE: This is needed to fix a Firefox bug that prevents opponent
        // discard piles from appearing upside down
        transformStyle: 'preserve-3d',
        outlineStyle: 'solid',
        outlineWidth: '2px',
        outlineColor: theme.palette.divider,
        borderRadius: theme.shape.borderRadius,
        ...(!isSessionOwnerPlayer && { transform: 'rotate(180deg)' }),
      }}
      {...rest}
    >
      {player.discardPile.map((cardInstance, idx) => {
        const offset =
          (discardPileThicknessPx / player.discardPile.length) * idx

        return (
          <Tooltip
            key={cardInstance.instanceId}
            title={cardInstance.name}
            placement="top"
            arrow
          >
            <Card
              cardInstance={cardInstance}
              size={cardSize}
              cardIdx={idx}
              playerId={playerId}
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
