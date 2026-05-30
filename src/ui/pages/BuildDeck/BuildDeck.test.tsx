import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'

import { storage } from '../../../services/StorageService'

import { BuildDeck } from './BuildDeck'

vi.mock('../../../services/StorageService', () => ({
  storage: {
    saveDeck: vi.fn(),
  },
  StorageService: {
    deserializeDeck: vi.fn(),
    instantiateDeserializedDeck: vi.fn(),
    serializeDeck: vi.fn(),
  },
}))

vi.mock('../../components/DeckBuilder', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DeckBuilder: ({ onDone, isLoading }: any) => (
    <div data-testid="deck-builder">
      <button
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
        onClick={() => onDone(new Map())}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        disabled={isLoading}
      >
        Done
      </button>
    </div>
  ),
}))

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('BuildDeck', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders DeckBuilder component', () => {
    render(
      <MemoryRouter>
        <BuildDeck />
      </MemoryRouter>
    )

    expect(screen.getByTestId('deck-builder')).toBeInTheDocument()
  })

  it('shows success notification and navigates to root on successful save', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(storage.saveDeck).mockResolvedValue(undefined)

    render(
      <MemoryRouter>
        <BuildDeck />
      </MemoryRouter>
    )

    const doneButton = screen.getByText('Done')

    await user.click(doneButton)

    await waitFor(() => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(storage.saveDeck).toHaveBeenCalled()
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })

    act(() => {
      vi.runAllTimers()
    })

    expect(screen.getByText('Deck saved successfully')).toBeInTheDocument()
  })

  it('shows error notification when save fails', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(storage.saveDeck).mockRejectedValue(new Error('Save failed'))

    render(
      <MemoryRouter>
        <BuildDeck />
      </MemoryRouter>
    )

    const doneButton = screen.getByText('Done')

    await user.click(doneButton)

    await waitFor(() => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(storage.saveDeck).toHaveBeenCalled()
      expect(mockNavigate).not.toHaveBeenCalled()
    })

    act(() => {
      vi.runAllTimers()
    })

    expect(screen.getByText('Save failed')).toBeInTheDocument()
  })
})
