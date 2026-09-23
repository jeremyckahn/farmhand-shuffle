import type { Meta, StoryObj } from '@storybook/react-vite'
import { spyOn } from 'storybook/test'

import { MatchState } from '../../../game/types'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { stubSelectorState } from '../../../test-utils/stubs/selectorState'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { CardSize } from '../../types'
import { ActorContext } from '../Match/ActorContext'

import { PlayedCard } from './PlayedCard'

const meta = {
  title: 'Farmhand Shuffle/PlayedCard',
  component: PlayedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => {
      return (
        <StubShellContext>
          <Story />
        </StubShellContext>
      )
    },
  ],
} satisfies Meta<typeof PlayedCard>

export default meta
type Story = StoryObj<typeof meta>

export const PlayedCropCard: Story = {
  args: {
    cardProps: {
      cardInstance: stubCarrot,
      playerId: '',
    },
    playedCard: {
      instance: stubCarrot,
      wasWateredDuringTurn: false,
      waterCards: 1,
    },
    isInBackground: false,
  },
}

export const PlayedCropCardWithExtraWater: Story = {
  args: {
    cardProps: {
      cardInstance: stubCarrot,
      playerId: '',
    },
    playedCard: {
      instance: stubCarrot,
      wasWateredDuringTurn: false,
      waterCards: 5,
    },
    isInBackground: false,
  },
}

export const PlayedCropCardCompact: Story = {
  args: {
    cardProps: {
      cardInstance: stubCarrot,
      playerId: '',
      size: CardSize.COMPACT,
    },
    playedCard: {
      instance: stubCarrot,
      wasWateredDuringTurn: false,
      waterCards: 1,
    },
    isInBackground: false,
  },
}

export const PlayedCropCardCompactStackedActionButton: Story = {
  args: {
    cardProps: {
      cardInstance: stubCarrot,
      playerId: stubPlayer1.id,
      size: CardSize.COMPACT,
      isFocused: true,
      isInField: true,
      canBeWatered: true,
      cropIdxInFieldToWater: 0,
      // NOTE: Mirrors what Field.tsx passes for a focused card on a narrow
      // viewport -- this is exactly the scenario the water-indicator
      // z-index fix (see the position/zIndex comments in PlayedCard.tsx)
      // exists for: the action button renders below/overflowing the card,
      // right where the water indicator notches sit.
      stackActionButtonsBelowCard: true,
    },
    playedCard: {
      instance: stubCarrot,
      wasWateredDuringTurn: false,
      waterCards: 1,
    },
    isInBackground: false,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.PLAYER_WATERING_CROP,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}
