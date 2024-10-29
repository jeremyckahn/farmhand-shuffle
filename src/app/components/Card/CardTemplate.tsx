import React from 'react'
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
export const cardFlipWrapperClassName = 'CardFlipWrapper'

export const CardTemplate = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      card,
      children,
      imageScale = 0.75,
      isFlipped = false,
      paperProps,
      size = CardSize.MEDIUM,
      sx = [],
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const imageSrc = isCardImageKey(card.id) ? cards[card.id] : ui.pixel

    if (imageSrc === ui.pixel) {
      console.error(`Card ID ${card.id} does not have an image configured`)
    }

    return (
      <Box
        ref={ref}
        className={cardClassName}
        sx={[
          {
            perspective: '1000px',
            height: CARD_DIMENSIONS[size].height,
            width: CARD_DIMENSIONS[size].width,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...props}
      >
        <Box
          className={cardFlipWrapperClassName}
          sx={[
            {
              height: CARD_DIMENSIONS[size].height,
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: theme.transitions.create(['transform', 'box-shadow']),
              width: CARD_DIMENSIONS[size].width,
              ...(isFlipped && {
                transform: 'rotateY(180deg)',
              }),
            },
          ]}
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
      </Box>
    )
  }
)

CardTemplate.displayName = 'CardTemplate'
