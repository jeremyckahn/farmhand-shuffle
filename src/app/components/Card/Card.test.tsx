import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { carrot } from '../../../game/cards'

import { Card, CardProps } from './Card'
import { cardClassName } from './CardTemplate'

const stubCard = carrot

const StubCropCard = (overrides: Partial<CardProps> = {}) => (
  <Card card={stubCard} {...overrides} />
)

describe('Card', () => {
  test('renders card', () => {
    render(<StubCropCard />)

    expect(screen.findByText(stubCard.name))
    expect(screen.findByAltText(stubCard.name))
  })

  test('renders crop water requirements', () => {
    render(<StubCropCard />)

    expect(
      screen.findByText(`Water needed to mature: ${stubCard.waterToMature}`)
    )
  })

  test('renders played crop card', () => {
    const waterCards = 1
    render(<StubCropCard playedCrop={{ id: stubCard.id, waterCards }} />)

    expect(
      screen.findByText(
        `Water cards attached: ${waterCards}/${stubCard.waterToMature}`
      )
    )
  })

  test('is face up by default', () => {
    render(<StubCropCard />)
    const card = screen.getByText(stubCard.name).closest(`.${cardClassName}`)

    const { transform } = getComputedStyle(card!)
    expect(transform).toEqual('')
  })

  test('can be flipped face down', () => {
    render(<StubCropCard isFlipped={true} />)
    const card = screen.getByText(stubCard.name).closest(`.${cardClassName}`)

    const { transform } = getComputedStyle(card!)
    expect(transform).toEqual('rotateY(180deg)')
  })
})
