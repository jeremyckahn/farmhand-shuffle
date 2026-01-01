// Need React for the class component
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Suspense } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { carrot } from '../../../game/cards'
import { ICard } from '../../../game/types'
import { storage } from '../../../services/StorageService'
import { Match } from '../../components/Match'

import { MatchPage } from './MatchPage'

// Mock dependencies
vi.mock('../../../services/StorageService', async importOriginal => {
  const actual = await importOriginal<
    typeof import('../../../services/StorageService')
  >()

  return {
    ...actual,
    storage: {
      loadDeck: vi.fn(),
    },
  }
})

vi.mock('../../components/Match', () => ({
  Match: vi.fn(() => <div>Match Component</div>),
}))

describe('MatchPage', () => {
  it('shows loading spinner initially', () => {
    // Make loadDeck hang
    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(storage.loadDeck).mockReturnValue(new Promise(() => {}))

    render(<MatchPage />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders Match component with loaded deck data', async () => {
    const mockDeck = new Map<ICard, number>([[carrot, 2]])

    // eslint-disable-next-line @typescript-eslint/unbound-method
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
    // eslint-disable-next-line @typescript-eslint/unbound-method
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
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const preventDefault = (e: ErrorEvent) => e.preventDefault()

    window.addEventListener('error', preventDefault)

    const error = new Error('Failed to load')

    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(storage.loadDeck).mockRejectedValue(error)

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
        return <Suspense fallback="loading">{this.props.children}</Suspense>
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

    window.removeEventListener('error', preventDefault)
    consoleErrorSpy.mockRestore()
  })
})
