import Box from '@mui/material/Box'
import Grid, { GridProps } from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

import { lookup } from '../../../game/services/Lookup'
import { IGame } from '../../../game/types'
import { CardSize } from '../../types'
import { Deck } from '../Deck/Deck'
import { DiscardPile } from '../DiscardPile/DiscardPile'
import { Field } from '../Field/Field'
import { Hand } from '../Hand/Hand'

export interface TableProps extends GridProps {
  game: IGame
}

export const Table = ({ game, ...rest }: TableProps) => {
  const theme = useTheme()
  const { sessionOwnerPlayerId: userPlayerId } = game
  const opponentPlayerIds = lookup.getOpponentPlayerIds(game)
  const useLargeCards = useMediaQuery(theme.breakpoints.up('md'))
  const handCardSize = useLargeCards ? CardSize.MEDIUM : CardSize.SMALL

  return (
    <>
      <Grid
        gap={4}
        container
        {...rest}
        data-testid={`table_${game.sessionOwnerPlayerId}`}
      >
        <Grid item xs={12}>
          {opponentPlayerIds.map(playerId => {
            return (
              <Field
                key={playerId}
                game={game}
                playerId={playerId}
                cardSize={CardSize.SMALL}
              />
            )
          })}
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignContent="center"
          >
            <Deck
              game={game}
              playerId={userPlayerId}
              cardSize={CardSize.SMALL}
            />
            <DiscardPile game={game} playerId={userPlayerId} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Field game={game} playerId={userPlayerId} />
        </Grid>
      </Grid>
      <Box position="fixed" left="50%" right="50%" bottom={theme.spacing(-8)}>
        <Hand game={game} playerId={userPlayerId} cardSize={handCardSize} />
      </Box>
    </>
  )
}
