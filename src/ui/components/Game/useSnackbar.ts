import { AlertColor } from '@mui/material'
import { funAnimalName } from 'fun-animal-names'
import { ReactNode, useCallback, useEffect, useState } from 'react'

import { GameEvent, IGame, ShellNotificationType } from '../../../game/types'
import { isDebugEnabled } from '../../config/constants'

import { ActorContext } from './ActorContext'
import { emptyNotificationMessage, SnackbarProps } from './Snackbar'

export const useSnackbar = ({
  actorRef,
  game,
}: {
  actorRef: ReturnType<typeof ActorContext.useActorRef>
  game: IGame
}) => {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
    message: '',
    severity: 'info',
    onClose: () => {
      setSnackbarProps(prev => ({
        ...prev,
        message: emptyNotificationMessage,
      }))
    },
  })

  const showNotification = useCallback(
    (message: ReactNode, severity: AlertColor) => {
      if (isDebugEnabled) {
        console.debug(`Notification: ${String(message)}`)
      }

      setSnackbarProps(prev => ({ ...prev, message, severity }))
    },
    [setSnackbarProps]
  )

  const isSessionOwner = game.currentPlayerId === game.sessionOwnerPlayerId

  useEffect(() => {
    const currentPlayerName = funAnimalName(game.currentPlayerId ?? '')

    actorRef.send({
      type: GameEvent.SET_SHELL,
      shell: {
        triggerNotification: ({ type, payload }) => {
          switch (type) {
            case ShellNotificationType.CROP_HARVESTED: {
              const {
                cropHarvested: { name: cropName },
              } = payload

              if (isSessionOwner) {
                showNotification(
                  `You harvested and sold a ${cropName}`,
                  'success'
                )
              } else {
                showNotification(
                  `${currentPlayerName} harvested and sold a ${cropName}`,
                  'warning'
                )
              }

              break
            }

            case ShellNotificationType.CROP_WATERED: {
              const {
                cropWatered: { name: cropName },
              } = payload

              if (isSessionOwner) {
                showNotification(`You watered your ${cropName}`, 'info')
              } else {
                showNotification(
                  `${currentPlayerName} watered their ${cropName}`,
                  'info'
                )
              }

              break
            }

            case ShellNotificationType.EVENT_CARD_PLAYED: {
              const { eventCard } = payload

              if (isSessionOwner) {
                showNotification(`You played ${eventCard.name}`, 'info')
              } else {
                showNotification(
                  `${currentPlayerName} played ${eventCard.name}`,
                  'info'
                )
              }

              break
            }

            default:
          }
        },
      },
    })
  }, [actorRef, game.currentPlayerId, isSessionOwner, showNotification])

  return { showNotification, snackbarProps }
}
