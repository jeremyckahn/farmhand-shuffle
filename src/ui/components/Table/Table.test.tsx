import { render, screen } from '@testing-library/react'

import { lookup } from '../../../game/services/Lookup'
import { stubMatch } from '../../../test-utils/stubs/match'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { ActorContext } from '../Match/ActorContext'
import { CardProps } from '../Card/types'

import { Table, TableProps } from './Table'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card', () => ({
  Card: ({
    cardInstance,
    cardIdx,
    playerId,
    isFlipped,
    ...rest
  }: // @ts-expect-error Type errors are irrelevant for the tests
  CardProps) => <div {...rest} />,
}))

const match = stubMatch()
const opponentPlayerIds = lookup.getOpponentPlayerIds(match)

const StubTable = (overrides: Partial<TableProps>) => {
  return (
    <StubShellContext>
      <ActorContext.Provider>
        <Table match={match} {...overrides} />
      </ActorContext.Provider>
    </StubShellContext>
  )
}

describe('Table', () => {
  test('renders field for user player', () => {
    render(<StubTable />)
    const field = screen.getByTestId(`field_${match.sessionOwnerPlayerId}`)

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
    const deck = screen.getByTestId(`deck_${match.sessionOwnerPlayerId}`)

    expect(deck).toBeInTheDocument()
  })

  test('renders hand for user player', () => {
    render(<StubTable />)
    const hand = screen.getByTestId(`hand_${match.sessionOwnerPlayerId}`)

    expect(hand).toBeInTheDocument()
  })

  test('renders discard pile for user player', () => {
    render(<StubTable />)
    const discardPile = screen.getByTestId(
      `discard-pile_${match.sessionOwnerPlayerId}`
    )

    expect(discardPile).toBeInTheDocument()
  })
})
