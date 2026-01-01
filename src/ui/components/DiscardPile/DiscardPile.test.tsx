import { ThemeProvider, createTheme } from '@mui/material/styles'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { IMatch, IPlayer, CardType } from '../../../game/types'
import { stubTable } from '../../../test-utils/stubs/table'

import { DiscardPile } from './DiscardPile'

const theme = createTheme()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockCardInstance: any = {
  id: 'carrot',
  name: 'Carrot',
  type: CardType.CROP,
  instanceId: '123',
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const mockPlayer: IPlayer = {
  id: 'player1',
  funds: 0,
  deck: [],
  hand: [],
  discardPile: [mockCardInstance],
  field: { crops: [] },
  cardsPlayedDuringTurn: [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const mockMatch: IMatch = {
  sessionOwnerPlayerId: 'player1',
  table: {
    players: {
      player1: mockPlayer,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any

vi.mock('../Card', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Card: ({ cardInstance, ...rest }: any) => (
    <div data-testid="mock-card" {...rest}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      {cardInstance.name}
    </div>
  ),
}))

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('DiscardPile', () => {
  it('renders discard pile with cards', () => {
    renderWithTheme(<DiscardPile match={mockMatch} playerId="player1" />)
    expect(screen.getByTestId('discard-pile_player1')).toBeInTheDocument()
    expect(screen.getByTestId('mock-card')).toBeInTheDocument()
    expect(screen.getByText('Carrot')).toBeInTheDocument()
  })

  it('renders correctly with an empty discard pile', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const mockMatchEmpty = {
      ...mockMatch,
      table: {
        players: {
          player1: { ...mockPlayer, discardPile: [] },
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    renderWithTheme(<DiscardPile match={mockMatchEmpty} playerId="player1" />)
    expect(screen.getByTestId('discard-pile_player1')).toBeInTheDocument()
    expect(screen.queryByTestId('mock-card')).not.toBeInTheDocument()
  })

  it('rotates opponent discard pile', () => {
    const opponentId = 'player2'

    const mockMatchOpponent: IMatch = {
      ...mockMatch,
      table: stubTable({
        players: {
          player2: { ...mockPlayer, id: opponentId },
        },
      }),
    }

    renderWithTheme(
      <DiscardPile match={mockMatchOpponent} playerId={opponentId} />
    )
    const pile = screen.getByTestId(`discard-pile_${opponentId}`)

    // Check that the transform property contains the rotation
    const computedStyle = window.getComputedStyle(pile)

    expect(computedStyle.transform).toContain('rotate(180deg)')
  })
})
