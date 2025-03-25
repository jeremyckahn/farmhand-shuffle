import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import { darken, lighten } from '@mui/material/styles'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import { AnimatePresence, motion } from 'motion/react'
import React, { useContext, useRef } from 'react'

import {
  CardType,
  GameEvent,
  GameState,
  isCropCardInstance,
  isWaterCardInstance,
} from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { useGameRules } from '../../hooks/useGameRules'
import { cards, isCardImageKey, ui } from '../../img'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { ActorContext } from '../Game/ActorContext'
import { ShellContext } from '../Game/ShellContext'
import { Image } from '../Image'

import { CardProps } from './Card'

export const cardClassName = 'Card'
export const cardFlipWrapperClassName = 'CardFlipWrapper'

const cropWaterIndicatorOutlineColor = '#0072ff'

export const CardCore = React.forwardRef<HTMLDivElement, CardProps>(
  function CardCore(
    {
      cardInstance: card,
      cardIdx,
      playerId,
      children,
      onBeforePlay,
      canBeWatered = false,
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
    const { game, gameState, selectedWaterCardInHandIdx } = useGameRules()
    const theme = useTheme()
    const cardRef = useRef<HTMLDivElement>(null)
    const { setIsHandInViewport } = useContext(ShellContext)

    const imageSrc = isCardImageKey(card.id) ? cards[card.id] : ui.pixel

    if (imageSrc === ui.pixel) {
      console.error(`Card ID ${card.id} does not have an image configured`)
    }

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

    const isSessionOwnersCard = playerId === game.sessionOwnerPlayerId

    let showPlayCardButton = false
    let showWaterCropButton = false

    switch (card.type) {
      case CardType.CROP: {
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

        break
      }

      case CardType.WATER: {
        if (
          isSessionOwnersCard &&
          isFocused &&
          [GameState.WAITING_FOR_PLAYER_TURN_ACTION].includes(gameState)
        ) {
          showPlayCardButton = true
        }

        break
      }

      default:
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
                    ...(isInField &&
                      canBeWatered &&
                      gameState === GameState.PLAYER_WATERING_CROP &&
                      game.currentPlayerId === playerId &&
                      isCropCardInstance(card) && {
                        filter: `drop-shadow(0px 0px 24px ${cropWaterIndicatorOutlineColor})`,
                      }),
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
                {showPlayCardButton && (
                  <Box position="absolute" right="-100%" width={1} px={1}>
                    <Typography>
                      <Button
                        variant="contained"
                        onClick={() => void handlePlayCard()}
                      >
                        {isCropCardInstance(card) && 'Play crop'}
                        {isWaterCardInstance(card) && 'Water a crop'}
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
