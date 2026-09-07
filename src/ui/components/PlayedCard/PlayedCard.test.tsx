import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { IPlayedCrop } from '../../../game/types'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { CardSize } from '../../types'
import { ActorContext } from '../Match/ActorContext'

import {
  PlayedCard,
  PlayedCropProps,
  unfilledWaterIndicatorOpacity,
} from './PlayedCard'

const stubCardInstance = stubCarrot
const stubWaterCards = 1
const stubPlayedCrop: IPlayedCrop = {
  instance: stubCardInstance,
  wasWateredDuringTurn: false,
  waterCards: stubWaterCards,
}
const stubCropCardProps: PlayedCropProps['cardProps'] = {
  cardInstance: stubCardInstance,
  playerId: '',
}

const StubCropCard = (overrides: Partial<PlayedCropProps> = {}) => (
  <StubShellContext>
    <ActorContext.Provider>
      <PlayedCard
        cardProps={stubCropCardProps}
        isInBackground={false}
        playedCard={stubPlayedCrop}
        {...overrides}
      />
    </ActorContext.Provider>
  </StubShellContext>
)

describe('PlayedCard', () => {
  test('renders played crop card', () => {
    render(<StubCropCard />)

    expect(screen.findByText(stubCardInstance.name))
  })

  test('renders water indicators', () => {
    render(<StubCropCard />)

    expect(screen.getAllByAltText('Water card indicator')).toHaveLength(
      stubCardInstance.waterToMature
    )
  })

  test('filled foreground water indicators are fully opaque', () => {
    render(<StubCropCard />)

    const waterIndicators = screen.getAllByAltText('Water card indicator')

    expect(getComputedStyle(waterIndicators[0]!).opacity).toEqual('1')
  })

  test('unfilled foreground water card icons are partially opaque', () => {
    render(<StubCropCard />)

    const waterIndicators = screen.getAllByAltText('Water card indicator')

    expect(getComputedStyle(waterIndicators[1]!).opacity).toEqual(
      String(unfilledWaterIndicatorOpacity)
    )
    expect(getComputedStyle(waterIndicators[2]!).opacity).toEqual(
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
        cardProps={{
          ...stubCropCardProps,
        }}
        playedCard={{ ...stubPlayedCrop, waterCards }}
      />
    )

    expect(screen.getAllByAltText('Water card indicator')).toHaveLength(
      waterCards
    )
  })

  describe('compact size', () => {
    const stubCompactCardProps: PlayedCropProps['cardProps'] = {
      ...stubCropCardProps,
      size: CardSize.COMPACT,
    }

    test('renders one notch per water unit instead of icons', () => {
      render(<StubCropCard cardProps={stubCompactCardProps} />)

      expect(screen.queryAllByAltText('Water card indicator')).toHaveLength(0)

      const notchRow = screen.getByLabelText('Water card indicator')

      expect(notchRow.children).toHaveLength(stubCardInstance.waterToMature)
    })

    test('filled notches are fully opaque, unfilled notches are dimmed', () => {
      render(<StubCropCard cardProps={stubCompactCardProps} />)

      const notches = Array.from(
        screen.getByLabelText('Water card indicator').children
      )

      expect(getComputedStyle(notches[0]!).opacity).toEqual('1')
      expect(getComputedStyle(notches[1]!).opacity).toEqual(
        String(unfilledWaterIndicatorOpacity)
      )
    })

    test('background notches are not visible', () => {
      render(
        <StubCropCard cardProps={stubCompactCardProps} isInBackground={true} />
      )

      const notches = Array.from(
        screen.getByLabelText('Water card indicator').children
      )

      for (const notch of notches) {
        expect(getComputedStyle(notch).opacity).toEqual('0')
      }
    })
  })
})
