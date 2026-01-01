import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useMatchRules } from './useMatchRules'
import { ActorContext } from '../components/Match/ActorContext'
import { MatchState } from '../../game/types'

// Mock ActorContext
vi.mock('../components/Match/ActorContext', () => ({
  ActorContext: {
    useSelector: vi.fn(),
  },
}))

describe('useMatchRules', () => {
  it('returns match and matchState when state is a string', () => {
    const mockMatch = { some: 'match data' }
    const mockState = MatchState.WAITING_FOR_PLAYER_TURN_ACTION;

    (ActorContext.useSelector as any).mockReturnValue({
      match: mockMatch,
      matchState: mockState,
    })

    const { result } = renderHook(() => useMatchRules())

    expect(result.current.match).toBe(mockMatch)
    expect(result.current.matchState).toBe(mockState)
  })

  it('resolves PERFORMING_BOT_TURN_ACTION when state is an object', () => {
    const mockMatch = { some: 'match data' }
    const mockState = { [MatchState.PERFORMING_BOT_TURN_ACTION]: 'some substate' };

    (ActorContext.useSelector as any).mockReturnValue({
      match: mockMatch,
      matchState: mockState,
    })

    const { result } = renderHook(() => useMatchRules())

    expect(result.current.match).toBe(mockMatch)
    expect(result.current.matchState).toBe(MatchState.PERFORMING_BOT_TURN_ACTION)
  })

  it('throws TypeError for unexpected object state', () => {
     const mockMatch = { some: 'match data' }
     const mockState = { 'UNEXPECTED_KEY': 'val' };

     (ActorContext.useSelector as any).mockReturnValue({
       match: mockMatch,
       matchState: mockState,
     })

     expect(() => renderHook(() => useMatchRules())).toThrow(TypeError)
     expect(() => renderHook(() => useMatchRules())).toThrow('Unexpected matchState shape')
   })

   it('throws TypeError if resolved state is not a string (e.g. number)', () => {
      // This case might be hard to reach if typescript is doing its job, but good for runtime safety check
      const mockMatch = { some: 'match data' }
      const mockState = 123;

      (ActorContext.useSelector as any).mockReturnValue({
        match: mockMatch,
        matchState: mockState,
      })

      expect(() => renderHook(() => useMatchRules())).toThrow(TypeError)
      expect(() => renderHook(() => useMatchRules())).toThrow('Actor state is not a string')
   })

   it('throws TypeError if resolved state string is not a valid MatchState', () => {
      const mockMatch = { some: 'match data' }
      const mockState = 'INVALID_STATE_STRING';

      (ActorContext.useSelector as any).mockReturnValue({
        match: mockMatch,
        matchState: mockState,
      })

      expect(() => renderHook(() => useMatchRules())).toThrow(TypeError)
      expect(() => renderHook(() => useMatchRules())).toThrow('is not a MatchState')
   })
})
