import type { Meta, StoryObj } from '@storybook/react-vite'

import { MatchPage } from './MatchPage'

const meta: Meta<typeof MatchPage> = {
  title: 'Pages/MatchPage',
  component: MatchPage,
}

export default meta
type Story = StoryObj<typeof MatchPage>

export const Default: Story = {}
