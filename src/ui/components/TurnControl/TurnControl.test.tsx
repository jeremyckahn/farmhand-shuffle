import { ButtonProps } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'

import { updateMatch } from '../../../game/reducers/update-match'
import { updatePlayer } from '../../../game/reducers/update-player'
import { defaultSelectedWaterCardInHandIdx } from '../../../game/services/Rules/constants'
import { MatchEvent, MatchState } from '../../../game/types'
import { mockSend } from '../../../test-utils/mocks/send'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import * as useMatchRulesModule from '../../hooks/useMatchRules'
import { ActorContext } from '../Match/ActorContext'

import { TurnControl, TurnControlProps } from './TurnControl'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card', () => ({
  Card: () => <div data-testid="mock-card" />,
}))

// NOTE: Mocking out MUI components improves test execution speed
vi.mock('@mui/material/Accordion', () => ({
  default: ({
    children,
    expanded,
  }: {
    children: ReactNode
    expanded: boolean
  }) => (
    <div data-testid="mock-accordion" data-expanded={String(expanded)}>
      {children}
    </div>
  ),
}))

vi.mock('@mui/material/AccordionActions', () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="mock-accordion-actions">{children}</div>
  ),
}))

vi.mock('@mui/material/AccordionSummary', () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="mock-accordion-summary">{children}</div>
  ),
}))

vi.mock('@mui/material/Button', () => ({
  default: ({ children, onClick, color }: ButtonProps) => (
    <button onClick={onClick} data-color={color}>
      {children}
    </button>
  ),
}))

vi.mock('@mui/material/Chip', () => ({
  default: ({ label }: { label: string }) => (
    <div data-testid="mock-chip">{label}</div>
  ),
}))

vi.mock('@mui/material/Stack', () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}))

vi.mock('@mui/material/Tooltip', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}))

vi.mock('@mui/material/Typography', () => ({
  default: ({ children }: { children: ReactNode }) => <span>{children}</span>,
}))

vi.mock('@mui/material/styles/useTheme', () => ({
  default: () => ({
    palette: {
      common: { white: '#fff', black: '#000' },
      error: { dark: 'red', light: 'red' },
      success: { light: 'green', dark: 'green' },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
    },
  }),
}))

vi.mock('@mui/icons-material/AccountBalance', () => ({
  default: () => <div data-testid="mock-icon-account-balance" />,
}))

vi.mock('@mui/icons-material/AttachMoney', () => ({
  default: () => <div data-testid="mock-icon-attach-money" />,
}))

vi.mock('@mui/icons-material/KeyboardArrowUp', () => ({
  default: () => <div data-testid="mock-icon-keyboard-arrow-up" />,
}))

vi.mock('@mui/icons-material/KeyboardArrowDown', () => ({
  default: () => <div data-testid="mock-icon-keyboard-arrow-down" />,
}))

vi.mock('fun-animal-names', () => ({
  funAnimalName: (id: string) => `fun-animal-${id}`,
}))

const StubTurnControl = (overrides: Partial<TurnControlProps>) => {
  return (
    <ActorContext.Provider>
      <TurnControl match={stubMatch()} {...overrides} />
    </ActorContext.Provider>
  )
}

describe('TurnControl Component', () => {
  it('renders a "Complete setup" button when in WAITING_FOR_PLAYER_SETUP_ACTION state and current player has crops', () => {
    const matchState = MatchState.WAITING_FOR_PLAYER_SETUP_ACTION

    let match = stubMatch()
    match = updatePlayer(match, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    render(<StubTurnControl match={match} />)

    expect(
      screen.getByRole('button', { name: /Complete setup/i })
    ).toBeInTheDocument()
  })

  it('renders an "End turn" button when it is the current player turn', () => {
    const matchState = MatchState.WAITING_FOR_PLAYER_TURN_ACTION

    let match = stubMatch()
    match = updateMatch(match, { currentPlayerId: match.sessionOwnerPlayerId })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    render(<StubTurnControl match={match} />)

    expect(
      screen.getByRole('button', { name: /End turn/i })
    ).toBeInTheDocument()
  })

  it('does not render a button when in WAITING_FOR_PLAYER_SETUP_ACTION state but current player has no crops', () => {
    const matchState = MatchState.WAITING_FOR_PLAYER_SETUP_ACTION

    let match = stubMatch()
    match = updatePlayer(match, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    render(<StubTurnControl match={match} />)

    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('does not render a button when in an unhandled match state', () => {
    const matchState = MatchState.UNINITIALIZED

    let match = stubMatch()
    match = updatePlayer(match, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    render(<StubTurnControl match={match} />)

    // Check if the button is not rendered
    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('handles completing player setup', () => {
    const matchState = MatchState.WAITING_FOR_PLAYER_SETUP_ACTION

    let match = stubMatch()
    match = updatePlayer(match, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    const send = mockSend()

    render(<StubTurnControl match={match} />)

    const button = screen.getByRole('button', { name: /Complete setup/i })
    fireEvent.click(button)

    expect(send).toHaveBeenCalledWith({
      type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION,
    })
  })

  it('handles ending the player turn', () => {
    const matchState = MatchState.WAITING_FOR_PLAYER_TURN_ACTION

    let match = stubMatch()
    match = updateMatch(match, { currentPlayerId: match.sessionOwnerPlayerId })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    const send = mockSend()

    render(<StubTurnControl match={match} />)

    const button = screen.getByRole('button', { name: /End turn/i })
    fireEvent.click(button)

    expect(send).toHaveBeenCalledWith({
      type: MatchEvent.START_TURN,
    })
  })

  it('renders a closed accordion when no control button is present', () => {
    const matchState = MatchState.UNINITIALIZED

    let match = stubMatch()
    match = updatePlayer(match, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    render(<StubTurnControl match={match} />)

    // Assert that the accordion is not expanded
    expect(screen.getByTestId('mock-accordion')).toHaveAttribute(
      'data-expanded',
      'false'
    )
  })

  it('renders an expanded accordion when a control button is present', () => {
    const matchState = MatchState.WAITING_FOR_PLAYER_SETUP_ACTION

    let match = stubMatch()
    match = updatePlayer(match, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useMatchRulesModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...match,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      },
    })

    render(<StubTurnControl match={match} />)

    // Assert that the accordion is expanded
    expect(screen.getByTestId('mock-accordion')).toHaveAttribute(
      'data-expanded',
      'true'
    )
  })
})
