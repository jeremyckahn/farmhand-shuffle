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
  isEventCardInstance,
  isToolCardInstance,
  isWaterCardInstance,
} from '../../../game/types'
import { isCropCardInstance } from '../../../game/types/guards'
import { getRainbowBorderStyle } from '../../../lib/styling/rainbow-border'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { ui } from '../../img'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { getCardImageSrc, Image } from '../Image'

import { CardViewProps } from './types'

export const cardClassName = 'Card'
export const cardFlipWrapperClassName = 'CardFlipWrapper'

export const cropWaterIndicatorOutlineColor = '#0072ff'
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
      cardIdxInHand,
      cardIdxInField,
      cropIdxInFieldToHarvest,
      cropIdxInFieldToWater,
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
      playButtonDisabled = false,
      showWaterCropButton = false,
      showHarvestCropButton = false,
      showWaterableState = false,
      showHarvestableState = false,
      showDiscardButton = false,
      stackActionButtonsBelowCard = false,
      tooltipTitle = '',
      onPlayCard,
      onWaterCrop,
      onHarvestCrop,
      onDiscardCard,

      ...props
    },
    containerRef
  ) {
    // TODO: Prevent cards from being focusable when it is not the current
    // player's turn

    const theme = useTheme()
    const cardRef = useRef<HTMLDivElement>(null)
    const prefersReducedMotion = useMediaQuery(
      '(prefers-reduced-motion: reduce)'
    )
    const actionButtons: Array<{
      key: string
      label: React.ReactNode
      color?: 'success' | 'error'
      disabled?: boolean
      onClick?: () => void
    }> = [
      ...(showPlayCardButton
        ? [
            {
              key: 'play',
              label: (
                <>
                  {isCropCardInstance(card) && 'Play crop'}
                  {isWaterCardInstance(card) && 'Water a crop'}
                  {isEventCardInstance(card) && 'Play event'}
                  {isToolCardInstance(card) && 'Play tool'}
                </>
              ),
              disabled: playButtonDisabled,
              onClick: () => void onPlayCard?.(),
            },
          ]
        : []),
      ...(showWaterCropButton
        ? [{ key: 'water', label: 'Water crop', onClick: onWaterCrop }]
        : []),
      ...(showHarvestCropButton
        ? [
            {
              key: 'harvest',
              label: 'Harvest crop',
              color: 'success' as const,
              onClick: onHarvestCrop,
            },
          ]
        : []),
      ...(showDiscardButton
        ? [
            {
              key: 'discard',
              label: 'Discard',
              color: 'error' as const,
              onClick: onDiscardCard,
            },
          ]
        : []),
    ]

    // NOTE: On narrow viewports, action buttons stack below the card
    // instead of beside it -- there's no horizontal room to spare. The
    // card+button-stack group is shifted up by half of the stack's height
    // (a margin, not a second `transform` -- this card already carries its
    // own `transform` for positioning/zooming and a `transformStyle:
    // preserve-3d` flip, and a second transform layer visually broke the
    // card-back flip rendering; margin composes independently since it
    // resolves before the existing transform is applied) so that whatever
    // already centers the card (e.g. Field's tap-to-zoom, Hand's selected
    // card centering) ends up centering the whole group instead of just the
    // card. Larger viewports are unaffected (buttons stay beside the card).
    const mobileActionButtonHeight = '2.5rem'
    const mobileActionButtonGap = theme.spacing(1)
    const mobileActionButtonStackTopGap = '1rem'
    const stackActionButtons =
      stackActionButtonsBelowCard && actionButtons.length > 0
    const mobileActionButtonStackHeight = stackActionButtons
      ? `calc(${mobileActionButtonStackTopGap} + ${
          actionButtons.length
        } * ${mobileActionButtonHeight} + ${
          actionButtons.length - 1
        } * ${mobileActionButtonGap})`
      : undefined

    // NOTE: At compact size the card's name and description aren't shown on
    // the card face (there isn't room), so they're surfaced in the tooltip
    // instead. Any existing state-hint tooltip (e.g. "Needs water") is kept
    // and shown above them.
    const displayedTooltipTitle =
      size === CardSize.COMPACT ? (
        <>
          {tooltipTitle && (
            <>
              {tooltipTitle}
              <br />
            </>
          )}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            {card.name}
          </Typography>
          <br />
          {children}
        </>
      ) : (
        tooltipTitle
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
              marginTop: stackActionButtons
                ? `calc(${mobileActionButtonStackHeight} / -2)`
                : undefined,
              transition: theme.transitions.create(['margin-top']),
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
            <Tooltip title={displayedTooltipTitle} placement="top" arrow>
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
                  {size === CardSize.COMPACT ? (
                    // NOTE: The name and description are surfaced in the
                    // tooltip instead (see displayedTooltipTitle above) so
                    // the card's art can use nearly all of the available
                    // space.
                    <Image
                      src={getCardImageSrc(card)}
                      alt={card.name}
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        imageRendering: 'pixelated',
                        filter: `drop-shadow(0 0 5px ${theme.palette.common.white})`,
                      }}
                    />
                  ) : (
                    <>
                      <Typography
                        variant={
                          size === CardSize.SMALL ? 'caption' : 'overline'
                        }
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
                    </>
                  )}
                  {actionButtons.map((button, idx) => (
                    <Box
                      key={button.key}
                      position="absolute"
                      width={1}
                      px={1}
                      {...(stackActionButtonsBelowCard
                        ? {
                            left: 0,
                            top: `calc(100% + ${mobileActionButtonStackTopGap} + ${idx} * (${mobileActionButtonHeight} + ${mobileActionButtonGap}))`,
                          }
                        : { left: '100%' })}
                    >
                      <Typography>
                        <Button
                          variant="contained"
                          fullWidth={stackActionButtonsBelowCard}
                          color={button.color}
                          disabled={button.disabled}
                          onClick={button.onClick}
                        >
                          {button.label}
                        </Button>
                      </Typography>
                    </Box>
                  ))}
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
                  {size !== CardSize.COMPACT && (
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
                  )}
                </Paper>
              </Box>
            </Tooltip>
          </motion.div>
        </Box>
      </AnimatePresence>
    )
  }
)
