import { render, screen } from '@testing-library/react'

import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { Match } from './Match'
import { useMatch } from './useMatch'

// NOTE: This suite covers the GAME_OVER Dialog slots (renderStatusBarContent,
// renderGameOverContent, hideDefaultGameOverActions). Reaching GAME_OVER via
// real gameplay would require driving the whole state machine through a
// component test, so useMatch itself is mocked here to directly control
// showGameOver/match.winner instead. See Match.test.tsx for the
// real-actor-driven render test.
vi.mock('../Card', () => ({
  Card: () => <div data-testid="mock-card" />,
}))

vi.mock('../TurnControl', () => ({
  TurnControl: () => <div data-testid="mock-turn-control" />,
}))

vi.mock('./useMatch')

const baseMatch = stubMatch({
  sessionOwnerPlayerId: stubPlayer1.id,
  currentPlayerId: stubPlayer1.id,
  winner: stubPlayer1.id,
})

const createUseMatchReturn = (
  overrides: Partial<ReturnType<typeof useMatch>> = {}
): ReturnType<typeof useMatch> => ({
  match: baseMatch,
  botState: {
    cropCardIndicesToHarvest: [],
    cropsToPlayDuringTurn: 0,
    fieldCropIndicesToWaterDuringTurn: [],
    toolCardsThatCanBePlayed: 0,
  },
  handleHandVisibilityToggle: vi.fn(),
  handleClickPlayAgain: vi.fn(),
  isHandDisabled: false,
  isInputBlocked: false,
  shellContextValue: {
    blockingOperation: vi.fn(),
    isHandInViewport: true,
    setIsHandInViewport: vi.fn(),
    showNotification: vi.fn(),
    selectedHandCardIdx: -1,
    setSelectedHandCardIdx: vi.fn(),
  },
  showGameOver: true,
  showHand: true,
  ...overrides,
})

describe('Match GAME_OVER slots', () => {
  beforeEach(() => {
    vi.spyOn(console, 'debug').mockImplementation(() => {})
  })

  test('renders renderStatusBarContent beside TurnControl', () => {
    vi.mocked(useMatch).mockReturnValue(createUseMatchReturn())

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
        renderStatusBarContent={() => (
          <div data-testid="status-bar-content">Wager: $50</div>
        )}
      />
    )

    expect(screen.getByTestId('status-bar-content')).toBeInTheDocument()
  })

  test('renders renderGameOverContent inside the GAME_OVER dialog with the winner id', () => {
    vi.mocked(useMatch).mockReturnValue(createUseMatchReturn())

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
        renderGameOverContent={winnerId => (
          <div data-testid="game-over-content">{winnerId}</div>
        )}
      />
    )

    const content = screen.getByTestId('game-over-content')

    expect(content).toBeInTheDocument()
    expect(content).toHaveTextContent(stubPlayer1.id)
  })

  test('shows the built-in Play again button by default', () => {
    vi.mocked(useMatch).mockReturnValue(createUseMatchReturn())

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    expect(
      screen.getByRole('button', { name: 'Play again' })
    ).toBeInTheDocument()
  })

  test('omits the built-in Play again button when hideDefaultGameOverActions is true', () => {
    vi.mocked(useMatch).mockReturnValue(createUseMatchReturn())

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
        hideDefaultGameOverActions
      />
    )

    expect(
      screen.queryByRole('button', { name: 'Play again' })
    ).not.toBeInTheDocument()
  })
})
