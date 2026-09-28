import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { MatchEvent, MatchState } from '../../../game/types'
import { isDebugEnabled } from '../../config/constants'
import { useIsNarrowViewport } from '../../hooks/useIsNarrowViewport'
import { useMatchRules } from '../../hooks/useMatchRules'
import { deselectedCardIdx } from '../constants'

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
  const isNarrowViewport = useIsNarrowViewport()

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

  const { showNotification } = useSnackbar({ actorRef, match })

  const [selectedHandCardIdx, _setSelectedHandCardIdx] =
    useState(deselectedCardIdx)

  const setSelectedHandCardIdx: typeof _setSelectedHandCardIdx = useCallback(
    (...args) => {
      if (match.currentPlayerId !== match.sessionOwnerPlayerId) {
        return
      }

      return _setSelectedHandCardIdx(...args)
    },
    [match]
  )

  const [selectedFieldCardIdx, setSelectedFieldCardIdx] =
    useState(deselectedCardIdx)

  const isHandCardSelected = selectedHandCardIdx !== deselectedCardIdx
  const isFieldCardSelected = selectedFieldCardIdx !== deselectedCardIdx

  const handContainerRef = useRef<HTMLDivElement | null>(null)
  const fieldContainerRef = useRef<HTMLDivElement | null>(null)

  const shellContextValue: ShellContextProps = useMemo(
    () => ({
      blockingOperation,
      isHandInViewport,
      setIsHandInViewport,
      isNarrowViewport,
      showNotification,
      selectedHandCardIdx,
      setSelectedHandCardIdx,
      selectedFieldCardIdx,
      setSelectedFieldCardIdx,
      isHandCardSelected,
      isFieldCardSelected,
      handContainerRef,
      fieldContainerRef,
    }),
    [
      blockingOperation,
      isHandInViewport,
      setIsHandInViewport,
      isNarrowViewport,
      showNotification,
      selectedHandCardIdx,
      setSelectedHandCardIdx,
      selectedFieldCardIdx,
      setSelectedFieldCardIdx,
      isHandCardSelected,
      isFieldCardSelected,
      handContainerRef,
      fieldContainerRef,
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
  // NOTE: In both of these states, the player is choosing a position/target
  // in the Field (see TurnControl.tsx's "Select a position in the field"/
  // "Select a crop to water" messaging for these same states) -- the
  // Hand/Field card-navigation Fabs would just be in the way of that, so
  // they're hidden for the duration.
  const isSelectingFieldPosition = [
    MatchState.CHOOSING_CARD_POSITION,
    MatchState.PLAYER_WATERING_CROP,
  ].includes(matchState)

  return {
    match,
    handleHandVisibilityToggle,
    handleClickPlayAgain,
    isHandDisabled,
    isInputBlocked,
    isSelectingFieldPosition,
    shellContextValue,
    showGameOver,
    showHand,
  }
}
