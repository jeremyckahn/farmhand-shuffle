import Box, { BoxProps } from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame } from '../../../game/types'
import { Deck } from '../Deck/Deck'
import { DiscardPile } from '../DiscardPile/DiscardPile'
import { Field } from '../Field/Field'
import { Hand } from '../Hand/Hand'

export interface TableProps extends BoxProps {
  game: IGame
}

export const Table = ({ game, ...rest }: TableProps) => {
  const { userPlayerId } = game

  const opponentPlayerIds = lookup.getOpponentPlayerIds(game)

  return (
    <Box {...rest} data-testid={`table_${game.userPlayerId}`}>
      <Field game={game} playerId={userPlayerId} />
      {opponentPlayerIds.map(playerId => {
        return <Field key={playerId} game={game} playerId={playerId} />
      })}
      <Deck game={game} playerId={userPlayerId} />
      <Hand game={game} playerId={userPlayerId} />
      <DiscardPile game={game} playerId={userPlayerId} />
    </Box>
  )
}
