import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'

export interface DiscardPileProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const DiscardPile = ({ playerId, game, ...rest }: DiscardPileProps) => {
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box {...rest} data-testid={`discard-pile_${playerId}`}>
      {JSON.stringify(player.discardPile, null, 2)}
    </Box>
  )
}
