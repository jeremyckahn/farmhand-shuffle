import Box from '@mui/material/Box'
import Grid, { GridProps } from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

import { lookup } from '../../../game/services/Lookup'
import { IMatch } from '../../../game/types'
import { CardSize } from '../../types'
import { Deck } from '../Deck/Deck'
import { DiscardPile } from '../DiscardPile/DiscardPile'
import { Field } from '../Field/Field'
import { Hand } from '../Hand/Hand'

export interface TableProps extends GridProps {
  match: IMatch
}

export const Table = ({ match, ...rest }: TableProps) => {
  const theme = useTheme()
  const { sessionOwnerPlayerId: userPlayerId } = match
  const opponentPlayerIds = lookup.getOpponentPlayerIds(match)
  const useLargeCards = useMediaQuery(theme.breakpoints.up('md'))
  const handCardSize = useLargeCards ? CardSize.MEDIUM : CardSize.SMALL

  return (
    <>
      <Grid
        gap={4}
        container
        {...rest}
        data-testid={`table_${match.sessionOwnerPlayerId}`}
      >
        <Grid item xs={12}>
          {opponentPlayerIds.map(playerId => {
            return (
              <Field
                key={playerId}
                match={match}
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
              match={match}
              playerId={userPlayerId}
              cardSize={CardSize.SMALL}
            />
            <DiscardPile match={match} playerId={userPlayerId} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Field match={match} playerId={userPlayerId} />
        </Grid>
      </Grid>
      <Box position="fixed" left="50%" right="50%" bottom={theme.spacing(-8)}>
        <Hand match={match} playerId={userPlayerId} cardSize={handCardSize} />
      </Box>
    </>
  )
}
