import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { useTheme } from '@mui/material'

import { IPlayedCrop } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { CardSize } from '../../types'
import { Card, CropCardProps } from '../Card'
import { Image } from '../Image'
import { cards } from '../../img'

interface PlayedCropProps extends CropCardProps {
  playedCrop: IPlayedCrop
  cardSx?: CropCardProps['sx']
  sx?: BoxProps['sx']
}

export const PlayedCrop = ({ sx, cardSx, ...props }: PlayedCropProps) => {
  const { playedCrop, size = CardSize.MEDIUM } = props
  const theme = useTheme()

  return (
    <Box maxWidth={CARD_DIMENSIONS[size].width} sx={sx}>
      <Card size={size} sx={cardSx} {...props} />
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
              <Image src={cards.water} sx={{ imageRendering: 'pixelated' }} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
