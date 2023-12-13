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
  })
})
