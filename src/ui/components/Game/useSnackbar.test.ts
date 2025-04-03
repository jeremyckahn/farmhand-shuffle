/* eslint-disable @typescript-eslint/unbound-method */
import { act, renderHook } from '@testing-library/react'
import { funAnimalName } from 'fun-animal-names'
import { MockInstance } from 'vitest'
import { assertEvent } from 'xstate'

import {
  GameEvent,
  IGame,
  ShellNotification,
  ShellNotificationPayload,
} from '../../../game/types'

import { carrot } from '../../../game/cards'
import { updateGame } from '../../../game/reducers/update-game'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { ActorContext } from './ActorContext'
import { emptyNotificationMessage } from './Snackbar'
import { useSnackbar } from './useSnackbar'

// Mock dependencies
vi.mock('fun-animal-names', () => ({
  funAnimalName: vi.fn(),
}))
vi.mock('../../config/constants', () => ({
  isDebugEnabled: false,
}))
vi.mock('./ActorContext', () => ({
  ActorContext: {
    useActorRef: () => ({ send: vi.fn() }),
  },
}))

describe('useSnackbar Hook', () => {
  let actorRef: ReturnType<typeof ActorContext.useActorRef>
  let game: IGame

  beforeEach(() => {
    actorRef = { send: vi.fn() } as unknown as ReturnType<
      typeof ActorContext.useActorRef
    >
    game = stubGame({
      currentPlayerId: stubPlayer1.id,
      sessionOwnerPlayerId: stubPlayer1.id,
    })
    ;(
      funAnimalName as unknown as MockInstance<typeof funAnimalName>
    ).mockReturnValue('Fun Animal')
  })

  it('should initialize with an empty snackbar message', () => {
    const { result } = renderHook(() =>
      useSnackbar({
        actorRef,
        game,
      })
    )
    expect(result.current.snackbarProps.message).toBe('')
  })

  it('should call actorRef.send on mount', () => {
    renderHook(() =>
      useSnackbar({
        actorRef,
        game,
      })
    )

    expect(actorRef.send).toHaveBeenCalledWith(
      expect.objectContaining({
        type: GameEvent.SET_SHELL,
        shell: expect.objectContaining({
          triggerNotification: expect.any(Function) as unknown,
        }) as unknown,
      })
    )
  })

  describe('Shell Notifications', () => {
    it('should show the correct CROP_HARVESTED notification message when session owner', () => {
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          game,
        })
      )

      const payload: ShellNotificationPayload[ShellNotification.CROP_HARVESTED] =
        {
          cropHarvested: carrot,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      const gameEventPayload = send.mock.calls[0][0]
      assertEvent(gameEventPayload, GameEvent.SET_SHELL)

      act(() => {
        gameEventPayload.shell.triggerNotification(
          ShellNotification.CROP_HARVESTED,
          payload
        )
      })

      expect(result.current.snackbarProps.message).toEqual(
        `You harvested and sold a ${carrot.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('success')
    })

    it('should show the correct CROP_HARVESTED notification message when not session owner', () => {
      game = updateGame(game, { sessionOwnerPlayerId: stubPlayer2.id })
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          game,
        })
      )

      const showNotification = vi.fn()
      vi.spyOn(result.current, 'showNotification').mockImplementation(
        showNotification
      )

      const payload: ShellNotificationPayload[ShellNotification.CROP_HARVESTED] =
        {
          cropHarvested: carrot,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      const gameEventPayload = send.mock.calls[0][0]
      assertEvent(gameEventPayload, GameEvent.SET_SHELL)

      act(() => {
        gameEventPayload.shell.triggerNotification(
          ShellNotification.CROP_HARVESTED,
          payload
        )
      })

      expect(result.current.snackbarProps.message).toEqual(
        `Fun Animal harvested and sold a ${carrot.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('warning')
    })
  })

  it('should update snackbarProps correctly with showNotification', () => {
    const { result } = renderHook(() =>
      useSnackbar({
        actorRef,
        game,
      })
    )

    act(() => {
      result.current.showNotification('Test Message', 'success')
    })

    expect(result.current.snackbarProps.message).toBe('Test Message')
    expect(result.current.snackbarProps.severity).toBe('success')
  })

  it('should clear the notification message when onClose is called', () => {
    const { result } = renderHook(() =>
      useSnackbar({
        actorRef,
        game,
      })
    )

    act(() => {
      result.current.showNotification('Test Message', 'success')
    })

    expect(result.current.snackbarProps.message).toBe('Test Message')

    act(() => {
      result.current.snackbarProps.onClose()
    })

    expect(result.current.snackbarProps.message).toBe(emptyNotificationMessage)
  })
})
