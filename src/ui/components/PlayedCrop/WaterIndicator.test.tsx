import { funAnimalName } from 'fun-animal-names'

import { render, screen } from '@testing-library/react'

import { GameState } from '../../../game/types'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { useGameRules } from '../../hooks/useGameRules'

import {
  mockShowNotification,
  StubShellContext,
} from '../../test-utils/StubShellContext'

import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import {
  unfilledWaterIndicatorOpacity,
  WaterIndicator,
  WaterIndicatorProps,
} from './WaterIndicator'

// Mock dependencies
vi.mock('@mui/material/styles/useTheme', () => ({
  default: vi.fn(() => ({
    transitions: {
      create: vi.fn(() => 'mocked-transition'),
    },
  })),
}))

vi.mock('fun-animal-names', () => ({
  funAnimalName: vi.fn(() => 'Silly Rhino'),
}))

vi.mock('../../hooks/useGameRules', () => ({
  useGameRules: vi.fn(),
}))

vi.mock('../../img', () => ({
  cards: {
    water: '/path/to/water-image.png',
  },
}))

const defaultProps: WaterIndicatorProps = {
  cardInstance: stubCarrot,
  isFilled: false,
  opacity: unfilledWaterIndicatorOpacity,
  playerId: stubPlayer1.id,
}

const StubWaterfallIndicator = (overrides: Partial<WaterIndicatorProps>) => {
  return (
    <StubShellContext>
      <WaterIndicator {...defaultProps} {...overrides} />
    </StubShellContext>
  )
}

describe('WaterIndicator', () => {
  const mockGameRules: ReturnType<typeof useGameRules> = {
    game: stubGame({
      currentPlayerId: stubPlayer1.id,
      sessionOwnerPlayerId: stubPlayer1.id,
    }),
    gameState: GameState.PLAYER_WATERING_CROP,
    selectedWaterCardInHandIdx: 0,
  }

  beforeEach(() => {
    vi.clearAllMocks()

    // Set up mocks
    vi.mocked(useGameRules).mockReturnValue(mockGameRules)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('renders the water indicator with correct props', () => {
    render(<StubWaterfallIndicator />)

    const image = screen.getByAltText('Water card indicator')
    expect(image).toHaveStyle(`opacity: ${unfilledWaterIndicatorOpacity}`)
  })

  it('applies custom opacity when provided', () => {
    const customOpacity = 0.75

    render(<StubWaterfallIndicator opacity={customOpacity} />)

    const image = screen.getByAltText('Water card indicator')
    expect(image).toHaveStyle(`opacity: ${customOpacity}`)
  })

  it('shows notification when plant is watered by current player who is also session owner', () => {
    render(
      <StubShellContext>
        <WaterIndicator {...defaultProps} isFilled={true} />
      </StubShellContext>
    )

    expect(mockShowNotification).toHaveBeenCalledWith(
      'You watered your Carrot',
      'info'
    )
  })

  it('shows different notification when plant is watered by another player', () => {
    const otherPlayerMockGameRules = {
      ...mockGameRules,
      game: stubGame({
        currentPlayerId: stubPlayer2.id,
        sessionOwnerPlayerId: stubPlayer1.id,
      }),
    }

    vi.mocked(useGameRules).mockReturnValue(otherPlayerMockGameRules)

    render(<StubWaterfallIndicator isFilled={true} playerId={stubPlayer2.id} />)

    expect(funAnimalName).toHaveBeenCalledWith(stubPlayer2.id)
    expect(mockShowNotification).toHaveBeenCalledWith(
      'Silly Rhino watered their Carrot',
      'info'
    )
  })

  it('does not show notification when isFilled is false', () => {
    render(<StubWaterfallIndicator isFilled={false} />)

    expect(mockShowNotification).not.toHaveBeenCalled()
  })

  it('uses theme transitions for opacity', () => {
    render(<StubWaterfallIndicator />)

    const image = screen.getByAltText('Water card indicator')
    expect(image).toHaveStyle('transition: mocked-transition')
  })
})
