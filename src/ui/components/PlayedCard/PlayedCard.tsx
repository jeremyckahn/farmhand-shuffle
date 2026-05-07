import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'

import { IPlayedCard } from '../../../game/types'
import { isPlayedCrop } from '../../../game/types/guards'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { cards as cardImages } from '../../img'
import { CardSize } from '../../types'
import { Card } from '../Card'
import { BaseCardProps } from '../Card/types'
import { Image } from '../Image'

import { usePlayedCropLogic } from './usePlayedCropLogic'

export interface PlayedCropProps extends BoxProps {
  cardProps: BaseCardProps & { playedCard: IPlayedCard }
  isInBackground: boolean
}

export const unfilledWaterIndicatorOpacity = 0.25

export const playedCardClassName = 'PlayedCard'

export const PlayedCard = ({
  isInBackground,
  cardProps: { ref, ...cardProps },
  ...props
}: PlayedCropProps) => {
  const theme = useTheme()

  const { cardInstance, playedCard, size = CardSize.MEDIUM } = cardProps

  const { canBeWatered, canBeHarvested, waterIconsToRender } =
    usePlayedCropLogic({ card: cardInstance, playedCard })

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
      {isPlayedCrop(playedCard) && (
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
      )}
    </Box>
  )
}
