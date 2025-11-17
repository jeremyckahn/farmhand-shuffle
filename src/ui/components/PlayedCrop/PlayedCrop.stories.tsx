import type { Meta, StoryObj } from '@storybook/react-vite'

import { stubCarrot } from '../../../test-utils/stubs/cards'
import { StubShellContext } from '../../test-utils/StubShellContext'

import { PlayedCrop } from './PlayedCrop'

const meta = {
  title: 'Farmhand Shuffle/PlayedCrop',
  component: PlayedCrop,
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
} satisfies Meta<typeof PlayedCrop>

export default meta
type Story = StoryObj<typeof meta>

export const PlayedCropCard: Story = {
  args: {
    cropCardProps: {
      cardInstance: stubCarrot,
      cardIdx: 0,
      playerId: '',
      playedCrop: {
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
    cropCardProps: {
      cardInstance: stubCarrot,
      cardIdx: 0,
      playerId: '',
      playedCrop: {
        instance: stubCarrot,
        wasWateredDuringTurn: false,
        waterCards: 5,
      },
    },
    isInBackground: false,
  },
}
