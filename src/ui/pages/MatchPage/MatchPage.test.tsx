import CircularProgress from '@mui/material/CircularProgress'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { carrot } from '../../../game/cards'
import { ICard } from '../../../game/types'
import { storage } from '../../../services/StorageService'
import { Match } from '../../components/Match'

import { MatchPage } from './MatchPage'

// Mock dependencies
vi.mock('../../../services/StorageService', () => ({
  storage: {
    loadDeck: vi.fn(),
  },
}))

vi.mock('../../components/Match', () => ({
  Match: vi.fn(() => <div>Match Component</div>),
}))

// We need to mock ErrorPage if we were testing it directly, but since we throw error,
// we might want to wrap MatchPage in an ErrorBoundary for the error test.
// However, typically unit tests for a component that throws will fail unless wrapped.

describe('MatchPage', () => {
  it('shows loading spinner initially', async () => {
    // Make loadDeck hang or resolve slowly
    vi.mocked(storage.loadDeck).mockReturnValue(new Promise(() => {}))

    render(<MatchPage />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders Match component with loaded deck data', async () => {
    const mockDeck = new Map<ICard, number>([[carrot, 2]])
    vi.mocked(storage.loadDeck).mockResolvedValue(mockDeck)

    render(<MatchPage />)

    await waitFor(() => {
      expect(screen.getByText('Match Component')).toBeInTheDocument()
    })

    expect(Match).toHaveBeenCalledWith(
      expect.objectContaining({
        userPlayerId: expect.any(String),
        playerSeeds: expect.arrayContaining([
          expect.objectContaining({
            deck: expect.arrayContaining([
              expect.objectContaining({ id: carrot.id }),
              expect.objectContaining({ id: carrot.id }),
            ]),
          }),
          expect.objectContaining({
            // Bot uses stub deck which has >0 cards
            deck: expect.any(Array),
          }),
        ]),
      }),
      {}
    )
  })

  it('falls back to stubDeck if storage returns null', async () => {
    vi.mocked(storage.loadDeck).mockResolvedValue(null)

    render(<MatchPage />)

    await waitFor(() => {
      expect(screen.getByText('Match Component')).toBeInTheDocument()
    })

    expect(Match).toHaveBeenCalledWith(
      expect.objectContaining({
        playerSeeds: expect.arrayContaining([
          expect.objectContaining({
            // Should be stub deck (size 60)
            deck: expect.arrayContaining([expect.any(Object)]),
          }),
        ]),
      }),
      {}
    )
  })

  it('throws error when loading fails', async () => {
    // Suppress console.error for this test as React logs the error boundary uncaught error
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const error = new Error('Failed to load')
    vi.mocked(storage.loadDeck).mockRejectedValue(error)

    // Helper to catch the error
    const ErrorCatcher = () => {
      try {
        return <MatchPage />
      } catch (e) {
        return <div>Caught: {(e as Error).message}</div>
      }
    }
    // Note: Standard try/catch around render doesn't catch async errors or errors in effects easily without boundaries.
    // However, react-use's useAsyncFn catches the promise rejection and returns state.error.
    // MatchPage then explicitly throws.
    // So we can wrap in a boundary.

    class TestBoundary extends React.Component<
      { children: React.ReactNode },
      { hasError: boolean; error: Error | null }
    > {
      constructor(props: { children: React.ReactNode }) {
        super(props)
        this.state = { hasError: false, error: null }
      }
      static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
      }
      render() {
        if (this.state.hasError) {
          return <div>Caught: {this.state.error?.message}</div>
        }
        return this.props.children
      }
    }

    render(
      <TestBoundary>
        <MatchPage />
      </TestBoundary>
    )

    await waitFor(() => {
      expect(screen.getByText('Caught: Failed to load')).toBeInTheDocument()
    })

    consoleErrorSpy.mockRestore()
  })
})

// Need React for the class component
import React from 'react'
