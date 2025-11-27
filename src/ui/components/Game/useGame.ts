import { useCallback, useEffect, useMemo, useState } from 'react'

import { GameEvent, GameState } from '../../../game/types'
import { isDebugEnabled } from '../../config/constants'
import { useGameRules } from '../../hooks/useGameRules'

import { ActorContext } from './ActorContext'
import { ShellContextProps } from './ShellContext'
import { GameProps } from './types'
import { useSnackbar } from './useSnackbar'

export const useGame = ({
  playerSeeds,
  userPlayerId,
}: Pick<GameProps, 'playerSeeds' | 'userPlayerId'>) => {
  const actorRef = ActorContext.useActorRef()
  const { game, gameState, winner } = useGameRules() as ReturnType<
    typeof useGameRules
  >
  const [isHandInViewport, setIsHandInViewport] = useState(true)

  useEffect(() => {
    if (isDebugEnabled) {
      actorRef.subscribe(snapshot => {
        if (typeof snapshot.value === 'string') {
          console.debug(`State: ${snapshot.value}`, snapshot.context.game)
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

  const { showNotification, snackbarProps } = useSnackbar({ actorRef, game })

  const shellContextValue: ShellContextProps = useMemo(
    () => ({
      blockingOperation,
      isHandInViewport,
      setIsHandInViewport,
      showNotification,
    }),
    [blockingOperation, isHandInViewport, setIsHandInViewport, showNotification]
  )

  const isSessionOwnersTurn = game.sessionOwnerPlayerId === game.currentPlayerId
  const isInputBlocked = isBlockingOperationExecuting || !isSessionOwnersTurn

  const handleHandVisibilityToggle = () => {
    setIsHandInViewport(prev => !prev)
  }

  const handleClickPlayAgain = () => {
    actorRef.send({ type: GameEvent.INIT, playerSeeds, userPlayerId })
  }

  const isHandDisabled = [GameState.PLAYER_WATERING_CROP].includes(gameState)
  const showHand = isHandInViewport || isHandDisabled
  const showGameOver = gameState === GameState.GAME_OVER

  return {
    game,
    handleHandVisibilityToggle,
    handleClickPlayAgain,
    isHandDisabled,
    isInputBlocked,
    shellContextValue,
    showGameOver,
    showHand,
    snackbarProps,
    winner,
  }
}
