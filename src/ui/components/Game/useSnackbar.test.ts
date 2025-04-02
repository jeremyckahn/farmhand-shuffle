/* eslint-disable @typescript-eslint/unbound-method */
import { act, renderHook } from '@testing-library/react'
import { MockInstance } from 'vitest'
import { assertEvent } from 'xstate'

import {
  GameEvent,
  GameEventPayload,
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
  funAnimalName: vi.fn().mockReturnValue('Fun Animal'),
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
    it('should handle CROP_HARVESTED notification when session owner', () => {
      renderHook(() =>
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

      expect(actorRef.send).toHaveBeenCalledWith<
        GameEventPayload[GameEvent.SET_SHELL][]
      >({
        type: GameEvent.SET_SHELL,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        shell: { triggerNotification: expect.any(Function) },
      })
    })

    it('should handle CROP_HARVESTED notification when not session owner', () => {
      game = updateGame(game, { sessionOwnerPlayerId: stubPlayer2.id })
      renderHook(() =>
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

      expect(actorRef.send).toHaveBeenCalledWith<
        GameEventPayload[GameEvent.SET_SHELL][]
      >({
        type: GameEvent.SET_SHELL,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        shell: { triggerNotification: expect.any(Function) },
      })
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
