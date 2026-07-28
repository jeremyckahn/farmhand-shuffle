import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import { DeserializedDeck } from '../../../services/StorageService'
import { DeckBuilderProps } from '../../components/DeckBuilder/types'

import { BuildDeck } from './BuildDeck'

const saveDeckMock = vi.fn<(deck: DeserializedDeck) => Promise<void>>()

vi.mock('../../../services/StorageService', async importOriginal => {
  const actual = await importOriginal<
    typeof import('../../../services/StorageService')
  >()

  return {
    ...actual,
    storage: {
      saveDeck: (deck: DeserializedDeck) => saveDeckMock(deck),
    },
  }
})

vi.mock('../../components/DeckBuilder', () => ({
  DeckBuilder: vi.fn(({ onDone, isLoading }: DeckBuilderProps) => (
    <div data-testid="mock-deck-builder">
      <button
        data-testid="done-button"
        onClick={() => void onDone(new Map())}
        disabled={isLoading}
      >
        Done
      </button>
    </div>
  )),
}))

const showNotificationMock = vi.fn()

vi.mock('../../context/NotificationContext', async importOriginal => {
  const actual = await importOriginal<
    typeof import('../../context/NotificationContext')
  >()

  return {
    ...actual,
    useNotification: () => ({
      showNotification: showNotificationMock,
    }),
  }
})

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
  })

  it('renders DeckBuilder component', () => {
    render(
      <MemoryRouter>
        <BuildDeck />
      </MemoryRouter>
    )

    expect(screen.getByTestId('mock-deck-builder')).toBeInTheDocument()
  })

  it('navigates to main menu with notification on successful deck save', async () => {
    saveDeckMock.mockResolvedValueOnce()

    render(
      <MemoryRouter>
        <BuildDeck />
      </MemoryRouter>
    )

    await act(async () => {
      screen.getByTestId('done-button').click()
      await Promise.resolve()
    })

    expect(saveDeckMock).toHaveBeenCalledWith(new Map())
    expect(showNotificationMock).toHaveBeenCalledWith(
      'Deck saved successfully',
      'success'
    )
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('triggers error notification when saving deck fails', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})

    saveDeckMock.mockRejectedValueOnce(new Error('Storage error'))

    render(
      <MemoryRouter>
        <BuildDeck />
      </MemoryRouter>
    )

    await act(async () => {
      screen.getByTestId('done-button').click()
      await Promise.resolve()
    })

    expect(showNotificationMock).toHaveBeenCalledWith(
      'Failed to save deck',
      'error'
    )
    expect(mockNavigate).not.toHaveBeenCalled()
  })
})
