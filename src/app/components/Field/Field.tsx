import Box, { BoxProps } from '@mui/material/Box'

import { InvalidIdError } from '../../../game/services/Rules/errors'

import { IGame, IPlayer } from '../../../game/types/index'

export interface FieldProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Field = ({ playerId, game, ...rest }: FieldProps) => {
  const player = game.table.players[playerId]

  if (!player) {
    throw new InvalidIdError(
      `playerId ${playerId} does not correspond to any players in the game.`
    )
  }

  return <Box {...rest}>{JSON.stringify(player, null, 2)}</Box>
}
