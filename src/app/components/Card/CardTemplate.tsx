import React, { useContext, useEffect, useRef, useState } from 'react'
import { useIsMounted } from 'usehooks-ts'
import { v4 as uuid } from 'uuid'
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
import { isSxArray } from '../../type-guards'
import { CardAnimationContext } from '../../contexts/CardAnimation/CardAnimation'
import { sleep } from '../../../lib/sleep'

import { CardProps } from './Card'

export const cardClassName = 'Card'
export const cardFlipWrapperClassName = 'CardFlipWrapper'

export const CardTemplate = React.forwardRef<HTMLDivElement, CardProps>(
  function CardTemplate(
    {
      card,
      children,
      imageScale = 0.75,
      isFlipped = false,
      isProxy = false,
      paperProps,
      size = CardSize.MEDIUM,
      sx = [],
      ...props
    },
    containerRef
  ) {
    const theme = useTheme()
    const cardRef = useRef<HTMLDivElement>(null)

    const { mountProxy, unmountProxy, updateProxy } =
      useContext(CardAnimationContext)
    const imageSrc = isCardImageKey(card.id) ? cards[card.id] : ui.pixel
    const [instanceId] = useState(() => uuid())
    const isMounted = useIsMounted()

    if (imageSrc === ui.pixel) {
      console.error(`Card ID ${card.id} does not have an image configured`)
    }

    useEffect(() => {
      if (!isProxy) {
        mountProxy(card.id, instanceId)
      }

      return () => {
        if (!isProxy) {
          unmountProxy(card.id, instanceId)
        }
      }
    }, [isProxy, instanceId])

    useEffect(() => {
      if (isProxy) return
      ;(async () => {
        await sleep(1)

        if (!isMounted()) return

        const { current: element } = cardRef
        if (!element) return

        // See: https://stackoverflow.com/a/26893663/470685
        //const scale =
        //element.getBoundingClientRect().width / element.offsetWidth

        const { transform } = window.getComputedStyle(element)
        // See: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
        const matrix = transform
          ?.split('(')[1]
          ?.split(')')[0]
          ?.split(',')
          .map(Number)

        if (!matrix) return

        const [a, b] = matrix
        const scale = Math.sqrt(a * a + b * b)
        //const rotate = Math.round(Math.atan2(b, a) * (180 / Math.PI))

        const { x, y } = element.getBoundingClientRect()
        updateProxy({
          cardId: card.id,
          instanceId,
          x,
          y,
          scale,
          // FIXME: Use real rotation values
          rotateX: 0,
          rotateY: 0,
        })
      })()
    }, [sx])

    return (
      <Box
        ref={containerRef}
        className={cardClassName}
        sx={[
          {
            perspective: '1000px',
            height: CARD_DIMENSIONS[size].height,
            width: CARD_DIMENSIONS[size].width,
            // FIXME: This is WIP
            ...(isProxy && { visibility: 'hidden' }),
          },
          ...(isSxArray(sx) ? sx : [sx]),
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
              width: CARD_DIMENSIONS[size].width,
              ...(isFlipped && {
                transform: 'rotateY(180deg)',
              }),
              ...(isProxy && {
                transition: theme.transitions.create([
                  'transform',
                  'box-shadow',
                ]),
              }),
            },
          ]}
        >
          <Paper
            ref={cardRef}
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
                ...(size === CardSize.SMALL && theme.typography.h6),
                ...(size === CardSize.MEDIUM && theme.typography.h5),
                ...(size === CardSize.LARGE && theme.typography.h4),
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
