import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { carrot } from '../../../game/cards'

import { Card, CardProps } from './Card'

const StubCard = (overrides: Partial<CardProps> = {}) => (
  <Card card={carrot} {...overrides} />
)

describe('Card', () => {
  test('renders card', () => {
    render(<StubCard />)

    expect(screen.findByText(carrot.name))
    expect(screen.findByAltText(carrot.name))
  })

  test('renders crop water requirements', () => {
    render(<StubCard />)

    expect(screen.findByText(`Water needed to mature: ${carrot.waterToMature}`))
  })

  test('renders played crop card', () => {
    const waterCards = 1
    render(<StubCard playedCrop={{ id: carrot.id, waterCards }} />)

    expect(
      screen.findByText(
        `Water cards attached: ${waterCards}/${carrot.waterToMature}`
      )
    )
  })
})
