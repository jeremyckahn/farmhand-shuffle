import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'

import { Table } from './Table'

const meta = {
  title: 'Farmhand Shuffle/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()

export const BaseTable: Story = {
  args: {
    game,
  },
}
