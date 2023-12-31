import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'

export interface FieldProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Field = ({ playerId, game, ...rest }: FieldProps) => {
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box {...rest} data-testid={`field_${playerId}`}>
      {JSON.stringify(player, null, 2)}
    </Box>
  )
}
