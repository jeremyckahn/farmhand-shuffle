import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { carrot } from '../../../game/cards'

import { BaseCardProps, Card, CropCardProps } from './Card'

const stubCard = carrot

const StubCropCard = (
  overrides: Partial<BaseCardProps & CropCardProps> = {}
) => <Card card={stubCard} {...overrides} />

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
})
