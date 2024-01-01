import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'

import { Hand } from './Hand'

const meta = {
  title: 'Farmhand Shuffle/Hand',
  component: Hand,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Hand>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()

export const SelfHand: Story = {
  args: {
    playerId: game.sessionOwnerPlayerId,
    game,
  },
}
