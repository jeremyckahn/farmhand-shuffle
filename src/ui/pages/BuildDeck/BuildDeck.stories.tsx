import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'
import { spyOn } from 'storybook/test'

import { storage } from '../../../services/StorageService'
import { NotificationProvider } from '../../context/NotificationContext'

import { BuildDeck } from './BuildDeck'

const meta: Meta<typeof BuildDeck> = {
  title: 'Pages/BuildDeck',
  component: BuildDeck,
  decorators: [
    Story => (
      <NotificationProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </NotificationProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof BuildDeck>

export const Default: Story = {
  decorators: [
    Story => {
      spyOn(storage, 'saveDeck').mockResolvedValue(undefined)

      return <Story />
    },
  ],
}

export const SaveError: Story = {
  decorators: [
    Story => {
      spyOn(storage, 'saveDeck').mockRejectedValue(
        new Error('Failed to save deck')
      )

      return <Story />
    },
  ],
}
