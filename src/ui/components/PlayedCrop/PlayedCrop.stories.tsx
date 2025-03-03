import type { Meta, StoryObj } from '@storybook/react'

import { stubCarrot } from '../../../test-utils/stubs/cards'

import { PlayedCrop } from './PlayedCrop'

const meta = {
  title: 'Farmhand Shuffle/PlayedCrop',
  component: PlayedCrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
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
        wasWateredTuringTurn: false,
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
        wasWateredTuringTurn: false,
        waterCards: 5,
      },
    },
    isInBackground: false,
  },
}
