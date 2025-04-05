import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'

import { IPlayedCrop } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { Card } from '../Card'
import { CropCardProps } from '../Card/types'

import { WaterIndicator } from './WaterIndicator'
import { usePlayedCropLogic } from './usePlayedCropLogic'

export interface PlayedCropProps extends BoxProps {
  cropCardProps: CropCardProps & { playedCrop: IPlayedCrop }
  isInBackground: boolean
}

export const unfilledWaterIndicatorOpacity = 0.25

export const playedCropClassName = 'PlayedCrop'

export const PlayedCrop = ({
  isInBackground,
  cropCardProps: { ref, ...cropCardProps },
  ...props
}: PlayedCropProps) => {
  const theme = useTheme()

  const { cardInstance, playedCrop, size = CardSize.MEDIUM } = cropCardProps

  const { canBeWatered, canBeHarvested, waterIconsToRender } =
    usePlayedCropLogic({ card: cardInstance, playedCrop })

  return (
    <Box
      className={playedCropClassName}
      maxWidth={CARD_DIMENSIONS[size].width}
      {...props}
    >
      <Card
        size={size}
        canBeWatered={canBeWatered}
        canBeHarvested={canBeHarvested}
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
