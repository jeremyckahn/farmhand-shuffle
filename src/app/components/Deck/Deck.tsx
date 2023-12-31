import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'

export interface DeckProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Deck = ({ playerId, game, ...rest }: DeckProps) => {
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box {...rest} data-testid={`deck_${playerId}`}>
      {JSON.stringify(player.deck, null, 2)}
    </Box>
  )
}
