/* eslint-disable @typescript-eslint/unbound-method */
import { act, renderHook } from '@testing-library/react'
import { funAnimalName } from 'fun-animal-names'
import { MockInstance } from 'vitest'
import { assertEvent } from 'xstate'

import { carrot } from '../../../game/cards'
import { updateMatch } from '../../../game/reducers/update-match'
import {
  MatchEvent,
  MatchEvents,
  IMatch,
  ShellNotificationPayload,
  ShellNotificationType,
} from '../../../game/types'
import {
  stubRain,
  stubShovel,
  stubSprinkler,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { ActorContext } from './ActorContext'
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

const showNotificationMock = vi.fn()

vi.mock('../../context/NotificationContext', () => ({
  useNotification: () => ({
    showNotification: showNotificationMock,
  }),
}))

describe('useSnackbar Hook', () => {
  let actorRef: ReturnType<typeof ActorContext.useActorRef>
  let match: IMatch

  beforeEach(() => {
    vi.clearAllMocks()
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

  it('should initialize without firing notifications', () => {
    renderHook(() =>
      useSnackbar({
        actorRef,
        match,
      })
    )

    expect(showNotificationMock).not.toHaveBeenCalled()
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
        renderHook(() =>
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
          (event: MatchEvents) => void
        >
        const matchEventPayload = send.mock.calls[0]![0]

        assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

        act(() => {
          matchEventPayload.shell.triggerNotification({
            type: ShellNotificationType.CARDS_DRAWN,
            payload,
          })
        })

        expect(showNotificationMock).toHaveBeenLastCalledWith(
          expectedNotification,
          'success'
        )
      }
    )

    it.each([
      { howMany: 1, expectedNotification: 'Fun Animal drew 1 card' },
      { howMany: 2, expectedNotification: 'Fun Animal drew 2 cards' },
    ])(
      'shows the correct CARDS_DRAWN notification message when $howMany cards are drawn by non-session owner',
      ({ howMany, expectedNotification }) => {
        match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
        renderHook(() =>
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
          (event: MatchEvents) => void
        >
        const matchEventPayload = send.mock.calls[0]![0]

        assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

        act(() => {
          matchEventPayload.shell.triggerNotification({
            type: ShellNotificationType.CARDS_DRAWN,
            payload,
          })
        })

        expect(showNotificationMock).toHaveBeenLastCalledWith(
          expectedNotification,
          'warning'
        )
      }
    )

    it.each([
      { howMany: 1, expectedNotification: 'Opponent drew 1 card' },
      { howMany: 2, expectedNotification: 'Opponent drew 2 cards' },
    ])(
      'shows the generic opponent label for CARDS_DRAWN when useGenericPlayerLabels is true',
      ({ howMany, expectedNotification }) => {
        match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
        renderHook(() =>
          useSnackbar({
            actorRef,
            match,
            useGenericPlayerLabels: true,
          })
        )

        const payload: ShellNotificationPayload[ShellNotificationType.CARDS_DRAWN] =
          {
            howMany,
            playerId: stubPlayer2.id,
          }

        const send = actorRef.send as unknown as MockInstance<
          (event: MatchEvents) => void
        >
        const matchEventPayload = send.mock.calls[0]![0]

        assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

        act(() => {
          matchEventPayload.shell.triggerNotification({
            type: ShellNotificationType.CARDS_DRAWN,
            payload,
          })
        })

        expect(showNotificationMock).toHaveBeenLastCalledWith(
          expectedNotification,
          'warning'
        )
      }
    )

    it('should show the correct CROP_HARVESTED notification message when session owner', () => {
      renderHook(() =>
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
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_HARVESTED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `You harvested and sold a ${carrot.name}`,
        'success'
      )
    })

    it('should show the correct CROP_HARVESTED notification message when not session owner', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      renderHook(() =>
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
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_HARVESTED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `Fun Animal harvested and sold a ${carrot.name}`,
        'warning'
      )
    })

    it('shows the generic opponent label for CROP_HARVESTED when useGenericPlayerLabels is true', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      renderHook(() =>
        useSnackbar({
          actorRef,
          match,
          useGenericPlayerLabels: true,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.CROP_HARVESTED] =
        {
          cropHarvested: carrot,
        }

      const send = actorRef.send as unknown as MockInstance<
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_HARVESTED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `Opponent harvested and sold a ${carrot.name}`,
        'warning'
      )
    })

    it('should show the correct CROP_WATERED notification message when session owner', () => {
      renderHook(() =>
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
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_WATERED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `You watered your ${carrot.name}`,
        'info'
      )
    })

    it('should show the correct CROP_WATERED notification message when not session owner', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      renderHook(() =>
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
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CROP_WATERED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `Fun Animal watered their ${carrot.name}`,
        'info'
      )
    })

    it('should show the correct EVENT_CARD_PLAYED notification message when session owner', () => {
      renderHook(() =>
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
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.EVENT_CARD_PLAYED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `You played ${payload.eventCard.name}`,
        'info'
      )
    })

    it('should show the correct EVENT_CARD_PLAYED notification message when not session owner', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      renderHook(() =>
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
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.EVENT_CARD_PLAYED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `Fun Animal played ${payload.eventCard.name}`,
        'info'
      )
    })

    it('should show the correct TOOL_CARD_PLAYED notification message when session owner', () => {
      renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.TOOL_CARD_PLAYED] =
        {
          toolCard: stubShovel,
        }

      const send = actorRef.send as unknown as MockInstance<
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.TOOL_CARD_PLAYED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `You played ${payload.toolCard.name}`,
        'info'
      )
    })

    it('should show the correct TOOL_CARD_PLAYED notification message when not session owner', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.TOOL_CARD_PLAYED] =
        {
          toolCard: stubShovel,
        }

      const send = actorRef.send as unknown as MockInstance<
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.TOOL_CARD_PLAYED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `Fun Animal played ${payload.toolCard.name}`,
        'info'
      )
    })

    it('should show the correct CARD_DISCARDED notification message when player discards a planted card', () => {
      renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.CARD_DISCARDED] =
        {
          cardDiscarded: stubSprinkler,
        }

      const send = actorRef.send as unknown as MockInstance<
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CARD_DISCARDED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `You discarded ${payload.cardDiscarded.name}`,
        'info'
      )
    })

    it('should show the correct CARD_DISCARDED notification message when non-session owner discards a planted card', () => {
      match = updateMatch(match, { sessionOwnerPlayerId: stubPlayer2.id })
      renderHook(() =>
        useSnackbar({
          actorRef,
          match,
        })
      )

      const payload: ShellNotificationPayload[ShellNotificationType.CARD_DISCARDED] =
        {
          cardDiscarded: stubSprinkler,
        }

      const send = actorRef.send as unknown as MockInstance<
        (event: MatchEvents) => void
      >
      const matchEventPayload = send.mock.calls[0]![0]

      assertEvent(matchEventPayload, MatchEvent.SET_SHELL)

      act(() => {
        matchEventPayload.shell.triggerNotification({
          type: ShellNotificationType.CARD_DISCARDED,
          payload,
        })
      })

      expect(showNotificationMock).toHaveBeenLastCalledWith(
        `Fun Animal discarded ${payload.cardDiscarded.name}`,
        'info'
      )
    })
  })

  it('should call showNotification on showNotification call', () => {
    const { result } = renderHook(() =>
      useSnackbar({
        actorRef,
        match,
      })
    )

    act(() => {
      result.current.showNotification('Test Message', 'success')
    })

    expect(showNotificationMock).toHaveBeenLastCalledWith(
      'Test Message',
      'success'
    )
  })
})
