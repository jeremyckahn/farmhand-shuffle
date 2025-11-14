import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { defaultSelectedWaterCardInHandIdx } from '../../../game/services/Rules/constants'
import { GameEvent, GameEventPayload, GameState } from '../../../game/types'
import { mockSend } from '../../../test-utils/mocks/send'
import {
  stubCarrot,
  stubRain,
  stubShovel,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import * as useGameStateModule from '../../hooks/useGameRules'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { ActorContext } from '../Game/ActorContext'

import { Card } from './Card'
import { CardProps } from './types'
import { cardFlipWrapperClassName } from './CardCore'

const stubCardInstance = stubCarrot

const StubCard = ({ ref, ...overrides }: Partial<CardProps> = {}) => (
  <StubShellContext>
    <ActorContext.Provider>
      <Card
        cardInstance={stubCardInstance}
        cardIdx={0}
        playerId=""
        {...overrides}
      />
    </ActorContext.Provider>
  </StubShellContext>
)

describe('Card', () => {
  test('renders card', () => {
    render(<StubCard />)

    expect(screen.getByText(stubCardInstance.name)).toBeInTheDocument()
    expect(screen.getByAltText(stubCardInstance.name)).toBeInTheDocument()
  })

  test('renders crop water requirements', () => {
    render(<StubCard />)

    expect(
      screen.getByText(
        `Water needed to mature: ${stubCardInstance.waterToMature}`
      )
    ).toBeInTheDocument()
  })

  test('renders played crop card', () => {
    const waterCards = 1

    render(
      <StubCard
        playedCrop={{
          instance: stubCardInstance,
          wasWateredDuringTurn: false,
          waterCards,
        }}
      />
    )

    expect(
      screen.getByText(
        `Water cards attached: ${waterCards}/${stubCardInstance.waterToMature}`
      )
    ).toBeInTheDocument()
  })

  test('is face up by default', () => {
    render(<StubCard />)

    const card = screen
      .getByText(stubCardInstance.name)
      .closest(`.${cardFlipWrapperClassName}`)

    const { transform } = getComputedStyle(card!)
    expect(transform).toEqual('')
  })

  test('can be flipped face down', () => {
    render(<StubCard isFlipped={true} />)

    const card = screen
      .getByText(stubCardInstance.name)
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
        eventCardsThatCanBePlayed: 1,
        gameState,
        game,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
        winner: null,
      })

      render(
        <StubCard
          cardInstance={stubCarrot}
          playerId={stubPlayer1.id}
          isFocused
        />
      )

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
        eventCardsThatCanBePlayed: 1,
        gameState,
        game: stubGame(),
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
        winner: null,
      })

      render(
        <StubCard
          cardInstance={stubWater}
          playerId={stubPlayer1.id}
          isFocused
        />
      )

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
      eventCardsThatCanBePlayed: 1,
      gameState: GameState.PLAYER_WATERING_CROP,
      game: stubGame(),
      selectedWaterCardInHandIdx,
      winner: null,
    })

    render(
      <StubCard
        cardInstance={stubCarrot}
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

  test('allows player to harvest a crop card', () => {
    const send = mockSend()

    vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
      eventCardsThatCanBePlayed: 1,
      gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
      game: stubGame(),
      selectedWaterCardInHandIdx: 0,
      winner: null,
    })

    const cardIdx = 2

    render(
      <StubCard
        canBeHarvested
        cardIdx={cardIdx}
        cardInstance={stubCarrot}
        isFocused
        isInField
        playerId={stubPlayer1.id}
      />
    )

    const playCardButton = screen.getByText('Harvest crop')

    fireEvent.click(playCardButton)

    expect(send).toHaveBeenCalledWith<
      [GameEventPayload[GameEvent.HARVEST_CROP]]
    >({
      type: GameEvent.HARVEST_CROP,
      playerId: stubPlayer1.id,
      cropIdxInFieldToHarvest: cardIdx,
    })
  })

  test('allows player to play event card', () => {
    const send = mockSend()
    vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
      eventCardsThatCanBePlayed: 1,
      gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
      game: stubGame(),
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(
      <StubCard cardInstance={stubRain} playerId={stubPlayer1.id} isFocused />
    )

    const playCardButton = screen.getByText('Play event')

    fireEvent.click(playCardButton)

    expect(send).toHaveBeenCalledWith<[GameEventPayload[GameEvent.PLAY_EVENT]]>(
      {
        type: GameEvent.PLAY_EVENT,
        cardIdx: 0,
        playerId: stubPlayer1.id,
      }
    )
  })

  test('allows player to play tool card', () => {
    const send = mockSend()
    vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
      eventCardsThatCanBePlayed: 1,
      gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
      game: stubGame(),
      selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      winner: null,
    })

    render(
      <StubCard cardInstance={stubShovel} playerId={stubPlayer1.id} isFocused />
    )

    const playCardButton = screen.getByText('Play tool')

    fireEvent.click(playCardButton)

    expect(send).toHaveBeenCalledWith<[GameEventPayload[GameEvent.PLAY_TOOL]]>({
      type: GameEvent.PLAY_TOOL,
      cardIdx: 0,
      playerId: stubPlayer1.id,
    })
  })

  describe('Tooltip variations', () => {
    const game = stubGame()

    test('shows "Needs water" tooltip when canBeWatered is true', () => {
      vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
        eventCardsThatCanBePlayed: 1,
        gameState: GameState.PLAYER_WATERING_CROP,
        game,
        selectedWaterCardInHandIdx: 0,
        winner: null,
      })

      render(
        <StubCard isInField canBeWatered playerId={game.sessionOwnerPlayerId} />
      )

      expect(screen.getByLabelText('Needs water')).toBeInTheDocument()
    })

    test('shows "Ready to be harvested" tooltip when canBeHarvested is true', () => {
      vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
        eventCardsThatCanBePlayed: 1,
        gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
        game,
        selectedWaterCardInHandIdx: 0,
        winner: null,
      })

      render(
        <StubCard
          isInField
          canBeHarvested
          playerId={game.sessionOwnerPlayerId}
        />
      )

      expect(screen.getByLabelText('Ready to be harvested')).toBeInTheDocument()
    })

    test('shows no tooltip when neither canBeWatered nor canBeHarvested is true', () => {
      vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
        eventCardsThatCanBePlayed: 1,
        gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
        game,
        selectedWaterCardInHandIdx: 0,
        winner: null,
      })

      render(<StubCard isInField playerId={game.sessionOwnerPlayerId} />)

      expect(screen.queryByTitle('Needs water')).not.toBeInTheDocument()
      expect(
        screen.queryByLabelText('Ready to be harvested')
      ).not.toBeInTheDocument()
    })

    test('tooltip does not show when isSessionOwnersCard is false', () => {
      vi.spyOn(useGameStateModule, 'useGameRules').mockReturnValueOnce({
        eventCardsThatCanBePlayed: 1,
        gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
        game,
        selectedWaterCardInHandIdx: 0,
        winner: null,
      })

      render(
        <StubCard isInField canBeHarvested playerId="some-other-player-id" />
      )

      expect(
        screen.queryByLabelText('Ready to be harvested')
      ).not.toBeInTheDocument()
    })
  })
})
