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

export const Hand = ({ playerId, game, sx = [], ...rest }: HandProps) => {
  const player = lookup.getPlayer(game, playerId)

  // FIXME: Center the hand
  return (
    <Box
      {...rest}
      data-testid={`hand_${playerId}`}
      sx={[
        {
          display: 'grid',
          ml: 'auto',
          mr: 'auto',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(auto-fit, minmax(10px, max-content))',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {player.hand.map((cardId, idx) => {
        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]

        return (
          <Card
            key={`${cardId}_${idx}`}
            card={card}
            sx={{ transform: 'rotate(-3deg)' }}
          />
        )
      })}
    </Box>
  )
}
