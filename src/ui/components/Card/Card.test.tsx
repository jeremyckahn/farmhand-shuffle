import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { carrot, water } from '../../../game/cards'
import { RulesService } from '../../../game/services/Rules'
import { GameEvent, GameEventPayload, GameState } from '../../../game/types'
import { mockSend } from '../../../test-utils/mocks/send'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import * as useGameStateModule from '../../hooks/useGameRules'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { ActorContext } from '../Game/ActorContext'

import { Card, CardProps } from './Card'
import { cardFlipWrapperClassName } from './CardTemplate'

const stubCard = carrot

const StubCard = ({ ref, ...overrides }: Partial<CardProps> = {}) => (
  <StubShellContext>
    <ActorContext.Provider>
      <Card card={stubCard} cardIdx={0} playerId="" {...overrides} />
    </ActorContext.Provider>
  </StubShellContext>
)

describe('Card', () => {
  test('renders card', () => {
    render(<StubCard />)

    expect(screen.getByText(stubCard.name)).toBeInTheDocument()
    expect(screen.getByAltText(stubCard.name)).toBeInTheDocument()
  })

  test('renders crop water requirements', () => {
    render(<StubCard />)

    expect(
      screen.getByText(`Water needed to mature: ${stubCard.waterToMature}`)
    ).toBeInTheDocument()
  })

  test('renders played crop card', () => {
    const waterCards = 1

    render(
      <StubCard
        playedCrop={{
          id: stubCard.id,
          wasWateredTuringTurn: false,
          waterCards,
        }}
      />
    )

    expect(
      screen.getByText(
        `Water cards attached: ${waterCards}/${stubCard.waterToMature}`
      )
    ).toBeInTheDocument()
  })

  test('is face up by default', () => {
    render(<StubCard />)

    const card = screen
      .getByText(stubCard.name)
      .closest(`.${cardFlipWrapperClassName}`)

    const { transform } = getComputedStyle(card!)
    expect(transform).toEqual('')
  })

  test('can be flipped face down', () => {
    render(<StubCard isFlipped={true} />)

    const card = screen
      .getByText(stubCard.name)
      .closest(`.${cardFlipWrapperClassName}`)

    const { transform } = getComputedStyle(card!)
    expect(transform).toEqual('rotateY(180deg)')
  })

  test.each([
    { gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION },
    { gameState: GameState.WAITING_FOR_PLAYER_SETUP_ACTION },
  ])(
    'allows player to place crop in game state $gameState',
    ({ gameState }) => {
      const send = mockSend()
      const game = stubGame()
      vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
        gameState,
        game,
        selectedWaterCardInHandIdx:
          RulesService.defaultSelectedWaterCardInHandIdx,
      })

      render(<StubCard card={carrot} playerId={stubPlayer1.id} isFocused />)

      const playCardButton = screen.getByText('Play crop')

      fireEvent.click(playCardButton)

      expect(send).toHaveBeenCalledWith<
        [GameEventPayload[GameEvent.PLAY_CROP]]
      >({
        type: GameEvent.PLAY_CROP,
        cardIdx: 0,
        playerId: stubPlayer1.id,
      })
    }
  )

  test.each([{ gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION }])(
    'allows player to start watering sequence in game state $gameState',
    ({ gameState }) => {
      const send = mockSend()
      vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
        gameState,
        game: stubGame(),
        selectedWaterCardInHandIdx:
          RulesService.defaultSelectedWaterCardInHandIdx,
      })

      render(<StubCard card={water} playerId={stubPlayer1.id} isFocused />)

      const playCardButton = screen.getByText('Water a crop')

      fireEvent.click(playCardButton)

      expect(send).toHaveBeenCalledWith<
        [GameEventPayload[GameEvent.PLAY_WATER]]
      >({
        type: GameEvent.PLAY_WATER,
        cardIdx: 0,
        playerId: stubPlayer1.id,
      })
    }
  )

  test('allows player to water a crop card', () => {
    const send = mockSend()
    const selectedWaterCardInHandIdx = 2

    vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
      gameState: GameState.PLAYER_WATERING_CROP,
      game: stubGame(),
      selectedWaterCardInHandIdx,
    })

    render(
      <StubCard
        card={carrot}
        playerId={stubPlayer1.id}
        isFocused
        isInField
        canBeWatered
      />
    )

    const playCardButton = screen.getByText('Water crop')

    fireEvent.click(playCardButton)

    expect(send).toHaveBeenCalledWith<
      [GameEventPayload[GameEvent.SELECT_CROP_TO_WATER]]
    >({
      type: GameEvent.SELECT_CROP_TO_WATER,
      cropIdxInFieldToWater: 0,
      waterCardInHandIdx: selectedWaterCardInHandIdx,
      playerId: stubPlayer1.id,
    })
  })
})
