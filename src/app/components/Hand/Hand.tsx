import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'

export interface HandProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Hand = ({ playerId, game, ...rest }: HandProps) => {
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box {...rest} data-testid={`hand_${playerId}`}>
      {JSON.stringify(player.hand, null, 2)}
    </Box>
  )
}
