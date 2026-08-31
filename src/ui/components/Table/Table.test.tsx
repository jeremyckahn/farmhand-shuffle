import { render, screen, act } from '@testing-library/react'

import { carrot, instantiate } from '../../../game/cards'
import { lookup } from '../../../game/services/Lookup'
import { IMatch, IPlayer } from '../../../game/types'
import { stubMatch } from '../../../test-utils/stubs/match'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { CardSize } from '../../types'
import { ActorContext } from '../Match/ActorContext'

import { Table, TableProps } from './Table'

// NOTE: Mocking out the Card component improves test execution speed.
// Typed as `any`: type errors are irrelevant for these tests, and the
// real CardProps type fights the ad hoc rest-prop-spread shape here.
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
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any) => (
    // Not a plain `size={size}`: React's built-in attribute handling
    // treats the native "size" attribute as numeric-only and silently
    // drops a CardSize string value rather than rendering it, so tests
    // that need to observe it (see "responsive hand card size" below)
    // can't select on it. data-* attributes always pass through verbatim.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <div data-card-size={size} {...rest} />
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

  describe('responsive hand card size', () => {
    // stubMatch()'s default players have empty hands, so there's nothing
    // to inspect the rendered size of - build one with a card in hand,
    // spreading a real, fully-built match so every other required
    // IMatch/ITable/IPlayer field stays populated.
    const baseMatch = stubMatch()
    const userPlayerId = baseMatch.sessionOwnerPlayerId
    const userPlayerWithHand: IPlayer = {
      // Non-null: sessionOwnerPlayerId is always a key of players.
      ...baseMatch.table.players[userPlayerId]!,
      hand: [instantiate(carrot)],
    }
    const matchWithHand: IMatch = {
      ...baseMatch,
      table: {
        ...baseMatch.table,
        players: {
          ...baseMatch.table.players,
          [userPlayerId]: userPlayerWithHand,
        },
      },
    }

    // Not window.innerWidth/matchMedia: card size is driven by this
    // component's own rendered width (see useContainerWidth), not the
    // viewport, so these tests drive it the same way - by invoking the
    // mocked ResizeObserver's callback directly.
    let resizeCallback: ResizeObserverCallback | undefined

    beforeEach(() => {
      vi.stubGlobal(
        'ResizeObserver',
        class {
          constructor(callback: ResizeObserverCallback) {
            resizeCallback = callback
          }

          observe = vi.fn()
          unobserve = vi.fn()
          disconnect = vi.fn()
        }
      )
    })

    afterEach(() => {
      vi.unstubAllGlobals()
      resizeCallback = undefined
    })

    const setContainerWidth = (width: number) => {
      act(() => {
        resizeCallback?.(
          [{ contentRect: { width } }] as ResizeObserverEntry[],
          {} as ResizeObserver
        )
      })
    }

    test('uses small cards when the container is narrower than the md breakpoint', () => {
      render(<StubTable match={matchWithHand} />)
      setContainerWidth(500)

      const hand = screen.getByTestId(
        `hand_${matchWithHand.sessionOwnerPlayerId}`
      )

      expect(
        hand.querySelector(`[data-card-size="${CardSize.SMALL}"]`)
      ).toBeInTheDocument()
    })

    test('uses medium cards when the container is at least as wide as the md breakpoint', () => {
      render(<StubTable match={matchWithHand} />)
      setContainerWidth(1000)

      const hand = screen.getByTestId(
        `hand_${matchWithHand.sessionOwnerPlayerId}`
      )

      expect(
        hand.querySelector(`[data-card-size="${CardSize.MEDIUM}"]`)
      ).toBeInTheDocument()
    })
  })
})
