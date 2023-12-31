import Box, { BoxProps } from '@mui/material/Box'

import { InvalidIdError } from '../../../game/services/Rules/errors'
import { IGame, IPlayer } from '../../../game/types'

export interface DeckProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Deck = ({ playerId, game, ...rest }: DeckProps) => {
  const player = game.table.players[playerId]

  if (!player) {
    throw new InvalidIdError(
      `playerId ${playerId} does not correspond to any players in the game.`
    )
  }

  return (
    <Box {...rest} data-testid={`deck_${playerId}`}>
      {JSON.stringify(player.deck, null, 2)}
    </Box>
  )
}
