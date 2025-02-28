import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { carrot } from '../../../game/cards'
import { IPlayedCrop } from '../../../game/types'
import { ActorContext } from '../Game/ActorContext'

import {
  PlayedCrop,
  PlayedCropProps,
  unfilledWaterIndicatorOpacity,
} from './PlayedCrop'

const stubCard = carrot
const stubWaterCards = 1
const stubPlayedCrop: IPlayedCrop = {
  id: stubCard.id,
  wasWateredTuringTurn: false,
  waterCards: stubWaterCards,
}
const stubCropCardProps = {
  card: stubCard,
  playedCrop: stubPlayedCrop,
  cardIdx: 0,
  playerId: '',
}

const StubCropCard = (overrides: Partial<PlayedCropProps> = {}) => (
  <ActorContext.Provider>
    <PlayedCrop
      cropCardProps={stubCropCardProps}
      isInBackground={false}
      {...overrides}
    />
  </ActorContext.Provider>
)

describe('PlayedCrop', () => {
  test('renders played crop card', () => {
    render(<StubCropCard />)

    expect(screen.findByText(stubCard.name))
  })

  test('renders water indicators', () => {
    render(<StubCropCard />)

    expect(screen.getAllByAltText('Water card indicator')).toHaveLength(
      stubCard.waterToMature
    )
  })

  test('filled foreground water indicators are fully opaque', () => {
    render(<StubCropCard />)

    const waterIndicators = screen.getAllByAltText('Water card indicator')

    expect(getComputedStyle(waterIndicators[0]).opacity).toEqual('1')
  })

  test('unfilled foreground water card icons are partially opaque', () => {
    render(<StubCropCard />)

    const waterIndicators = screen.getAllByAltText('Water card indicator')

    expect(getComputedStyle(waterIndicators[1]).opacity).toEqual(
      String(unfilledWaterIndicatorOpacity)
    )
    expect(getComputedStyle(waterIndicators[2]).opacity).toEqual(
      String(unfilledWaterIndicatorOpacity)
    )
  })

  test('background water indicators are not visible', () => {
    render(<StubCropCard isInBackground={true} />)

    const waterIndicators = screen.getAllByAltText('Water card indicator')

    for (const waterIndicator of waterIndicators) {
      const { opacity } = getComputedStyle(waterIndicator)

      expect(opacity).toEqual('0')
    }
  })

  test('extra water indicators are rendered', () => {
    const waterCards = 6

    render(
      <StubCropCard
        cropCardProps={{
          ...stubCropCardProps,
          playedCrop: { ...stubPlayedCrop, waterCards },
        }}
      />
    )

    expect(screen.getAllByAltText('Water card indicator')).toHaveLength(
      waterCards
    )
  })
})
