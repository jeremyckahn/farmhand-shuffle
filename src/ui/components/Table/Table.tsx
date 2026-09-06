import Box from '@mui/material/Box'
import Grid, { GridProps } from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

import { lookup } from '../../../game/services/Lookup'
import { IMatch } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { Deck } from '../Deck/Deck'
import { DiscardPile } from '../DiscardPile/DiscardPile'
import { Field } from '../Field/Field'
import { Hand } from '../Hand/Hand'

export interface TableProps extends GridProps {
  match: IMatch
}

// NOTE: On large screens (CardSize.MEDIUM hand cards), the Hand is anchored
// this many spacing units below the viewport bottom, leaving most of the
// card peeking into view. That offset is tuned in absolute px against
// MEDIUM's height, so it's scaled by the ratio of the actual hand card
// size's height to MEDIUM's below -- otherwise a much shorter card (e.g.
// CardSize.COMPACT on narrow viewports) would have nearly all of it hidden
// below the fold instead of the same proportion peeking into view.
const handBottomOffsetSpacingUnitsAtMediumSize = -8

export const Table = ({ match, ...rest }: TableProps) => {
  const theme = useTheme()
  const { sessionOwnerPlayerId: userPlayerId } = match
  const opponentPlayerIds = lookup.getOpponentPlayerIds(match)
  const useLargeCards = useMediaQuery(theme.breakpoints.up('md'))
  const handCardSize = useLargeCards ? CardSize.MEDIUM : CardSize.COMPACT
  // NOTE: Used by Field, Deck, and DiscardPile so all of a player's cards
  // shrink together on narrow viewports.
  const responsiveCardSize = useLargeCards ? CardSize.SMALL : CardSize.COMPACT
  const handBottomOffset = theme.spacing(
    handBottomOffsetSpacingUnitsAtMediumSize *
      (parseFloat(CARD_DIMENSIONS[handCardSize].height) /
        parseFloat(CARD_DIMENSIONS[CardSize.MEDIUM].height))
  )

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
                cardSize={responsiveCardSize}
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
              cardSize={responsiveCardSize}
            />
            <DiscardPile
              match={match}
              playerId={userPlayerId}
              cardSize={responsiveCardSize}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Field
            match={match}
            playerId={userPlayerId}
            cardSize={responsiveCardSize}
          />
        </Grid>
      </Grid>
      <Box position="fixed" left="50%" right="50%" bottom={handBottomOffset}>
        <Hand match={match} playerId={userPlayerId} cardSize={handCardSize} />
      </Box>
    </>
  )
}
