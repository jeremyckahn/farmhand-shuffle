import Box, { BoxProps } from '@mui/material/Box'

import { Grid } from '@mui/material'

import * as cards from '../../../game/cards'
import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { Card } from '../Card'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'

export interface FieldProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Field = ({ playerId, game, ...rest }: FieldProps) => {
  const player = lookup.getPlayer(game, playerId)

  return (
    <Box {...rest} data-testid={`field_${playerId}`}>
      <Grid container spacing={2}>
        {player.field.crops.map(({ id, waterCards }, idx) => {
          if (!isCardId(id)) {
            throw new UnimplementedError(`${id} is not a card`)
          }

          const card = cards[id]

          return (
            <Grid key={`${idx}_${id}_${waterCards}`} item xs>
              <Card card={card} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
