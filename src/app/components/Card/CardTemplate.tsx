import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import { darken, lighten } from '@mui/material/styles'

import { CARD_DIMENSIONS } from '../../config/dimensions'
import { cards, isCardImageKey, ui } from '../../img'
import { Image } from '../Image'
import { CardSize } from '../../types'

import { CardProps } from './Card'

export const cardClassName = 'Card'

export const CardTemplate = ({
  card,
  imageScale = 0.75,
  size = CardSize.MEDIUM,
  sx = [],
  children,
  paperProps,
  ...props
}: CardProps) => {
  const theme = useTheme()
  const imageSrc = isCardImageKey(card.id) ? cards[card.id] : ui.pixel

  if (imageSrc === ui.pixel) {
    console.error(`Card ID ${card.id} does not have an image configured`)
  }

  return (
    <Box
      className={cardClassName}
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      <Paper
        {...paperProps}
        sx={[
          {
            width: CARD_DIMENSIONS[size].width,
            height: CARD_DIMENSIONS[size].height,
            background:
              theme.palette.mode === 'light'
                ? darken(theme.palette.background.paper, 0.05)
                : lighten(theme.palette.background.paper, 0.15),
            display: 'flex',
            flexDirection: 'column',
            p: theme.spacing(1),
            position: 'relative',
          },
        ]}
      >
        <Typography
          variant="overline"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          {card.name}
        </Typography>
        <Box
          sx={{
            height: '50%',
            display: 'flex',
            background: theme.palette.common.white,
            backgroundImage: `url(${ui.dirt})`,
            backgroundSize: '100%',
            backgroundRepeat: 'repeat',
            borderColor: theme.palette.divider,
            borderRadius: `${theme.shape.borderRadius}px`,
            borderWidth: 1,
            borderStyle: 'solid',
            imageRendering: 'pixelated',
          }}
        >
          <Image
            src={imageSrc}
            alt={card.name}
            sx={{
              height: `${100 * imageScale}%`,
              p: 0,
              m: 'auto',
              imageRendering: 'pixelated',
              filter: `drop-shadow(0 0 5px ${theme.palette.common.white})`,
            }}
          />
        </Box>
        <Divider sx={{ my: theme.spacing(1) }} />
        <Box sx={{ height: '50%' }}>{children}</Box>
      </Paper>
    </Box>
  )
}
