import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'

import { IPlayedCard } from '../../../game/types'
import { isPlayedCrop } from '../../../game/types/guards'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { cards as cardImages } from '../../img'
import { CardSize } from '../../types'
import { Card } from '../Card'
import { cropWaterIndicatorOutlineColor } from '../Card/CardCore'
import { BaseCardProps } from '../Card/types'
import { Image } from '../Image'

import { usePlayedCardLogic } from './usePlayedCardLogic'

export interface PlayedCropProps extends BoxProps {
  cardProps: BaseCardProps
  playedCard: IPlayedCard
  isInBackground: boolean
}

export const unfilledWaterIndicatorOpacity = 0.25

export const playedCardClassName = 'PlayedCard'

export const PlayedCard = ({
  isInBackground,
  playedCard,
  cardProps: { ref, ...cardProps },
  ...props
}: PlayedCropProps) => {
  const theme = useTheme()

  const { size = CardSize.MEDIUM } = cardProps

  const { canBeWatered, canBeHarvested, waterIconsToRender } =
    usePlayedCardLogic({ playedCard })

  return (
    <Box
      className={playedCardClassName}
      maxWidth={CARD_DIMENSIONS[size].width}
      {...props}
    >
      <Card
        size={size}
        canBeWatered={canBeWatered}
        canBeHarvested={canBeHarvested}
        {...cardProps}
      />
      {isPlayedCrop(playedCard) &&
        (size === CardSize.COMPACT ? (
          <Box
            display="flex"
            gap={theme.spacing(0.25)}
            pt={0.5}
            aria-label="Water card indicator"
          >
            {new Array(waterIconsToRender).fill(null).map((_, idx) => {
              const isFilled = idx < playedCard.waterCards

              return (
                <Box
                  key={idx}
                  sx={{
                    flex: 1,
                    height: '4px',
                    borderRadius: '2px',
                    background: cropWaterIndicatorOutlineColor,
                    opacity: isInBackground
                      ? 0
                      : isFilled
                      ? 1
                      : unfilledWaterIndicatorOpacity,
                    transition: theme.transitions.create(['opacity']),
                  }}
                />
              )
            })}
          </Box>
        ) : (
          <Grid
            container
            spacing={1}
            pt={2.5}
            ml={theme.spacing(-0.5)}
            justifyContent="flex-start"
          >
            {new Array(waterIconsToRender).fill(null).map((_, idx) => {
              let opacity = 1

              const isFilled = idx < playedCard.waterCards

              if (isInBackground) {
                opacity = 0
              } else if (!isFilled) {
                opacity = unfilledWaterIndicatorOpacity
              }

              return (
                <Grid
                  key={idx}
                  item
                  sx={{ pt: `${theme.spacing(0)} !important` }}
                >
                  <Image
                    src={cardImages.water}
                    alt="Water card indicator"
                    sx={{
                      imageRendering: 'pixelated',
                      opacity,
                      transition: theme.transitions.create(['opacity']),
                    }}
                  />
                </Grid>
              )
            })}
          </Grid>
        ))}
    </Box>
  )
}
