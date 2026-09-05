import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { addToDiscardPile } from '../../../game/reducers/add-to-discard-pile'
import { lookup } from '../../../game/services/Lookup'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubCarrot } from '../../../test-utils/stubs/cards'
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
    size,
    ...rest
  }: // NOTE: `size` is dropped by React when rendered on a plain <div> (it's
  // only a valid HTML attribute on <input>/<select>), so it's surfaced
  // explicitly here as a data attribute instead.
  // @ts-expect-error Type errors are irrelevant for the tests
  CardProps) => <div data-size={size} {...rest} />,
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

// NOTE: stubMatch's discard piles start empty, so DiscardPile renders no
// cards by default -- seed one to test its cardSize propagation.
const matchWithDiscardPileCard = addToDiscardPile(
  match,
  match.sessionOwnerPlayerId,
  stubCarrot
)

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

  test('passes CardSize.SMALL to Deck and DiscardPile on large viewports', () => {
    mockUseMediaQuery.mockReturnValue(true)
    render(<StubTable match={matchWithDiscardPileCard} />)

    const deck = screen.getByTestId(`deck_${match.sessionOwnerPlayerId}`)
    const discardPile = screen.getByTestId(
      `discard-pile_${match.sessionOwnerPlayerId}`
    )

    expect(deck.querySelector('[data-size]')).toHaveAttribute(
      'data-size',
      CardSize.SMALL
    )
    expect(discardPile.querySelector('[data-size]')).toHaveAttribute(
      'data-size',
      CardSize.SMALL
    )
  })

  test('passes CardSize.COMPACT to Deck and DiscardPile on narrow viewports', () => {
    mockUseMediaQuery.mockReturnValue(false)
    render(<StubTable match={matchWithDiscardPileCard} />)

    const deck = screen.getByTestId(`deck_${match.sessionOwnerPlayerId}`)
    const discardPile = screen.getByTestId(
      `discard-pile_${match.sessionOwnerPlayerId}`
    )

    expect(deck.querySelector('[data-size]')).toHaveAttribute(
      'data-size',
      CardSize.COMPACT
    )
    expect(discardPile.querySelector('[data-size]')).toHaveAttribute(
      'data-size',
      CardSize.COMPACT
    )
  })
})
