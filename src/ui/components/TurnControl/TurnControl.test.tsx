import { ButtonProps } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'

import { updateGame } from '../../../game/reducers/update-game'
import { updatePlayer } from '../../../game/reducers/update-player'
import { defaultSelectedWaterCardInHandIdx } from '../../../game/services/Rules/constants'
import { GameEvent, GameState } from '../../../game/types'
import { mockSend } from '../../../test-utils/mocks/send'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import * as useGameRulesModule from '../../hooks/useGameRules'
import { ActorContext } from '../Game/ActorContext'

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
      <TurnControl game={stubGame()} {...overrides} />
    </ActorContext.Provider>
  )
}

describe('TurnControl Component', () => {
  it('renders a "Complete setup" button when in WAITING_FOR_PLAYER_SETUP_ACTION state and current player has crops', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(<StubTurnControl game={game} />)

    expect(
      screen.getByRole('button', { name: /Complete setup/i })
    ).toBeInTheDocument()
  })

  it('renders an "End turn" button when it is the current player turn', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_TURN_ACTION

    let game = stubGame()
    game = updateGame(game, { currentPlayerId: game.sessionOwnerPlayerId })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(<StubTurnControl game={game} />)

    expect(
      screen.getByRole('button', { name: /End turn/i })
    ).toBeInTheDocument()
  })

  it('does not render a button when in WAITING_FOR_PLAYER_SETUP_ACTION state but current player has no crops', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(<StubTurnControl game={game} />)

    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('does not render a button when in an unhandled game state', () => {
    const gameState = GameState.UNINITIALIZED

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(<StubTurnControl game={game} />)

    // Check if the button is not rendered
    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('handles completing player setup', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    const send = mockSend()

    render(<StubTurnControl game={game} />)

    const button = screen.getByRole('button', { name: /Complete setup/i })
    fireEvent.click(button)

    expect(send).toHaveBeenCalledWith({
      type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
    })
  })

  it('handles ending the player turn', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_TURN_ACTION

    let game = stubGame()
    game = updateGame(game, { currentPlayerId: game.sessionOwnerPlayerId })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    const send = mockSend()

    render(<StubTurnControl game={game} />)

    const button = screen.getByRole('button', { name: /End turn/i })
    fireEvent.click(button)

    expect(send).toHaveBeenCalledWith({
      type: GameEvent.START_TURN,
    })
  })

  it('renders a closed accordion when no control button is present', () => {
    const gameState = GameState.UNINITIALIZED

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(<StubTurnControl game={game} />)

    // Assert that the accordion is not expanded
    expect(screen.getByTestId('mock-accordion')).toHaveAttribute(
      'data-expanded',
      'false'
    )
  })

  it('renders an expanded accordion when a control button is present', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [
          { instance: stubCarrot, wasWateredDuringTurn: false, waterCards: 0 },
        ],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      eventCardsThatCanBePlayed: 1,
      gameState,
      game,
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(<StubTurnControl game={game} />)

    // Assert that the accordion is expanded
    expect(screen.getByTestId('mock-accordion')).toHaveAttribute(
      'data-expanded',
      'true'
    )
  })
})
