import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { factory } from '../../../game/services/Factory'
import { defaultSelectedWaterCardInHandIdx } from '../../../game/services/Rules/constants'
import {
  MatchEvent,
  MatchEventPayload,
  MatchState,
  IPlayer,
} from '../../../game/types'
import { mockSend } from '../../../test-utils/mocks/send'
import {
  stubCarrot,
  stubRain,
  stubShovel,
  stubSprinkler,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import * as useMatchStateModule from '../../hooks/useMatchRules'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { ActorContext } from '../Match/ActorContext'
import { deselectedHandIdx } from '../constants'

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

    if (!card) throw new Error('Card not found')

    const { transform } = getComputedStyle(card)

    expect(transform).toEqual('')
  })

  test('can be flipped face down', () => {
    render(<StubCard isFlipped={true} />)

    const card = screen
      .getByText(stubCardInstance.name)
      .closest(`.${cardFlipWrapperClassName}`)

    if (!card) throw new Error('Card not found')

    const { transform } = getComputedStyle(card)

    expect(transform).toEqual('rotateY(180deg)')
  })

  test('disables "Play crop" button when field is full during setup phase', () => {
    const match = stubMatch()
    const player = match.table.players[stubPlayer1.id]

    if (!player) throw new Error('Player not found')

    // Create a full field (6 crops)
    const fullFieldCrops = Array.from({ length: 6 }, () =>
      factory.buildPlayedCrop(stubCarrot)
    )

    // Update player's field in the match stub
    const playerWithFullField: IPlayer = {
      ...player,
      field: {
        cards: fullFieldCrops,
      },
    }

    const matchWithFullField = {
      ...match,
      table: {
        ...match.table,
        players: {
          ...match.table.players,
          [stubPlayer1.id]: playerWithFullField,
        },
      },
    }

    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValue({
      matchState: MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
      match: matchWithFullField,
    })

    render(
      <StubCard cardInstance={stubCarrot} playerId={stubPlayer1.id} isFocused />
    )

    const playCardButton = screen.getByText('Play crop')

    expect(playCardButton).toBeDisabled()
  })

  test.each([
    { matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION },
    { matchState: MatchState.WAITING_FOR_PLAYER_SETUP_ACTION },
  ])(
    'allows player to place crop in match state $matchState',
    ({ matchState }) => {
      const send = mockSend()
      const match = stubMatch()

      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState,
        match: {
          ...match,
          selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
        },
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
        [MatchEventPayload[MatchEvent.PLAY_CROP]]
      >({
        type: MatchEvent.PLAY_CROP,
        cardIdxInHand: 0,
        playerId: stubPlayer1.id,
      })
    }
  )

  test.each([{ matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION }])(
    'allows player to start watering sequence in match state $matchState',
    ({ matchState }) => {
      const send = mockSend()

      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState,
        match: stubMatch({
          selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
        }),
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
        [MatchEventPayload[MatchEvent.PLAY_WATER]]
      >({
        type: MatchEvent.PLAY_WATER,
        cardIdxInHand: 0,
        playerId: stubPlayer1.id,
      })
    }
  )

  test('allows player to water a crop card', () => {
    const send = mockSend()
    const selectedWaterCardInHandIdx = 2

    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
      matchState: MatchState.PLAYER_WATERING_CROP,
      match: stubMatch({ selectedWaterCardInHandIdx }),
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
      [MatchEventPayload[MatchEvent.SELECT_CROP_TO_WATER]]
    >({
      type: MatchEvent.SELECT_CROP_TO_WATER,
      cropIdxInFieldToWater: 0,
      waterCardInHandIdx: selectedWaterCardInHandIdx,
      playerId: stubPlayer1.id,
    })
  })

  test('allows player to harvest a crop card', () => {
    const send = mockSend()

    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
      matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      match: stubMatch({ selectedWaterCardInHandIdx: 0 }),
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
      [MatchEventPayload[MatchEvent.HARVEST_CROP]]
    >({
      type: MatchEvent.HARVEST_CROP,
      playerId: stubPlayer1.id,
      cropIdxInFieldToHarvest: cardIdx,
    })
  })

  test('allows player to play event card', () => {
    const send = mockSend()

    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
      matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      match: stubMatch({
        eventCardsThatCanBePlayed: 1,
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      }),
    })

    render(
      <StubCard cardInstance={stubRain} playerId={stubPlayer1.id} isFocused />
    )

    const playCardButton = screen.getByText('Play event')

    fireEvent.click(playCardButton)

    expect(send).toHaveBeenCalledWith<
      [MatchEventPayload[MatchEvent.PLAY_EVENT]]
    >({
      type: MatchEvent.PLAY_EVENT,
      cardIdxInHand: 0,
      playerId: stubPlayer1.id,
    })
  })

  test('allows player to play tool card', () => {
    const send = mockSend()

    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
      matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      match: stubMatch({
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      }),
    })

    render(
      <StubCard cardInstance={stubShovel} playerId={stubPlayer1.id} isFocused />
    )

    const playCardButton = screen.getByText('Play tool')

    fireEvent.click(playCardButton)

    expect(send).toHaveBeenCalledWith<
      [MatchEventPayload[MatchEvent.PLAY_TOOL]]
    >({
      type: MatchEvent.PLAY_TOOL,
      cardIdxInHand: 0,
      playerId: stubPlayer1.id,
    })
  })

  test('allows player to discard a planted tool card', () => {
    const send = mockSend()

    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
      matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      match: stubMatch({
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      }),
    })

    render(
      <StubCard
        cardInstance={stubSprinkler}
        playerId={stubPlayer1.id}
        isFocused
        isInField
      />
    )

    const discardCardButton = screen.getByText('Discard')

    fireEvent.click(discardCardButton)

    expect(send).toHaveBeenCalledWith<
      [MatchEventPayload[MatchEvent.DISCARD_CARD_FROM_FIELD]]
    >({
      type: MatchEvent.DISCARD_CARD_FROM_FIELD,
      playerId: stubPlayer1.id,
      cardIdxInField: 0,
    })
  })

  test("does not allow players to discard other player's planted tools", () => {
    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
      matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      match: stubMatch({
        selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
      }),
    })

    render(
      <StubCard
        cardInstance={stubSprinkler}
        playerId={stubPlayer2.id}
        isFocused
        isInField
      />
    )

    const discardCardButton = screen.queryByText('Discard')

    expect(discardCardButton).not.toBeInTheDocument()
  })

  describe('Tooltip variations', () => {
    const match = stubMatch()

    test('shows "Needs water" tooltip when canBeWatered is true', () => {
      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState: MatchState.PLAYER_WATERING_CROP,
        match: {
          ...match,
          selectedWaterCardInHandIdx: 0,
        },
      })

      render(
        <StubCard
          isInField
          canBeWatered
          playerId={match.sessionOwnerPlayerId}
        />
      )

      expect(screen.getByLabelText('Needs water')).toBeInTheDocument()
    })

    test('shows "Ready to be harvested" tooltip when canBeHarvested is true', () => {
      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        match: {
          ...match,
          selectedWaterCardInHandIdx: 0,
        },
      })

      render(
        <StubCard
          isInField
          canBeHarvested
          playerId={match.sessionOwnerPlayerId}
        />
      )

      expect(screen.getByLabelText('Ready to be harvested')).toBeInTheDocument()
    })

    test('shows no tooltip when neither canBeWatered nor canBeHarvested is true', () => {
      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        match: {
          ...match,
          selectedWaterCardInHandIdx: 0,
        },
      })

      render(<StubCard isInField playerId={match.sessionOwnerPlayerId} />)

      expect(screen.queryByTitle('Needs water')).not.toBeInTheDocument()
      expect(
        screen.queryByLabelText('Ready to be harvested')
      ).not.toBeInTheDocument()
    })

    test('tooltip does not show when isSessionOwnersCard is false', () => {
      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        match: {
          ...match,
          selectedWaterCardInHandIdx: 0,
        },
      })

      render(
        <StubCard isInField canBeHarvested playerId="some-other-player-id" />
      )

      expect(
        screen.queryByLabelText('Ready to be harvested')
      ).not.toBeInTheDocument()
    })
  })

  describe('Shell context side-effects when playing cards', () => {
    // NOTE: This is behavior is necessary to prevent the played card from
    // appearing to immediately transform into the next card in the hand when
    // played. Though not obvious from this test, deleselecting the card
    // animates it back to the hand before unmounting it.
    test('playing a non-plantable tool (Shovel) deselects the hand card immediately and keeps the hand in viewport', () => {
      const mockSetSelectedHandCardIdx = vi.fn()
      const mockSetIsHandInViewport = vi.fn()

      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        match: stubMatch({
          selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
        }),
      })

      render(
        <StubShellContext
          setSelectedHandCardIdx={mockSetSelectedHandCardIdx}
          setIsHandInViewport={mockSetIsHandInViewport}
        >
          <ActorContext.Provider>
            <Card
              cardInstance={stubShovel}
              cardIdx={0}
              playerId={stubPlayer1.id}
              isFocused
            />
          </ActorContext.Provider>
        </StubShellContext>
      )

      const playCardButton = screen.getByText('Play tool')

      fireEvent.click(playCardButton)

      expect(mockSetSelectedHandCardIdx).toHaveBeenCalledWith(deselectedHandIdx)
      expect(mockSetIsHandInViewport).not.toHaveBeenCalled()
    })

    // NOTE: This behavior is necessary to make space for the player to select
    // a position in the Field to place the card in.
    test('playing a plantable tool (Sprinkler) does not deselect the hand card early and hides the hand viewport', () => {
      const mockSetSelectedHandCardIdx = vi.fn()
      const mockSetIsHandInViewport = vi.fn()

      vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValueOnce({
        matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
        match: stubMatch({
          selectedWaterCardInHandIdx: defaultSelectedWaterCardInHandIdx,
        }),
      })

      render(
        <StubShellContext
          setSelectedHandCardIdx={mockSetSelectedHandCardIdx}
          setIsHandInViewport={mockSetIsHandInViewport}
        >
          <ActorContext.Provider>
            <Card
              cardInstance={stubSprinkler}
              cardIdx={0}
              playerId={stubPlayer1.id}
              isFocused
            />
          </ActorContext.Provider>
        </StubShellContext>
      )

      const playCardButton = screen.getByText('Play tool')

      fireEvent.click(playCardButton)

      expect(mockSetSelectedHandCardIdx).not.toHaveBeenCalled()
      expect(mockSetIsHandInViewport).toHaveBeenCalledWith(false)
    })
  })
})
