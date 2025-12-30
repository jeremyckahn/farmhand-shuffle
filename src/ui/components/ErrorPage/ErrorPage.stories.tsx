import type { Meta, StoryObj } from '@storybook/react-vite'

import { ErrorPage } from './index'

const meta: Meta<typeof ErrorPage> = {
  title: 'Components/ErrorPage',
  component: ErrorPage,
}

export default meta
type Story = StoryObj<typeof ErrorPage>

export const Default: Story = {}
