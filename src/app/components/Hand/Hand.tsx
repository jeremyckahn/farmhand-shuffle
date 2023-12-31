import Box, { BoxProps } from '@mui/material/Box'

import { InvalidIdError } from '../../../game/services/Rules/errors'
import { IGame, IPlayer } from '../../../game/types'

export interface HandProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Hand = ({ playerId, game, ...rest }: HandProps) => {
  const player = game.table.players[playerId]

  if (!player) {
    throw new InvalidIdError(
      `playerId ${playerId} does not correspond to any players in the game.`
    )
  }

  return (
    <Box {...rest} data-testid={`hand_${playerId}`}>
      {JSON.stringify(player.hand, null, 2)}
    </Box>
  )
}
