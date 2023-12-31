import Box, { BoxProps } from '@mui/material/Box'

import { InvalidIdError } from '../../../game/services/Rules/errors'
import { IGame, IPlayer } from '../../../game/types'

export interface DiscardPileProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const DiscardPile = ({ playerId, game, ...rest }: DiscardPileProps) => {
  const player = game.table.players[playerId]

  if (!player) {
    throw new InvalidIdError(
      `playerId ${playerId} does not correspond to any players in the game.`
    )
  }

  return (
    <Box {...rest} data-testid={`discard-pile_${playerId}`}>
      {JSON.stringify(player.discardPile, null, 2)}
    </Box>
  )
}
