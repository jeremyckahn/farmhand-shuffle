import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { useTheme } from '@mui/material'

import { IPlayedCrop } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { Card, CropCardProps } from '../Card'
import { Image } from '../Image'
import { cards } from '../../img'

export interface PlayedCropProps extends BoxProps {
  isInBackground: boolean
  cropCardProps: CropCardProps & { playedCrop: IPlayedCrop }
}

export const PlayedCrop = ({
  isInBackground,
  cropCardProps,
  ...props
}: PlayedCropProps) => {
  const { playedCrop, size = CardSize.MEDIUM } = cropCardProps
  const theme = useTheme()

  return (
    <Box maxWidth={CARD_DIMENSIONS[size].width} {...props}>
      <Card size={size} {...cropCardProps} />
      <Grid
        container
        spacing={1}
        pt={2.5}
        ml={theme.spacing(-0.5)}
        justifyContent="flex-start"
      >
        {new Array(playedCrop.waterCards).fill(null).map((_, idx) => {
          return (
            <Grid key={idx} item sx={{ pt: `${theme.spacing(0)} !important` }}>
              <Image
                src={cards.water}
                alt="Water card indicator"
                sx={{
                  imageRendering: 'pixelated',
                  opacity: isInBackground ? 0 : 1,
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
