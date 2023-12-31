import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame } from '../../../game/types'
import { Deck } from '../Deck/Deck'
import { Field } from '../Field/Field'

export interface TableProps extends BoxProps {
  game: IGame
}

export const Table = ({ game, ...rest }: TableProps) => {
  const { userPlayerId } = game

  const opponentPlayerIds = lookup.getOpponentPlayerIds(game)

  // FIXME: Render player hand
  // FIXME: Render player discard pile

  return (
    <Box {...rest}>
      <Field game={game} playerId={userPlayerId} />
      {opponentPlayerIds.map(playerId => {
        return <Field key={playerId} game={game} playerId={playerId} />
      })}
      <Deck game={game} playerId={userPlayerId} />
    </Box>
  )
}
