import useTheme from '@mui/material/styles/useTheme'
import { funAnimalName } from 'fun-animal-names'
import { useContext, useEffect } from 'react'

import * as cards from '../../../game/cards'
import { CardInstance, IPlayer } from '../../../game/types'
import { assertIsCardId } from '../../../game/types/guards'
import { useGameRules } from '../../hooks/useGameRules'
import { cards as cardImages } from '../../img'
import { ShellContext } from '../Game/ShellContext'
import { Image } from '../Image'

export const unfilledWaterIndicatorOpacity = 0.25

export interface WaterIndicatorProps {
  cardInstance: CardInstance
  isFilled: boolean
  opacity: number
  playerId: IPlayer['id']
}

export const WaterIndicator = ({
  cardInstance,
  isFilled,
  opacity,
  playerId,
}: WaterIndicatorProps) => {
  const theme = useTheme()
  const { showNotification } = useContext(ShellContext)
  const { game } = useGameRules()
  const { sessionOwnerPlayerId } = game

  assertIsCardId(cardInstance.id)

  const card = cards[cardInstance.id]

  useEffect(() => {
    if (isFilled) {
      if (playerId === sessionOwnerPlayerId) {
        showNotification(`You watered your ${card.name}`, 'info')
      } else {
        showNotification(
          `${funAnimalName(playerId)} watered their ${card.name}`,
          'info'
        )
      }
    }
  }, [playerId, card, showNotification, isFilled, sessionOwnerPlayerId])

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
