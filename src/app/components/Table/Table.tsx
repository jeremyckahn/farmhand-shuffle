import Box, { BoxProps } from '@mui/material/Box'

import { IGame } from '../../../game/types'
import { Field } from '../Field/Field'

export interface TableProps extends BoxProps {
  game: IGame
}

export const Table = ({ game, ...rest }: TableProps) => {
  const { userPlayerId } = game

  // FIXME: Test this
  const otherPlayers = Object.entries(game.table.players).reduce(
    (acc: typeof game.table.players, [playerId, player]) => {
      if (playerId !== userPlayerId) {
        acc[playerId] = player
      }

      return acc
    },
    {}
  )

  // FIXME: Render player deck
  // FIXME: Render player hand
  // FIXME: Render player discard pile

  return (
    <Box {...rest}>
      <Field game={game} playerId={userPlayerId} />
      {Object.keys(otherPlayers).map(playerId => {
        return <Field key={playerId} game={game} playerId={playerId} />
      })}
    </Box>
  )
}
