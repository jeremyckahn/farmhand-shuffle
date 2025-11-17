import type { Meta, StoryObj } from '@storybook/react-vite'

import { StubShellContext } from '../../test-utils/StubShellContext'
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
  decorators: [
    Story => {
      return (
        <StubShellContext>
          <Story />
        </StubShellContext>
      )
    },
  ],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()

export const BaseTable: Story = {
  args: {
    game,
  },
}
