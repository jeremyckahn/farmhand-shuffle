import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { carrot } from '../../../game/cards'

import { Card, CardProps } from './Card'

const stubCard = carrot

const StubCard = (overrides: Partial<CardProps> = {}) => (
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
})
