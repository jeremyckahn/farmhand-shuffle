import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'

import { DiscardPile } from './DiscardPile'

const meta = {
  title: 'Farmhand Shuffle/Discard Pile',
  component: DiscardPile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DiscardPile>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()

export const SelfDiscardPile: Story = {
  args: {
    playerId: game.sessionOwnerPlayerId,
    game,
  },
}
