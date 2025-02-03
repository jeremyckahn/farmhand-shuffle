import React, { useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
import { ActorContext } from '../Game/ActorContext'
import { GameEvent, isCropCard } from '../../../game/types'

import { CardFocusMode, CardProps } from './Card'

export const cardClassName = 'Card'
export const cardFlipWrapperClassName = 'CardFlipWrapper'

export const CardTemplate = React.forwardRef<HTMLDivElement, CardProps>(
  function CardTemplate(
    {
      card,
      cardIdx,
      playerId,
      children,
      cardFocusMode,
      imageScale = 0.75,
      isFlipped = false,
      paperProps,
      size = CardSize.MEDIUM,
      sx = [],
      ...props
    },
    containerRef
  ) {
    const { useActorRef } = ActorContext
    const actorRef = useActorRef()
    const theme = useTheme()
    const cardRef = useRef<HTMLDivElement>(null)

    const imageSrc = isCardImageKey(card.id) ? cards[card.id] : ui.pixel

    if (imageSrc === ui.pixel) {
      console.error(`Card ID ${card.id} does not have an image configured`)
    }

    const handlePlayCard = () => {
      // TODO: Handle different card types appropriately (water, tool, etc.)
      if (isCropCard(card)) {
        actorRef.send({ type: GameEvent.PLAY_CROP, cardIdx, playerId })
      }
    }

    return (
      <AnimatePresence>
        <Box
          ref={containerRef}
          className={cardClassName}
          sx={[
            {
              perspective: '1000px',
              height: CARD_DIMENSIONS[size].height,
              width: CARD_DIMENSIONS[size].width,
            },
            ...(isSxArray(sx) ? sx : [sx]),
          ]}
          {...props}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ originX: 0.5, originY: 0.5 }}
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
                  transition: theme.transitions.create([
                    'transform',
                    'box-shadow',
                  ]),
                },
              ]}
            >
              <Paper
                ref={cardRef}
                {...paperProps}
                data-chromatic="ignore"
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
                {cardFocusMode === CardFocusMode.CROP_PLACEMENT &&
                  isCropCard(card) && (
                    <Box position="absolute" right="-100%" width={1} px={1}>
                      <Typography>
                        <Button variant="contained" onClick={handlePlayCard}>
                          Play card
                        </Button>
                      </Typography>
                    </Box>
                  )}
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
          </motion.div>
        </Box>
      </AnimatePresence>
    )
  }
)
