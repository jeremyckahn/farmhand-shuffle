import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { GameState, GameEvent, IPlayerSeed } from '../../../game/types'
import { useGameRules } from '../../hooks/useGameRules'
import { stubGame } from '../../../test-utils/stubs/game'

import { ActorContext } from './ActorContext'
import { useGame } from './useGame'
import { emptyNotificationMessage } from './Snackbar'

// Mock dependencies
vi.mock('../../hooks/useGameRules')
vi.mock('./ActorContext')

describe('useGame', () => {
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

  // Mock game rules
  const mockGame = stubGame({
    sessionOwnerPlayerId: 'player1',
    currentPlayerId: 'player1',
  })

  beforeEach(() => {
    // Setup mocks
    vi.mocked(ActorContext.useActorRef).mockReturnValue(mockActorRef)
    vi.mocked(useGameRules).mockReturnValue({
      game: {
        ...mockGame,
        selectedWaterCardInHandIdx: 0,
        winner: null,
      },
      gameState: GameState.UNINITIALIZED,
    })

    vi.spyOn(console, 'debug').mockImplementationOnce(vi.fn())
  })

  it('should initialize game when gameState is UNINITIALIZED', () => {
    renderHook(() =>
      useGame({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockActorRef.send).toHaveBeenCalledWith({
      type: GameEvent.INIT,
      playerSeeds: mockPlayerSeeds,
      userPlayerId: mockUserPlayerId,
    })
  })

  it('should execute blocking operation correctly', async () => {
    const mockOperation = vi.fn().mockResolvedValue(undefined)
    const { result } = renderHook(() =>
      useGame({
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
      useGame({
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
      useGame({
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
    vi.mocked(useGameRules).mockReturnValue({
      game: {
        ...mockGame,
        currentPlayerId: 'player2',
        selectedWaterCardInHandIdx: 0,
        winner: null,
      },
      gameState: GameState.UNINITIALIZED,
    })

    const { result } = renderHook(() =>
      useGame({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.isInputBlocked).toBe(true)
  })

  it('should toggle hand visibility', () => {
    const { result } = renderHook(() =>
      useGame({
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
    vi.mocked(useGameRules).mockReturnValue({
      game: {
        ...mockGame,
        selectedWaterCardInHandIdx: 0,
        winner: null,
      },
      gameState: GameState.PLAYER_WATERING_CROP,
    })

    const { result } = renderHook(() =>
      useGame({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.isHandDisabled).toBe(true)
  })

  it('should show hand when isHandInViewport is true', () => {
    const { result } = renderHook(() =>
      useGame({
        playerSeeds: mockPlayerSeeds,
        userPlayerId: mockUserPlayerId,
      })
    )

    expect(result.current.showHand).toBe(true)
  })

  it('should always show hand when isHandDisabled is true, regardless of isHandInViewport', () => {
    vi.mocked(useGameRules).mockReturnValue({
      game: {
        ...mockGame,
        selectedWaterCardInHandIdx: 0,
        winner: null,
      },
      gameState: GameState.PLAYER_WATERING_CROP,
    })

    const { result } = renderHook(() =>
      useGame({
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

  it('should update snackbar props when showNotification is called', () => {
    const { result } = renderHook(() =>
      useGame({
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

    expect(result.current.snackbarProps.message).toBe('Test message')
    expect(result.current.snackbarProps.severity).toBe('success')
  })

  it('should clear snackbar message when onClose is called', () => {
    const { result } = renderHook(() =>
      useGame({
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

    expect(result.current.snackbarProps.message).toBe('Test message')

    act(() => {
      result.current.snackbarProps.onClose()
    })

    expect(result.current.snackbarProps.message).toBe(emptyNotificationMessage)
  })

  it('should update isHandInViewport when setIsHandInViewport is called', () => {
    const { result } = renderHook(() =>
      useGame({
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
