import type { Meta, StoryObj } from '@storybook/react-vite'

import { stubCarrot } from '../../../test-utils/stubs/cards'
import { StubShellContext } from '../../test-utils/StubShellContext'

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
      cardIdx: 0,
      playerId: '',
      playedCard: {
        instance: stubCarrot,
        wasWateredDuringTurn: false,
        waterCards: 1,
      },
    },
    isInBackground: false,
  },
}

export const PlayedCropCardWithExtraWater: Story = {
  args: {
    cardProps: {
      cardInstance: stubCarrot,
      cardIdx: 0,
      playerId: '',
      playedCard: {
        instance: stubCarrot,
        wasWateredDuringTurn: false,
        waterCards: 5,
      },
    },
    isInBackground: false,
  },
}
