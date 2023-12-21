import type { Meta, StoryObj } from '@storybook/react'

import { Field } from './Field'

const meta = {
  title: 'Farmhand Shuffle/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const BaseTable: Story = {
  args: {},
}
