import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import * as SnackbarModule from '../../components/Snackbar'

import { MainMenu } from './MainMenu'

vi.mock('../../components/Snackbar', () => ({
  Snackbar: vi.fn(() => <div data-testid="mock-snackbar" />),
}))

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
    expect(screen.queryByTestId('mock-snackbar')).not.toBeInTheDocument()
  })

  it('displays Snackbar when notification state is provided', () => {
    render(
      <MemoryRouter
        initialEntries={[
          { pathname: '/', state: { notification: 'Success!' } },
        ]}
      >
        <MainMenu />
      </MemoryRouter>
    )

    expect(screen.getByTestId('mock-snackbar')).toBeInTheDocument()
    expect(SnackbarModule.Snackbar).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Success!',
        severity: 'success',
      }),
      expect.anything()
    )
  })

  it('clears location state when Snackbar is closed', () => {
    render(
      <MemoryRouter
        initialEntries={[
          { pathname: '/', state: { notification: 'Success!' } },
        ]}
      >
        <MainMenu />
      </MemoryRouter>
    )

    const snackbarProps = vi.mocked(SnackbarModule.Snackbar).mock.calls[0]?.[0]

    act(() => {
      snackbarProps?.onClose()
    })

    expect(mockNavigate).toHaveBeenCalledWith('.', { replace: true, state: {} })
  })
})
