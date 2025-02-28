import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { useTheme } from '@mui/material'

import { IPlayedCrop, isCropCard } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { Card, CropCardProps } from '../Card'
import { Image } from '../Image'
import { cards as cardImages } from '../../img'
import { InvalidCardError } from '../../../game/services/Rules/errors'

export interface PlayedCropProps extends BoxProps {
  isInBackground: boolean
  cropCardProps: CropCardProps & { playedCrop: IPlayedCrop }
}

export const unfilledWaterIndicatorOpacity = 0.25

export const PlayedCrop = ({
  isInBackground,
  cropCardProps: { ref, ...cropCardProps },
  ...props
}: PlayedCropProps) => {
  const { card, playedCrop, size = CardSize.MEDIUM } = cropCardProps
  const theme = useTheme()

  if (!isCropCard(card)) {
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

          if (isInBackground) {
            opacity = 0
          } else if (idx >= playedCrop.waterCards) {
            opacity = unfilledWaterIndicatorOpacity
          }

          return (
            <Grid key={idx} item sx={{ pt: `${theme.spacing(0)} !important` }}>
              <Image
                src={cardImages.water}
                alt="Water card indicator"
                sx={{
                  imageRendering: 'pixelated',
                  opacity,
                  transition: theme.transitions.create(['opacity']),
                }}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
