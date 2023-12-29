import Box, { BoxProps } from '@mui/material/Box'

import { IGame } from '../../../game/types'
import { Field } from '../Field/Field'

export interface TableProps extends BoxProps {
  game: IGame
}

export const Table = ({ game, ...rest }: TableProps) => {
  const { userPlayerId } = game

  // FIXME: Move this to a service
  const otherPlayers = Object.keys(game.table.players).filter(
    playerId => playerId !== userPlayerId
  )

  // FIXME: Render player deck
  // FIXME: Render player hand
  // FIXME: Render player discard pile

  return (
    <Box {...rest}>
      <Field game={game} playerId={userPlayerId} />
      {otherPlayers.map(playerId => {
        return <Field key={playerId} game={game} playerId={playerId} />
      })}
    </Box>
  )
}
