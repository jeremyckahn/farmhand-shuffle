import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { lookup } from '../../../game/services/Lookup'
import { stubMatch } from '../../../test-utils/stubs/match'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { CardSize } from '../../types'
import { ActorContext } from '../Match/ActorContext'
import { CardProps } from '../Card/types'
import { FieldProps } from '../Field/Field'

import { Table, TableProps } from './Table'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card', () => ({
  Card: ({
    cardInstance,
    cardIdxInHand,
    cardIdxInField,
    cropIdxInFieldToHarvest,
    cropIdxInFieldToWater,
    playerId,
    isFlipped,
    ...rest
  }: // @ts-expect-error Type errors are irrelevant for the tests
  CardProps) => <div {...rest} />,
}))

const mockUseMediaQuery = vi.fn<() => boolean>()

vi.mock('@mui/material/useMediaQuery/useMediaQuery', () => ({
  default: () => mockUseMediaQuery(),
}))

vi.mock('../Field/Field', () => ({
  Field: ({ playerId, cardSize }: FieldProps) => (
    <div data-testid={`field_${playerId}`} data-card-size={cardSize} />
  ),
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
  beforeEach(() => {
    mockUseMediaQuery.mockReturnValue(true)
  })

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

  test('passes CardSize.SMALL to Field components on large viewports', () => {
    mockUseMediaQuery.mockReturnValue(true)
    render(<StubTable />)

    const field = screen.getByTestId(`field_${match.sessionOwnerPlayerId}`)

    expect(field.getAttribute('data-card-size')).toBe(CardSize.SMALL)
  })

  test('passes CardSize.COMPACT to Field components on narrow viewports', () => {
    mockUseMediaQuery.mockReturnValue(false)
    render(<StubTable />)

    const selfField = screen.getByTestId(`field_${match.sessionOwnerPlayerId}`)
    const opponentField = screen.getByTestId(`field_${opponentPlayerIds[0]}`)

    expect(selfField.getAttribute('data-card-size')).toBe(CardSize.COMPACT)
    expect(opponentField.getAttribute('data-card-size')).toBe(CardSize.COMPACT)
  })
})
