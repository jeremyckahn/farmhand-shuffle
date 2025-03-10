import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'
import { funAnimalName } from 'fun-animal-names'
import { useContext, useEffect } from 'react'

import * as cards from '../../../game/cards'
import { InvalidCardError } from '../../../game/services/Rules/errors'
import {
  CardInstance,
  IPlayedCrop,
  IPlayer,
  isCropCardInstance,
} from '../../../game/types'
import { assertIsCardId } from '../../../game/types/guards'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { cards as cardImages } from '../../img'
import { CardSize } from '../../types'
import { Card, CropCardProps } from '../Card'
import { ShellContext } from '../Game/ShellContext'
import { Image } from '../Image'

export interface PlayedCropProps extends BoxProps {
  cropCardProps: CropCardProps & { playedCrop: IPlayedCrop }
  isInBackground: boolean
}

export const unfilledWaterIndicatorOpacity = 0.25

const WaterIndicator = ({
  cardInstance,
  isFilled,
  opacity,
  playerId,
}: {
  cardInstance: CardInstance
  isFilled: boolean
  opacity: number
  playerId: IPlayer['id']
}) => {
  const theme = useTheme()
  const { showAlert } = useContext(ShellContext)

  assertIsCardId(cardInstance.id)

  const card = cards[cardInstance.id]

  useEffect(() => {
    if (isFilled) {
      // FIXME: Update tests
      // FIXME: Only show this for the opponent players
      // FIXME: This doesn't always show
      showAlert(`${funAnimalName(playerId)} watered their ${card.name}`, 'info')
    }
  }, [playerId, card, showAlert, isFilled])

  return (
    <Image
      src={cardImages.water}
      alt="Water card indicator"
      sx={{
        imageRendering: 'pixelated',
        opacity,
        transition: theme.transitions.create(['opacity']),
      }}
    />
  )
}

export const PlayedCrop = ({
  isInBackground,
  cropCardProps: { ref, ...cropCardProps },
  ...props
}: PlayedCropProps) => {
  const {
    cardInstance: card,
    playedCrop,
    size = CardSize.MEDIUM,
  } = cropCardProps
  const theme = useTheme()

  if (!isCropCardInstance(card)) {
    throw new InvalidCardError(`${card.id} is not a crop card.`)
  }

  const waterIconsToRender = Math.max(playedCrop.waterCards, card.waterToMature)

  return (
    <Box maxWidth={CARD_DIMENSIONS[size].width} {...props}>
      <Card
        size={size}
        canBeWatered={playedCrop.wasWateredTuringTurn === false}
        {...cropCardProps}
      />
      <Grid
        container
        spacing={1}
        pt={2.5}
        ml={theme.spacing(-0.5)}
        justifyContent="flex-start"
      >
        {new Array(waterIconsToRender).fill(null).map((_, idx) => {
          let opacity = 1

          const isFilled = idx < playedCrop.waterCards

          if (isInBackground) {
            opacity = 0
          } else if (!isFilled) {
            opacity = unfilledWaterIndicatorOpacity
          }

          return (
            <Grid key={idx} item sx={{ pt: `${theme.spacing(0)} !important` }}>
              <WaterIndicator
                cardInstance={playedCrop.instance}
                isFilled={isFilled}
                opacity={opacity}
                playerId={cropCardProps.playerId}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
