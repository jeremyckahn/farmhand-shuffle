import type { Meta, StoryObj } from '@storybook/react-vite'

import { StubShellContext } from '../../test-utils/StubShellContext'
import { stubMatch } from '../../../test-utils/stubs/match'

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

const match = stubMatch()

export const BaseTable: Story = {
  args: {
    match,
  },
}
