import { AlertColor } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { GameEvent, GameState, IPlayerSeed } from '../../../game/types'
import { useGameRules } from '../../hooks/useGameRules'

import { ActorContext } from './ActorContext'
import { ShellContextProps } from './ShellContext'
import { SnackbarProps } from './Snackbar'

export const useGame = ({
  playerSeeds,
  userPlayerId,
}: {
  playerSeeds: IPlayerSeed[]
  userPlayerId: string
}) => {
  const actorRef = ActorContext.useActorRef()
  const { game, gameState } = useGameRules()
  const [isHandInViewport, setIsHandInViewport] = useState(true)

  useEffect(() => {
    if (import.meta.env.DEV) {
      actorRef.subscribe(snapshot => {
        if (typeof snapshot.value === 'string') {
          console.debug(`State: ${snapshot.value}`)
        }
      })
    }
  }, [actorRef])

  const [isBlockingOperationExecuting, setIsBlockingOperationExecuting] =
    useState(false)

  useEffect(() => {
    if (gameState === GameState.UNINITIALIZED) {
      actorRef.send({ type: GameEvent.INIT, playerSeeds, userPlayerId })
    }
  }, [gameState, playerSeeds, userPlayerId, actorRef])

  const blockingOperation: ShellContextProps['blockingOperation'] = useCallback(
    async fn => {
      try {
        setIsBlockingOperationExecuting(true)
        await fn()
      } catch (_e) {
        // Empty
      } finally {
        setIsBlockingOperationExecuting(false)
      }
    },
    [setIsBlockingOperationExecuting]
  )

  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
    message: '',
    severity: 'info',
  })

  const showAlert = useCallback((message: string, severity: AlertColor) => {
    setSnackbarProps({ message, severity })
  }, [])

  const shellContextValue: ShellContextProps = useMemo(
    () => ({
      blockingOperation,
      isHandInViewport,
      setIsHandInViewport,
      showAlert,
    }),
    [blockingOperation, isHandInViewport, setIsHandInViewport, showAlert]
  )

  const isSessionOwnersTurn = game.sessionOwnerPlayerId === game.currentPlayerId
  const isInputBlocked = isBlockingOperationExecuting || !isSessionOwnersTurn

  const handleHandVisibilityToggle = () => {
    setIsHandInViewport(prev => !prev)
  }

  const isHandDisabled = [GameState.PLAYER_WATERING_CROP].includes(gameState)

  const showHand = isHandInViewport || isHandDisabled

  return {
    game,
    handleHandVisibilityToggle,
    isHandDisabled,
    isInputBlocked,
    shellContextValue,
    showHand,
    snackbarProps,
  }
}
