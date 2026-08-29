import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { MatchEvent, MatchState } from '../../../game/types'
import { isDebugEnabled } from '../../config/constants'
import { useMatchRules } from '../../hooks/useMatchRules'
import { deselectedHandIdx } from '../constants'

import { ActorContext } from './ActorContext'
import { ShellContextProps } from './ShellContext'
import { MatchProps } from './types'
import { useSnackbar } from './useSnackbar'

export const useMatch = ({
  playerSeeds,
  userPlayerId,
  onMatchEnd,
  onCheckpoint,
  initialMatch,
}: Pick<
  MatchProps,
  | 'playerSeeds'
  | 'userPlayerId'
  | 'onMatchEnd'
  | 'onCheckpoint'
  | 'initialMatch'
>) => {
  const actorRef = ActorContext.useActorRef()
  const { match, matchState } = useMatchRules()
  const botState = ActorContext.useSelector(({ context }) => context.botState)
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
      if (initialMatch) {
        actorRef.send({
          type: MatchEvent.RESUME,
          matchState: initialMatch.matchState,
          match: initialMatch.match,
          botState: initialMatch.botState,
          userPlayerId,
        })
      } else {
        actorRef.send({ type: MatchEvent.INIT, playerSeeds, userPlayerId })
      }
    }
  }, [matchState, playerSeeds, userPlayerId, initialMatch, actorRef])

  useEffect(() => {
    if (
      matchState === MatchState.WAITING_FOR_PLAYER_SETUP_ACTION ||
      matchState === MatchState.WAITING_FOR_PLAYER_TURN_ACTION
    ) {
      onCheckpoint?.({ matchState, match, botState })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchState])

  const hasFiredMatchEndRef = useRef(false)

  useEffect(() => {
    if (matchState === MatchState.GAME_OVER) {
      if (!hasFiredMatchEndRef.current) {
        // eslint-disable-next-line functional/immutable-data
        hasFiredMatchEndRef.current = true
        onMatchEnd?.(match.winner)
      }
    } else {
      // eslint-disable-next-line functional/immutable-data
      hasFiredMatchEndRef.current = false
    }
  }, [matchState, match.winner, onMatchEnd])

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

  const { showNotification } = useSnackbar({ actorRef, match })

  const [selectedHandCardIdx, _setSelectedHandCardIdx] =
    useState(deselectedHandIdx)

  const setSelectedHandCardIdx: typeof _setSelectedHandCardIdx = useCallback(
    (...args) => {
      if (match.currentPlayerId !== match.sessionOwnerPlayerId) {
        return
      }

      return _setSelectedHandCardIdx(...args)
    },
    [match]
  )

  const shellContextValue: ShellContextProps = useMemo(
    () => ({
      blockingOperation,
      isHandInViewport,
      setIsHandInViewport,
      showNotification,
      selectedHandCardIdx,
      setSelectedHandCardIdx,
    }),
    [
      blockingOperation,
      isHandInViewport,
      setIsHandInViewport,
      showNotification,
      selectedHandCardIdx,
      setSelectedHandCardIdx,
    ]
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
    botState,
    handleHandVisibilityToggle,
    handleClickPlayAgain,
    isHandDisabled,
    isInputBlocked,
    shellContextValue,
    showGameOver,
    showHand,
  }
}
