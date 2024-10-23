import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { carrot } from '../../../game/cards'

import { Card, CardProps } from './Card'
import { cardFlipWrapperClassName } from './CardTemplate'

const stubCard = carrot

const StubCard = ({ ref, ...overrides }: Partial<CardProps> = {}) => (
  <Card card={stubCard} {...overrides} />
)

describe('Card', () => {
  test('renders card', () => {
    render(<StubCard />)

    expect(screen.findByText(stubCard.name))
    expect(screen.findByAltText(stubCard.name))
  })

  test('renders crop water requirements', () => {
    render(<StubCard />)

    expect(
      screen.findByText(`Water needed to mature: ${stubCard.waterToMature}`)
    )
  })

  test('renders played crop card', () => {
    const waterCards = 1

    render(<StubCard playedCrop={{ id: stubCard.id, waterCards }} />)

    expect(
      screen.findByText(
        `Water cards attached: ${waterCards}/${stubCard.waterToMature}`
      )
    )
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
})
