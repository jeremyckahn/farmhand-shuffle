import { AlertColor } from '@mui/material'
import { funAnimalName } from 'fun-animal-names'
import { ReactNode, useCallback, useEffect, useState } from 'react'

import { GameEvent, IGame, ShellNotification } from '../../../game/types'
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
        triggerNotification: (type, payload) => {
          switch (type) {
            case ShellNotification.CROP_HARVESTED: {
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
            default:
          }
        },
      },
    })
  }, [actorRef, game.currentPlayerId, isSessionOwner, showNotification])

  return { showNotification, snackbarProps }
}
