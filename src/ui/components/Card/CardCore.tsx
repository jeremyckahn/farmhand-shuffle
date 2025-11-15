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
import React, { useContext, useRef } from 'react'

import {
  CardType,
  GameEvent,
  GameState,
  isCropCardInstance,
  isEventCardInstance,
  isToolCardInstance,
  isWaterCardInstance,
} from '../../../game/types'
import { getRainbowBorderStyle } from '../../../lib/styling/rainbow-border'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { useGameRules } from '../../hooks/useGameRules'
import { ui } from '../../img'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { ActorContext } from '../Game/ActorContext'
import { ShellContext } from '../Game/ShellContext'
import { getCardImageSrc, Image } from '../Image'

import { CardProps } from './types'

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

export const CardCore = React.forwardRef<HTMLDivElement, CardProps>(
  function CardCore(
    {
      cardInstance: card,
      cardIdx,
      playerId,
      children,
      onBeforePlay,
      canBeWatered = false,
      canBeHarvested = false,
      disableEnterAnimation = false,
      imageScale = 0.75,
      isFlipped = false,
      isFocused = false,
      isInField = false,
      paperProps,
      size = CardSize.MEDIUM,
      sx = [],
      ...props
    },
    containerRef
  ) {
    const { useActorRef } = ActorContext
    const actorRef = useActorRef()
    const {
      game,
      gameState,
      selectedWaterCardInHandIdx,
      eventCardsThatCanBePlayed,
    } = useGameRules()
    const theme = useTheme()
    const cardRef = useRef<HTMLDivElement>(null)
    const { setIsHandInViewport } = useContext(ShellContext)
    const prefersReducedMotion = useMediaQuery(
      '(prefers-reduced-motion: reduce)'
    )

    const canEventCardsBePlayed = eventCardsThatCanBePlayed > 0

    const handlePlayCard = async () => {
      if (onBeforePlay) {
        await onBeforePlay()
      }

      switch (card.type) {
        case CardType.CROP: {
          actorRef.send({ type: GameEvent.PLAY_CROP, cardIdx, playerId })

          break
        }

        case CardType.WATER: {
          actorRef.send({ type: GameEvent.PLAY_WATER, cardIdx, playerId })
          setIsHandInViewport(false)

          break
        }

        case CardType.EVENT: {
          actorRef.send({ type: GameEvent.PLAY_EVENT, cardIdx, playerId })

          break
        }

        case CardType.TOOL: {
          actorRef.send({ type: GameEvent.PLAY_TOOL, cardIdx, playerId })

          break
        }

        default:
      }
    }

    const handleWaterCrop = () => {
      actorRef.send({
        type: GameEvent.SELECT_CROP_TO_WATER,
        playerId,
        cropIdxInFieldToWater: cardIdx,
        waterCardInHandIdx: selectedWaterCardInHandIdx,
      })
    }

    const handleHarvestCrop = () => {
      actorRef.send({
        type: GameEvent.HARVEST_CROP,
        playerId,
        cropIdxInFieldToHarvest: cardIdx,
      })
    }

    const isSessionOwnersCard = playerId === game.sessionOwnerPlayerId

    let showPlayCardButton = false
    let showWaterCropButton = false
    let showHarvestCropButton = false
    let isBuffedCrop = false

    switch (card.type) {
      case CardType.CROP: {
        isBuffedCrop = card.id === game.buffedCrop?.crop.id

        if (
          isSessionOwnersCard &&
          isFocused &&
          !isInField &&
          [
            GameState.WAITING_FOR_PLAYER_TURN_ACTION,
            GameState.WAITING_FOR_PLAYER_SETUP_ACTION,
          ].includes(gameState)
        ) {
          showPlayCardButton = true
        }

        if (
          isSessionOwnersCard &&
          isFocused &&
          isInField &&
          canBeWatered &&
          [GameState.PLAYER_WATERING_CROP].includes(gameState)
        ) {
          showWaterCropButton = true
        }

        if (
          isSessionOwnersCard &&
          isFocused &&
          isInField &&
          canBeHarvested &&
          [GameState.WAITING_FOR_PLAYER_TURN_ACTION].includes(gameState)
        ) {
          showHarvestCropButton = true
        }

        break
      }

      case CardType.EVENT: {
        if (
          isSessionOwnersCard &&
          isFocused &&
          canEventCardsBePlayed &&
          gameState === GameState.WAITING_FOR_PLAYER_TURN_ACTION
        ) {
          showPlayCardButton = true
        }

        break
      }

      case CardType.TOOL: {
        if (
          isSessionOwnersCard &&
          isFocused &&
          gameState === GameState.WAITING_FOR_PLAYER_TURN_ACTION
        ) {
          showPlayCardButton = true
        }

        break
      }

      case CardType.WATER: {
        if (
          isSessionOwnersCard &&
          isFocused &&
          gameState === GameState.WAITING_FOR_PLAYER_TURN_ACTION
        ) {
          showPlayCardButton = true
        }

        break
      }

      default:
    }

    const showWaterableState =
      isInField &&
      canBeWatered &&
      gameState === GameState.PLAYER_WATERING_CROP &&
      game.currentPlayerId === playerId &&
      isCropCardInstance(card)

    const showHarvestableState =
      isInField &&
      canBeHarvested &&
      isCropCardInstance(card) &&
      // NOTE: This is necessary to prevent interfering with waterable crop
      // state presentation
      gameState !== GameState.PLAYER_WATERING_CROP

    let tooltipTitle = ''

    if (isSessionOwnersCard) {
      if (showWaterableState) {
        tooltipTitle = 'Needs water'
      } else if (showHarvestableState) {
        tooltipTitle = 'Ready to be harvested'
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
                          onClick={() => void handlePlayCard()}
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
                        <Button variant="contained" onClick={handleWaterCrop}>
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
                          onClick={handleHarvestCrop}
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
