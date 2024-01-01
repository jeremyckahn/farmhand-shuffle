import { render, screen } from '@testing-library/react'

import { lookup } from '../../../game/services/Lookup'
import { stubGame } from '../../../test-utils/stubs/game'

import { Table, TableProps } from './Table'

const game = stubGame()
const opponentPlayerIds = lookup.getOpponentPlayerIds(game)

const StubTable = (overrides: Partial<TableProps>) => {
  return <Table game={game} {...overrides} />
}

describe('Table', () => {
  test('renders field for user player', () => {
    render(<StubTable />)
    const field = screen.getByTestId(`field_${game.sessionOwnerPlayerId}`)

    expect(field).toBeInTheDocument()
  })

  test.each([opponentPlayerIds])(
    'renders fields for opponent players',
    playerId => {
      render(<StubTable />)
      const field = screen.getByTestId(`field_${playerId}`)

      expect(field).toBeInTheDocument()
    }
  )

  test('renders deck for user player', () => {
    render(<StubTable />)
    const deck = screen.getByTestId(`deck_${game.sessionOwnerPlayerId}`)

    expect(deck).toBeInTheDocument()
  })

  test('renders hand for user player', () => {
    render(<StubTable />)
    const hand = screen.getByTestId(`hand_${game.sessionOwnerPlayerId}`)

    expect(hand).toBeInTheDocument()
  })

  test('renders discard pile for user player', () => {
    render(<StubTable />)
    const discardPile = screen.getByTestId(
      `discard-pile_${game.sessionOwnerPlayerId}`
    )

    expect(discardPile).toBeInTheDocument()
  })
})
