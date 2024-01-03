import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { Card } from '../Card'
import * as cards from '../../../game/cards'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import { CARD_WIDTH } from '../../config/dimensions'

export interface HandProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

const cardGap = '2rem'

export const Hand = ({ playerId, game, sx = [], ...rest }: HandProps) => {
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box
      {...rest}
      data-testid={`hand_${playerId}`}
      sx={[
        {
          display: 'flex',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {player.hand.map((cardId, idx) => {
        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]
        const isLastCard = idx === player.hand.length - 1

        return (
          <Box
            sx={{
              overflow: 'visible',
              width: isLastCard ? CARD_WIDTH : cardGap,
              flexGrow: isLastCard ? 0 : 1,
            }}
          >
            <Card
              key={`${cardId}_${idx}`}
              card={card}
              sx={{ transform: 'rotate(-3deg)' }}
            />
          </Box>
        )
      })}
    </Box>
  )
}
