import { AlertColor } from '@mui/material'
import { funAnimalName } from 'fun-animal-names'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import reactNodeToString from 'react-node-to-string'

import { MatchEvent, IMatch, ShellNotificationType } from '../../../game/types'
import { isDebugEnabled } from '../../config/constants'

import { ActorContext } from './ActorContext'
import { emptyNotificationMessage, SnackbarProps } from './Snackbar'

export const useSnackbar = ({
  actorRef,
  match,
}: {
  actorRef: ReturnType<typeof ActorContext.useActorRef>
  match: IMatch
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
        console.debug(`Notification: ${reactNodeToString(message)}`)
      }

      setSnackbarProps(prev => ({ ...prev, message, severity }))
    },
    [setSnackbarProps]
  )

  const isSessionOwner = match.currentPlayerId === match.sessionOwnerPlayerId

  useEffect(() => {
    const currentPlayerName = funAnimalName(match.currentPlayerId ?? '')

    actorRef.send({
      type: MatchEvent.SET_SHELL,
      shell: {
        triggerNotification: ({ type, payload }) => {
          switch (type) {
            case ShellNotificationType.CARDS_DRAWN: {
              const { howMany, playerId } = payload

              if (isSessionOwner) {
                showNotification(
                  howMany === 1
                    ? 'You drew 1 card'
                    : `You drew ${howMany} cards`,
                  'success'
                )
              } else {
                const playerName = funAnimalName(playerId)

                showNotification(
                  howMany === 1
                    ? `${playerName} drew 1 card`
                    : `${playerName} drew ${howMany} cards`,
                  'warning'
                )
              }

              break
            }

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

            case ShellNotificationType.TOOL_CARD_PLAYED: {
              const { toolCard } = payload

              if (isSessionOwner) {
                showNotification(`You played ${toolCard.name}`, 'info')
              } else {
                showNotification(
                  `${currentPlayerName} played ${toolCard.name}`,
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
  }, [actorRef, match.currentPlayerId, isSessionOwner, showNotification])

  return { showNotification, snackbarProps }
}
