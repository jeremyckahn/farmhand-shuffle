import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import { SxProps, darken, lighten } from '@mui/material/styles'

import { CARD_DIMENSIONS } from '../../config/dimensions'
import { cards, isCardImageKey, ui } from '../../img'
import { Image } from '../Image'
import { CardSize } from '../../types'

import { CardProps } from './Card'

export const card3DPerspectiveWrapperClassName = 'Card3DWrapper'
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

  const sxArray: SxProps = Array.isArray(sx) ? sx : [sx]
  const isBeingTransformed = sxArray.some(
    sx => typeof sx === 'object' && sx !== null && 'transform' in sx
  )

  const baseCard = (
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
        ...sxArray,
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
          variant="h2"
          sx={{
            ...theme.typography.h4,
          }}
        >
          Farmhand Shuffle
        </Typography>
      </Paper>
    </Box>
  )

  // NOTE: If the card is being transformed by the parent component, the
  // perspective wrapper will visually distort it. To avoid that, return the
  // base card to be rendered directly.
  if (isBeingTransformed) {
    return baseCard
  }

  // NOTE: If the card is not being transformed by the parent component, render
  // it in a wrapper with styles that will result in a 3D effect to enhance the
  // card flip animation.
  return (
    <Box
      className={card3DPerspectiveWrapperClassName}
      sx={{
        perspective: '1000px',
        height: CARD_DIMENSIONS[size].height,
        width: CARD_DIMENSIONS[size].width,
      }}
    >
      {baseCard}
    </Box>
  )
}
