import { Box, darken, Grid, lighten, Typography, useTheme } from '@mui/material'
import { useContext } from 'react'

import { MatchEvent, MatchState } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { useMatchRules } from '../../hooks/useMatchRules'
import { CardSize } from '../../types'
import { ActorContext } from '../Match/ActorContext'
import { ShellContext } from '../Match/ShellContext'

import { FieldProps } from './Field'

export const EmptyPlot = ({
  cardSize = CardSize.SMALL,
  playerId,
  fieldIdx,
}: Pick<FieldProps, 'cardSize' | 'playerId'> & {
  fieldIdx: number
}) => {
  const theme = useTheme()

  const { useActorRef } = ActorContext
  const actorRef = useActorRef()
  const {
    matchState,
    match: { currentPlayerId, sessionOwnerPlayerId },
  } = useMatchRules()
  const { selectedHandCardIdx } = useContext(ShellContext)

  const canBeSelected =
    currentPlayerId === sessionOwnerPlayerId &&
    currentPlayerId === playerId &&
    matchState === MatchState.CHOOSING_CARD_POSITION

  const handleClick = () => {
    if (!canBeSelected) {
      return
    }

    actorRef.send({
      type: MatchEvent.SELECT_CARD_POSITION,
      playerId,
      cardIdxInHand: selectedHandCardIdx,
      fieldIdxToPlace: fieldIdx,
    })
  }

  return (
    <Grid item xs={6} sm={4} md={2}>
      <Box
        height={CARD_DIMENSIONS[cardSize].height}
        width={CARD_DIMENSIONS[cardSize].width}
        onClick={handleClick}
        sx={{
          mx: 'auto',
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineColor: canBeSelected
            ? theme.palette.primary.light
            : theme.palette.divider,
          borderRadius: theme.shape.borderRadius,
          transition: theme.transitions.create(['background', 'transform']),
          boxShadow: canBeSelected
            ? `0 0 12px 4px ${theme.palette.primary.light}`
            : 'none',
          alignContent: 'center',
          ...(canBeSelected && {
            cursor: 'pointer',
            ':hover': {
              transform: 'scale(1.2)',
              background:
                theme.palette.mode === 'light'
                  ? darken(theme.palette.primary.light, 0.1)
                  : lighten(theme.palette.primary.light, 0.5),
              '> p': {
                opacity: 1,
              },
            },
          }),
        }}
      >
        {canBeSelected && (
          <Typography
            variant="caption"
            component="p"
            sx={{
              color: theme.palette.primary.contrastText,
              fontWeight: theme.typography.fontWeightBold,
              opacity: 0,
              textAlign: 'center',
              textTransform: 'uppercase',
              transition: theme.transitions.create(['opacity']),
            }}
          >
            Place card
          </Typography>
        )}
      </Box>
    </Grid>
  )
}
