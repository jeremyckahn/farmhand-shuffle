import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import { darken, lighten } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import { AnimatePresence, motion } from 'motion/react'
import React, { useRef } from 'react'

import {
  isCropCardInstance,
  isEventCardInstance,
  isToolCardInstance,
  isWaterCardInstance,
} from '../../../game/types'
import { getRainbowBorderStyle } from '../../../lib/styling/rainbow-border'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { ui } from '../../img'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { getCardImageSrc, Image } from '../Image'

import { CardViewProps } from './types'

export const cardClassName = 'Card'
export const cardFlipWrapperClassName = 'CardFlipWrapper'

const cropWaterIndicatorOutlineColor = '#0072ff'
const cropHarvestIndicatorSessionOwnerOutlineColor = '#0fc400'
const cropHarvestIndicatorOpponentOutlineColor = '#ff7510'

const getCropHarvestIndicatorSessionOwnerOutlineStyle = ({
  theme,
  isBuffedCrop,
  prefersReducedMotion,
}: {
  theme: Theme
  isBuffedCrop: boolean
  prefersReducedMotion: boolean
}): SystemStyleObject<Theme> => {
  if (isBuffedCrop) {
    return getRainbowBorderStyle({ theme, prefersReducedMotion, spread: 12 })
  }

  return {
    filter: `drop-shadow(0px 0px 24px ${cropHarvestIndicatorSessionOwnerOutlineColor})`,
  }
}

export const CardCore = React.forwardRef<HTMLDivElement, CardViewProps>(
  function CardCore(
    {
      cardInstance: card,
      cardIdx,
      playerId,
      children,
      disableEnterAnimation = false,
      imageScale = 0.75,
      isFlipped = false,
      paperProps,
      size = CardSize.MEDIUM,
      sx = [],
      // Visual/Interaction props
      isBuffedCrop = false,
      isSessionOwnersCard = false,
      showPlayCardButton = false,
      showWaterCropButton = false,
      showHarvestCropButton = false,
      showWaterableState = false,
      showHarvestableState = false,
      tooltipTitle = '',
      onPlayCard,
      onWaterCrop,
      onHarvestCrop,

      // NOTE: These props are renamed and excluded because they are handled
      // by the interaction hook or not used in the visual component directly.
      onBeforePlay: _onBeforePlay,
      canBeWatered: _canBeWatered = false,
      canBeHarvested: _canBeHarvested = false,
      isFocused: _isFocused = false,
      isInField: _isInField = false,

      ...props
    },
    containerRef
  ) {
    const theme = useTheme()
    const cardRef = useRef<HTMLDivElement>(null)
    const prefersReducedMotion = useMediaQuery(
      '(prefers-reduced-motion: reduce)'
    )

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
            initial={disableEnterAnimation ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <Tooltip title={tooltipTitle} placement="top" arrow>
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
                {/* Front of the card */}
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
                      outlineColor: theme.palette.background.default,
                      outlineStyle: 'solid',
                      outlineWidth: 2,
                      p: theme.spacing(1),
                      position: 'absolute',
                      width: 1,
                      ...(showWaterableState && {
                        filter: `drop-shadow(0px 0px 24px ${cropWaterIndicatorOutlineColor})`,
                      }),
                      ...(showHarvestableState && {
                        ...(isSessionOwnersCard &&
                          getCropHarvestIndicatorSessionOwnerOutlineStyle({
                            theme,
                            isBuffedCrop,
                            prefersReducedMotion,
                          })),
                        ...(!isSessionOwnersCard && {
                          filter: `drop-shadow(0px 0px 24px ${cropHarvestIndicatorOpponentOutlineColor})`,
                        }),
                      }),
                    },
                  ]}
                >
                  <Typography
                    variant={size === CardSize.SMALL ? 'caption' : 'overline'}
                    sx={{
                      fontWeight: theme.typography.fontWeightBold,
                      textTransform: 'uppercase',
                    }}
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
                      src={getCardImageSrc(card)}
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

                  {/* Card actions */}
                  <Box
                    sx={{
                      height: '50%',
                      overflow: 'auto',
                      ...(size === CardSize.SMALL && {
                        fontSize: theme.typography.caption.fontSize,
                        lineHeight: theme.typography.caption.lineHeight,
                        '> p': {
                          my: 0,
                        },
                      }),
                    }}
                  >
                    {children}
                  </Box>
                  {showPlayCardButton && (
                    <Box position="absolute" right="-100%" width={1} px={1}>
                      <Typography>
                        <Button
                          variant="contained"
                          onClick={() => void onPlayCard?.()}
                        >
                          {isCropCardInstance(card) && 'Play crop'}
                          {isWaterCardInstance(card) && 'Water a crop'}
                          {isEventCardInstance(card) && 'Play event'}
                          {isToolCardInstance(card) && 'Play tool'}
                        </Button>
                      </Typography>
                    </Box>
                  )}
                  {showWaterCropButton && (
                    <Box position="absolute" right="-100%" width={1} px={1}>
                      <Typography>
                        <Button variant="contained" onClick={onWaterCrop}>
                          Water crop
                        </Button>
                      </Typography>
                    </Box>
                  )}
                  {showHarvestCropButton && (
                    <Box position="absolute" right="-100%" width={1} px={1}>
                      <Typography>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={onHarvestCrop}
                        >
                          Harvest crop
                        </Button>
                      </Typography>
                    </Box>
                  )}
                </Paper>

                {/* Back of the card */}
                <Paper
                  {...paperProps}
                  sx={{
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.default,
                    backfaceVisibility: 'hidden',
                    color: theme.palette.common.white,
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
            </Tooltip>
          </motion.div>
        </Box>
      </AnimatePresence>
    )
  }
)
