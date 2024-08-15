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
  children,
  imageScale = 0.75,
  isFlipped = false,
  paperProps,
  size = CardSize.MEDIUM,
  sx = [],
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
      sx={[
        {
          height: CARD_DIMENSIONS[size].height,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: theme.transitions.create(['transform']),
          width: CARD_DIMENSIONS[size].width,
          ...(isFlipped && {
            transform: 'rotateY(180deg)',
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Paper
        {...paperProps}
        sx={[
          {
            backfaceVisibility: 'hidden',
            background:
              theme.palette.mode === 'light'
                ? darken(theme.palette.background.paper, 0.05)
                : lighten(theme.palette.background.paper, 0.15),
            display: 'flex',
            flexDirection: 'column',
            height: 1,
            p: theme.spacing(1),
            position: 'absolute',
            width: 1,
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
      <Paper
        {...paperProps}
        sx={{
          alignItems: 'center',
          backfaceVisibility: 'hidden',
          display: 'flex',
          height: 1,
          position: 'absolute',
          textAlign: 'center',
          transform: 'rotateY(180deg)',
          width: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: theme.typography.h4.fontSize,
            fontWeight: theme.typography.h4.fontWeight,
            lineHeight: theme.typography.h4.lineHeight,
          }}
        >
          Farmhand Shuffle
        </Typography>
      </Paper>
    </Box>
  )
}
