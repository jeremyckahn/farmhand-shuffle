import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { Card } from '../Card'
import * as cards from '../../../game/cards'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'

export interface HandProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

// FIXME: Move this to a service
/**
 * Based on https://stackoverflow.com/a/14224813/470685
 */
const scaleNumber = (
  value: number,
  min: number,
  max: number,
  baseMin: number,
  baseMax: number
) => ((value - min) * (baseMax - baseMin)) / (max - min) + baseMin

export const Hand = ({ playerId, game, sx = [], ...rest }: HandProps) => {
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box
      {...rest}
      data-testid={`hand_${playerId}`}
      sx={[
        {
          position: 'relative',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {player.hand.map((cardId, idx) => {
        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]

        const gapWidthPx = 50
        const gapWidthTotal = gapWidthPx * player.hand.length
        const xOffsetPx = scaleNumber(
          idx / player.hand.length,
          0,
          1,
          -gapWidthTotal,
          gapWidthTotal
        )

        const rotationDeg = -5
        const translateX = `calc(-50% + ${gapWidthPx}px + ${xOffsetPx}px)`
        const translateY = '-50%'

        return (
          <Card
            key={`${cardId}_${idx}`}
            card={card}
            sx={{
              transform: `translateX(${translateX}) translateY(${translateY}) rotate(${rotationDeg}deg)`,
              position: 'absolute',
            }}
          />
        )
      })}
    </Box>
  )
}
