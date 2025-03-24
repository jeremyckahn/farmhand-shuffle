import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'

import { InvalidCardError } from '../../../game/services/Rules/errors'
import { IPlayedCrop, isCropCardInstance } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { Card, CropCardProps } from '../Card'

import { WaterIndicator } from './WaterIndicator'

export interface PlayedCropProps extends BoxProps {
  cropCardProps: CropCardProps & { playedCrop: IPlayedCrop }
  isInBackground: boolean
}

export const unfilledWaterIndicatorOpacity = 0.25

export const PlayedCrop = ({
  isInBackground,
  cropCardProps: { ref, ...cropCardProps },
  ...props
}: PlayedCropProps) => {
  const {
    cardInstance: card,
    playedCrop,
    size = CardSize.MEDIUM,
  } = cropCardProps
  const theme = useTheme()

  if (!isCropCardInstance(card)) {
    throw new InvalidCardError(`${card.id} is not a crop card.`)
  }

  const waterIconsToRender = Math.max(playedCrop.waterCards, card.waterToMature)

  return (
    <Box maxWidth={CARD_DIMENSIONS[size].width} {...props}>
      <Card
        size={size}
        canBeWatered={playedCrop.wasWateredTuringTurn === false}
        {...cropCardProps}
      />
      <Grid
        container
        spacing={1}
        pt={2.5}
        ml={theme.spacing(-0.5)}
        justifyContent="flex-start"
      >
        {new Array(waterIconsToRender).fill(null).map((_, idx) => {
          let opacity = 1

          const isFilled = idx < playedCrop.waterCards

          if (isInBackground) {
            opacity = 0
          } else if (!isFilled) {
            opacity = unfilledWaterIndicatorOpacity
          }

          return (
            <Grid key={idx} item sx={{ pt: `${theme.spacing(0)} !important` }}>
              <WaterIndicator
                cardInstance={playedCrop.instance}
                isFilled={isFilled}
                opacity={opacity}
                playerId={cropCardProps.playerId}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
