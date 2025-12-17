/* eslint-disable @typescript-eslint/unbound-method */
import { act, renderHook } from '@testing-library/react'
import { funAnimalName } from 'fun-animal-names'
import { MockInstance } from 'vitest'
import { assertEvent } from 'xstate'

import { carrot } from '../../../game/cards'
import { updateMatch } from '../../../game/reducers/update-match'
import {
  MatchEvent,
  IMatch,
  ShellNotificationPayload,
  ShellNotificationType,
} from '../../../game/types'
import { stubRain, stubShovel } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
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
  let match: IMatch

  beforeEach(() => {
    actorRef = { send: vi.fn() } as unknown as ReturnType<
      typeof ActorContext.useActorRef
    >
    match = stubMatch({
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
        match,
      })
    )
    expect(result.current.snackbarProps.message).toBe('')
  })

  it('should call actorRef.send on mount', () => {
    renderHook(() =>
      useSnackbar({
        actorRef,
        match,
      })
    )

    expect(actorRef.send).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MatchEvent.SET_SHELL,
        shell: expect.objectContaining({
          triggerNotification: expect.any(Function) as unknown,
        }) as unknown,
      })
    )
  })

  describe('Shell Notifications', () => {
    it.each([
      { howMany: 1, expectedNotification: 'You drew 1 card' },
      { howMany: 2, expectedNotification: 'You drew 2 cards' },
    ])(
      'shows the correct CARDS_DRAWN notification message when session owner draws $howMany cards',
      ({ howMany, expectedNotification }) => {
        const { result } = renderHook(() =>
          useSnackbar({
            actorRef,
            match,
          })
        )

        const payload: ShellNotificationPayload[ShellNotificationType.CARDS_DRAWN] =
          {
            howMany,
            playerId: match.sessionOwnerPlayerId,
          }

        const send = actorRef.send as unknown as MockInstance<
          typeof actorRef.send
        >
        // @ts-expect-error TODO: Fix this type error
        const matchEventPayload = send.mock.calls[0][0]
        assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

        act(() => {
          matchEventPayload.shell.triggerNotification({
            type: ShellNotificationType.CARDS_DRAWN,
            payload,
          })
        })

        expect(result.current.snackbarProps.message).toEqual(
          expectedNotification
        )
        expect(result.current.snackbarProps.severity).toEqual('success')
      }
    )

    it.each([
      { howMany: 1, expectedNotification: 'Fun Animal drew 1 card' },
      { howMany: 2, expectedNotification: 'Fun Animal drew 2 cards' },
    ])(
      'shows the correct CARDS_DRAWN notification message when $howMany cards are drawn by non-session owner',
      ({ howMany, expectedNotification }) => {
        match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
        const { result } = renderHook(() =>
          useSnackbar({
            actorRef,
            match,
          })
        )

        const payload: ShellNotificationPayload[ShellNotificationType.CARDS_DRAWN] =
          {
            howMany,
            playerId: stubPlayer2.id,
          }

        const send = actorRef.send as unknown as MockInstance<
          typeof actorRef.send
        >
        // @ts-expect-error TODO: Fix this type error
        const matchEventPayload = send.mock.calls[0][0]
        assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

        act(() => {
          matchEventPayload.shell.triggerNotification({
            type: ShellNotificationType.CARDS_DRAWN,
            payload,
          })
        })

        expect(result.current.snackbarProps.message).toEqual(
          expectedNotification
        )
        expect(result.current.snackbarProps.severity).toEqual('warning')
      }
    )

    it('should show the correct CROP_HARVESTED notification message when session owner', () => {
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.CROP_HARVESTED] =
        {
          cropHarvested: carrot,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      // @ts-expect-error TODO: Fix this type error
      const matchEventPayload = send.mock.calls[0][0]
      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_HARVESTED,
          payload,
        })
      })

      expect(result.current.snackbarProps.message).toEqual(
        `You harvested and sold a ${carrot.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('success')
    })

    it('should show the correct CROP_HARVESTED notification message when not session owner', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const showNotification = vi.fn()
      vi.spyOn(result.current, 'showNotification').mockImplementation(
        showNotification
      )

      const payload: ShellNotificationPayload[ShellNotificationType.CROP_HARVESTED] =
        {
          cropHarvested: carrot,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      // @ts-expect-error TODO: Fix this type error
      const matchEventPayload = send.mock.calls[0][0]
      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_HARVESTED,
          payload,
        })
      })

      expect(result.current.snackbarProps.message).toEqual(
        `Fun Animal harvested and sold a ${carrot.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('warning')
    })

    it('should show the correct CROP_WATERED notification message when session owner', () => {
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.CROP_WATERED] =
        {
          cropWatered: carrot,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      // @ts-expect-error TODO: Fix this type error
      const matchEventPayload = send.mock.calls[0][0]
      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_WATERED,
          payload,
        })
      })

      expect(result.current.snackbarProps.message).toEqual(
        `You watered your ${carrot.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('info')
    })

    it('should show the correct CROP_WATERED notification message when not session owner', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const showNotification = vi.fn()
      vi.spyOn(result.current, 'showNotification').mockImplementation(
        showNotification
      )

      const payload: ShellNotificationPayload[ShellNotificationType.CROP_WATERED] =
        {
          cropWatered: carrot,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      // @ts-expect-error TODO: Fix this type error
      const matchEventPayload = send.mock.calls[0][0]
      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_WATERED,
          payload,
        })
      })

      expect(result.current.snackbarProps.message).toEqual(
        `Fun Animal watered their ${carrot.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('info')
    })

    it('should show the correct EVENT_CARD_PLAYED notification message when session owner', () => {
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.EVENT_CARD_PLAYED] =
        {
          eventCard: stubRain,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      // @ts-expect-error TODO: Fix this type error
      const matchEventPayload = send.mock.calls[0][0]
      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.EVENT_CARD_PLAYED,
          payload,
        })
      })

      expect(result.current.snackbarProps.message).toEqual(
        `You played ${payload.eventCard.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('info')
    })

    it('should show the correct EVENT_CARD_PLAYED notification message when not session owner', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      const { result } = renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const showNotification = vi.fn()
      vi.spyOn(result.current, 'showNotification').mockImplementation(
        showNotification
      )

      const payload: ShellNotificationPayload[ShellNotificationType.EVENT_CARD_PLAYED] =
        {
          eventCard: stubRain,
        }

      const send = actorRef.send as unknown as MockInstance<
        typeof actorRef.send
      >
      // @ts-expect-error TODO: Fix this type error
      const matchEventPayload = send.mock.calls[0][0]
      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.EVENT_CARD_PLAYED,
          payload,
        })
      })

      expect(result.current.snackbarProps.message).toEqual(
        `Fun Animal played ${payload.eventCard.name}`
      )
      expect(result.current.snackbarProps.severity).toEqual('info')
    })
  })

  it('should show the correct TOOL_CARD_PLAYED notification message when session owner', () => {
    const { result } = renderHook(() =>
      useSnackbar({
        actorRef,
        match,
      })
    )

    const payload: ShellNotificationPayload[ShellNotificationType.TOOL_CARD_PLAYED] =
      {
        toolCard: stubShovel,
      }

    const send = actorRef.send as unknown as MockInstance<typeof actorRef.send>
    // @ts-expect-error TODO: Fix this type error
    const matchEventPayload = send.mock.calls[0][0]
    assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

    act(() => {
      matchEventPayload.shell.triggerNotification({
        type: ShellNotificationType.TOOL_CARD_PLAYED,
        payload,
      })
    })

    expect(result.current.snackbarProps.message).toEqual(
      `You played ${payload.toolCard.name}`
    )
    expect(result.current.snackbarProps.severity).toEqual('info')
  })

  it('should show the correct TOOL_CARD_PLAYED notification message when not session owner', () => {
    match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
    const { result } = renderHook(() =>
      useSnackbar({
        actorRef,
        match,
      })
    )

    const showNotification = vi.fn()
    vi.spyOn(result.current, 'showNotification').mockImplementation(
      showNotification
    )

    const payload: ShellNotificationPayload[ShellNotificationType.TOOL_CARD_PLAYED] =
      {
        toolCard: stubShovel,
      }

    const send = actorRef.send as unknown as MockInstance<typeof actorRef.send>
    // @ts-expect-error TODO: Fix this type error
    const matchEventPayload = send.mock.calls[0][0]
    assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

    act(() => {
      matchEventPayload.shell.triggerNotification({
        type: ShellNotificationType.TOOL_CARD_PLAYED,
        payload,
      })
    })

    expect(result.current.snackbarProps.message).toEqual(
      `Fun Animal played ${payload.toolCard.name}`
    )
    expect(result.current.snackbarProps.severity).toEqual('info')
  })

  it('should update snackbarProps correctly with showNotification', () => {
    const { result } = renderHook(() =>
      useSnackbar({
        actorRef,
        match,
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
        match,
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
