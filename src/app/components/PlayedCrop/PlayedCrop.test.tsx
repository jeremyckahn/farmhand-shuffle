import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { carrot } from '../../../game/cards'
import { IPlayedCrop } from '../../../game/types'

import { PlayedCrop, PlayedCropProps } from './PlayedCrop'

const stubCard = carrot
const stubWaterCards = 3
const stubPlayedCrop: IPlayedCrop = {
  id: stubCard.id,
  waterCards: stubWaterCards,
}
const stubCropCardProps = { card: stubCard, playedCrop: stubPlayedCrop }

const StubCropCard = (overrides: Partial<PlayedCropProps> = {}) => (
  <PlayedCrop
    cropCardProps={stubCropCardProps}
    isInBackground={false}
    {...overrides}
  />
)

describe('PlayedCrop', () => {
  test('renders played crop card', () => {
    render(<StubCropCard />)

    expect(screen.findByText(stubCard.name))
  })

  test('renders water indicators', () => {
    render(<StubCropCard />)

    expect(screen.getAllByAltText('Water card indicator')).toHaveLength(
      stubWaterCards
    )
  })

  test('foreground water indicators are visible', () => {
    render(<StubCropCard />)

    const waterIndicators = screen.getAllByAltText('Water card indicator')

    for (const waterIndicator of waterIndicators) {
      const { opacity } = getComputedStyle(waterIndicator)

      expect(opacity).toEqual('1')
    }
  })

  test('background water indicators are not visible', () => {
    render(<StubCropCard isInBackground={true} />)

    const waterIndicators = screen.getAllByAltText('Water card indicator')

    for (const waterIndicator of waterIndicators) {
      const { opacity } = getComputedStyle(waterIndicator)

      expect(opacity).toEqual('0')
    }
  })
})
