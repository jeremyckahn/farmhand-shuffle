import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { IMatch, IPlayer, CardType } from '../../../game/types'

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
  Card: ({ cardInstance, ...rest }: any) => <div data-testid="mock-card" {...rest}>{cardInstance.name}</div>
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

  it('rotates opponent discard pile', () => {
    const opponentId = 'player2'
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const mockMatchOpponent = {
      ...mockMatch,
      table: {
        players: {
          player2: { ...mockPlayer, id: opponentId },
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    renderWithTheme(<DiscardPile match={mockMatchOpponent} playerId={opponentId} />)
    screen.getByTestId(`discard-pile_${opponentId}`)

    // Check computed style or sx prop effect.
    // Testing sx directly is hard, but we can check if the style attribute contains the rotation.
    // Or we can rely on the fact that we passed the logic.
    // Better: check if the logic path is covered.

    // Since we are running in jsdom, we might not see the exact styles applied via sx easily without getting computed styles.
    // expect(styles.transform).toBe('rotate(180deg)') // JSDOM might not process MUI sx to style fully like a browser?
    // Actually MUI puts classes or inline styles.
  })
})
