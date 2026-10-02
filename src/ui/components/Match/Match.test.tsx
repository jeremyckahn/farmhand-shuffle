import { fireEvent, render, screen } from '@testing-library/react'
import { funAnimalName } from 'fun-animal-names'
import { MockInstance } from 'vitest'

import { buildLowFundsMatch } from '../../../game/config/matchFixtures'
import { MatchState } from '../../../game/types'
import { mockUseMediaQuery } from '../../../test-utils/mocks/useMediaQuery'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { contentPaddingVar } from '../constants'

import { Match } from './Match'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card', () => ({
  Card: () => <div data-testid="mock-card" />,
}))

vi.mock('fun-animal-names', () => ({
  funAnimalName: vi.fn(() => 'Fun Animal'),
}))

describe('Match', () => {
  test('renders table', () => {
    vi.spyOn(console, 'debug').mockImplementation(() => {})

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    const table = screen.getByTestId(`table_${stubPlayer1.id}`)

    expect(table).toBeInTheDocument()
  })

  describe('game-over winner label', () => {
    // buildLowFundsMatch with losingPlayerId === opponentPlayerId puts the
    // opponent's tax charge one END_TURN click away from zero, so the
    // session owner (stubPlayer1) wins the instant "End turn" is clicked -
    // no bot-turn delay to wait out. See matchFixtures.ts/MATCH_FIXTURES.md.
    const buildWinningInitialMatch = () => {
      const { match, botState } = buildLowFundsMatch({
        sessionOwnerPlayerId: stubPlayer1.id,
        opponentPlayerId: stubPlayer2.id,
        losingPlayerId: stubPlayer2.id,
      })

      return {
        matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION as const,
        match,
        botState,
      }
    }

    beforeEach(() => {
      vi.clearAllMocks()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
    })

    test('uses funAnimalName for the winner by default', async () => {
      render(
        <Match
          playerSeeds={[stubPlayer1, stubPlayer2]}
          userPlayerId={stubPlayer1.id}
          initialMatch={buildWinningInitialMatch()}
        />
      )

      fireEvent.click(screen.getByRole('button', { name: /End turn/i }))

      expect(
        await screen.findByText('Fun Animal', { exact: false })
      ).toBeInTheDocument()
      expect(funAnimalName as unknown as MockInstance).toHaveBeenCalledWith(
        stubPlayer1.id
      )
    })

    test('renders "You" for the winner when useGenericPlayerLabels is true', async () => {
      render(
        <Match
          playerSeeds={[stubPlayer1, stubPlayer2]}
          userPlayerId={stubPlayer1.id}
          initialMatch={buildWinningInitialMatch()}
          useGenericPlayerLabels
        />
      )

      fireEvent.click(screen.getByRole('button', { name: /End turn/i }))

      expect(await screen.findByText('You')).toBeInTheDocument()
      expect(funAnimalName).not.toHaveBeenCalled()
    })
  })

  test('shows the hide/show hand button on a large viewport', () => {
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    mockUseMediaQuery.mockReturnValue(false)

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    expect(screen.queryByTestId('KeyboardArrowDownIcon')).toBeInTheDocument()
  })

  test('hides the hide/show hand button on a narrow viewport', () => {
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    mockUseMediaQuery.mockReturnValue(true)

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    expect(
      screen.queryByTestId('KeyboardArrowDownIcon')
    ).not.toBeInTheDocument()
  })
  describe('content padding', () => {
    const getScrollContainer = () =>
      screen.getByTestId('match').firstElementChild as HTMLElement

    beforeEach(() => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
    })

    test('pads the scroll container more on wide viewports than narrow ones', () => {
      mockUseMediaQuery.mockReturnValue(false)
      const wide = render(
        <Match
          playerSeeds={[stubPlayer1, stubPlayer2]}
          userPlayerId={stubPlayer1.id}
        />
      )
      const widePadding = getComputedStyle(getScrollContainer()).padding

      wide.unmount()
      mockUseMediaQuery.mockReturnValue(true)
      render(
        <Match
          playerSeeds={[stubPlayer1, stubPlayer2]}
          userPlayerId={stubPlayer1.id}
        />
      )

      expect(widePadding).toBe(`var(${contentPaddingVar}, 24px)`)
      expect(getComputedStyle(getScrollContainer()).padding).toBe(
        `var(${contentPaddingVar}, 16px)`
      )
    })
  })

  describe('hideScrollbar', () => {
    const getScrollContainer = () =>
      screen.getByTestId('match').firstElementChild as HTMLElement

    beforeEach(() => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
    })

    test('keeps the scrollbar visible by default', () => {
      render(
        <Match
          playerSeeds={[stubPlayer1, stubPlayer2]}
          userPlayerId={stubPlayer1.id}
        />
      )

      expect(getScrollContainer()).toHaveStyle({ overflowY: 'auto' })
      expect(getScrollContainer()).not.toHaveStyle({ scrollbarWidth: 'none' })
    })

    test('hides the scrollbar but stays scrollable when hideScrollbar is true', () => {
      render(
        <Match
          playerSeeds={[stubPlayer1, stubPlayer2]}
          userPlayerId={stubPlayer1.id}
          hideScrollbar
        />
      )

      expect(getScrollContainer()).toHaveStyle({
        overflowY: 'auto',
        scrollbarWidth: 'none',
      })
    })
  })
})
