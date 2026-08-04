import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MatchState, MatchEvent, IPlayerSeed } from '../../../game/types'
import { useMatchRules } from '../../hooks/useMatchRules'
import { stubMatch } from '../../../test-utils/stubs/match'

import { ActorContext } from './ActorContext'
import { useMatch } from './useMatch'

// Mock dependencies
vi.mock('../../hooks/useMatchRules')
vi.mock('./ActorContext')

const showNotificationMock = vi.fn()

vi.mock('../../context/NotificationContext', () => ({
  useNotification: () => ({
    showNotification: showNotificationMock,
  }),
}))

describe('useMatch', () => {
  // Mock player seeds and user ID
  const mockPlayerSeeds: IPlayerSeed[] = [
    { id: 'player1', deck: [] },
    { id: 'player2', deck: [] },
  ]
  const mockUserPlayerId = 'player1'

  // Mock actor ref
  // @ts-expect-error Only the relevant properties are mocked
  const mockActorRef: ReturnType<typeof ActorContext.useActorRef> = {
    send: vi.fn(),
    subscribe: vi.fn(),
  }

  // Mock match rules
  const mockMatch = stubMatch({
    sessionOwnerPlayerId: 'player1',
    currentPlayerId: 'player1',
  })

  beforeEach(() => {
    // Setup mocks
    vi.clearAllMocks()
    vi.mocked(ActorContext.useActorRef).mockReturnValue(mockActorRef)
    vi.mocked(useMatchRules).mockReturnValue({
      match: {
        ...mockMatch,
        selectedWaterCardInHandIdx: 0,
      },
      matchState: MatchState.UNINITIALIZED,
      botTurnActionState: null,
    })

    vi.spyOn(console, 'debug').mockImplementationOnce(vi.fn())
  })

  it('should initialize match when matchState is UNINITIALIZED', () => {
    renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockActorRef.send).toHaveBeenCalledWith({
      type: MatchEvent.INIT,
      playerSeeds: mockPlayerSeeds,
      userPlayerId: mockUserPlayerId,
    })
  })

  it('should execute blocking operation correctly', async () => {
    const mockOperation = vi.fn().mockResolvedValue(undefined)
    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    await act(async () => {
      await result.current.shellContextValue.blockingOperation(mockOperation)
    })

    expect(mockOperation).toHaveBeenCalled()
  })

  it('should handle errors in blocking operation', async () => {
    const mockOperation = vi.fn().mockRejectedValue(new Error('Test error'))
    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    await act(async () => {
      await result.current.shellContextValue.blockingOperation(mockOperation)
    })

    expect(mockOperation).toHaveBeenCalled()
    // Should not throw and should complete the operation
  })

  it('should set isInputBlocked when blocking operation is executing', async () => {
    const mockOperation = vi.fn().mockImplementation(() => {
      return new Promise(resolve => {
        setTimeout(resolve, 100)
      })
    })

    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.isInputBlocked).toBe(false)

    const operationPromise = act(async () => {
      await result.current.shellContextValue.blockingOperation(mockOperation)
    })

    // Check that isInputBlocked is true during operation
    expect(mockOperation).toHaveBeenCalled()

    await operationPromise

    // Should be false after operation completes
    expect(result.current.isInputBlocked).toBe(false)
  })

  it('should set isInputBlocked when not session owner turn', () => {
    vi.mocked(useMatchRules).mockReturnValue({
      match: {
        ...mockMatch,
        currentPlayerId: 'player2',
        selectedWaterCardInHandIdx: 0,
      },
      matchState: MatchState.UNINITIALIZED,
      botTurnActionState: null,
    })

    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.isInputBlocked).toBe(true)
  })

  it('should toggle hand visibility', () => {
    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.showHand).toBe(true)

    act(() => {
      result.current.handleHandVisibilityToggle()
    })

    expect(result.current.showHand).toBe(false)
  })

  it('should set isHandDisabled when in PLAYER_WATERING_CROP state', () => {
    vi.mocked(useMatchRules).mockReturnValue({
      match: {
        ...mockMatch,
        selectedWaterCardInHandIdx: 0,
      },
      matchState: MatchState.PLAYER_WATERING_CROP,
      botTurnActionState: null,
    })

    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.isHandDisabled).toBe(true)
  })

  it('should show hand when isHandInViewport is true', () => {
    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.showHand).toBe(true)
  })

  it('should always show hand when isHandDisabled is true, regardless of isHandInViewport', () => {
    vi.mocked(useMatchRules).mockReturnValue({
      match: {
        ...mockMatch,
        selectedWaterCardInHandIdx: 0,
      },
      matchState: MatchState.PLAYER_WATERING_CROP,
      botTurnActionState: null,
    })

    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    // First, hide the hand
    act(() => {
      result.current.handleHandVisibilityToggle()
    })

    // Should still be shown because isHandDisabled is true
    expect(result.current.showHand).toBe(true)
  })

  it('should delegate showNotification to NotificationContext', () => {
    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    act(() => {
      result.current.shellContextValue.showNotification(
        'Test message',
        'success'
      )
    })

    expect(showNotificationMock).toHaveBeenCalledWith('Test message', 'success')
  })

  it('should update isHandInViewport when setIsHandInViewport is called', () => {
    const { result } = renderHook(() =>
      useMatch({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.shellContextValue.isHandInViewport).toBe(true)

    act(() => {
      result.current.shellContextValue.setIsHandInViewport(false)
    })

    expect(result.current.shellContextValue.isHandInViewport).toBe(false)
  })
})
