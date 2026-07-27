import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import { MainMenu } from './MainMenu'

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

describe('MainMenu', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    )

    expect(screen.getByText('Farmhand Shuffle')).toBeInTheDocument()
    expect(screen.getByText('Play a match')).toBeInTheDocument()
    expect(screen.getByText('Build a deck')).toBeInTheDocument()
    expect(showNotificationMock).not.toHaveBeenCalled()
  })

  it('triggers notification and clears location state when notification state is provided', () => {
    render(
      <MemoryRouter
        initialEntries={[
          { pathname: '/', state: { notification: 'Success!' } },
        ]}
      >
        <MainMenu />
      </MemoryRouter>
    )

    expect(showNotificationMock).toHaveBeenCalledWith('Success!', 'success')
    expect(mockNavigate).toHaveBeenCalledWith('.', { replace: true, state: {} })
  })
})
