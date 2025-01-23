import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { carrot } from '../../../game/cards'
import { ActorContext } from '../Game/ActorContext'
import { GameEvent, GameEventPayload } from '../../../game/types'

import { Card, CardFocusMode, CardProps } from './Card'
import { cardFlipWrapperClassName } from './CardTemplate'

const stubCard = carrot

const StubCard = ({ ref, ...overrides }: Partial<CardProps> = {}) => (
  <ActorContext.Provider>
    <Card card={stubCard} cardIdx={0} playerId="" {...overrides} />
  </ActorContext.Provider>
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

    render(<StubCard playedCrop={{ id: stubCard.id, waterCards }} />)

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

  describe('cardFocusMode: CardFocusMode.CROP_PLACEMENT', () => {
    test('allows player to place crop', () => {
      const mockSend = vi.fn()

      // @ts-expect-error Irrelevant useActorRef return properties are omitted
      vi.spyOn(ActorContext, 'useActorRef').mockReturnValue({
        send: mockSend,
      })
      render(
        <StubCard card={carrot} cardFocusMode={CardFocusMode.CROP_PLACEMENT} />
      )

      const playCardButton = screen.getByText('Play card')

      fireEvent.click(playCardButton)

      expect(mockSend).toHaveBeenCalledWith<
        [GameEventPayload[GameEvent.PLAY_CROP]]
      >({
        type: GameEvent.PLAY_CROP,
        cardIdx: 0,
        playerId: '',
      })
    })
  })
})
