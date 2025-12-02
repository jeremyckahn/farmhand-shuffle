import { useCallback, useEffect, useMemo, useState } from 'react'

import { MatchEvent, MatchState } from '../../../game/types'
import { isDebugEnabled } from '../../config/constants'
import { useMatchRules } from '../../hooks/useMatchRules'

import { ActorContext } from './ActorContext'
import { ShellContextProps } from './ShellContext'
import { MatchProps } from './types'
import { useSnackbar } from './useSnackbar'

export const useMatch = ({
  playerSeeds,
  userPlayerId,
}: Pick<MatchProps, 'playerSeeds' | 'userPlayerId'>) => {
  const actorRef = ActorContext.useActorRef()
  const { match, matchState } = useMatchRules()
  const [isHandInViewport, setIsHandInViewport] = useState(true)

  useEffect(() => {
    if (isDebugEnabled) {
      actorRef.subscribe(snapshot => {
        if (typeof snapshot.value === 'string') {
          console.debug(`State: ${snapshot.value}`, snapshot.context)
        }
      })
    }
  }, [actorRef])

  const [isBlockingOperationExecuting, setIsBlockingOperationExecuting] =
    useState(false)

  useEffect(() => {
    if (matchState === MatchState.UNINITIALIZED) {
      actorRef.send({ type: MatchEvent.INIT, playerSeeds, userPlayerId })
    }
  }, [matchState, playerSeeds, userPlayerId, actorRef])

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

  const { showNotification, snackbarProps } = useSnackbar({ actorRef, match })

  const shellContextValue: ShellContextProps = useMemo(
    () => ({
      blockingOperation,
      isHandInViewport,
      setIsHandInViewport,
      showNotification,
    }),
    [blockingOperation, isHandInViewport, setIsHandInViewport, showNotification]
  )

  const isSessionOwnersTurn =
    match.sessionOwnerPlayerId === match.currentPlayerId
  const isInputBlocked = isBlockingOperationExecuting || !isSessionOwnersTurn

  const handleHandVisibilityToggle = () => {
    setIsHandInViewport(prev => !prev)
  }

  const handleClickPlayAgain = () => {
    actorRef.send({ type: MatchEvent.INIT, playerSeeds, userPlayerId })
  }

  const isHandDisabled = [MatchState.PLAYER_WATERING_CROP].includes(matchState)
  const showHand = isHandInViewport || isHandDisabled
  const showGameOver = matchState === MatchState.GAME_OVER

  return {
    match,
    handleHandVisibilityToggle,
    handleClickPlayAgain,
    isHandDisabled,
    isInputBlocked,
    shellContextValue,
    showGameOver,
    showHand,
    snackbarProps,
  }
}
