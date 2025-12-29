import type { Meta, StoryObj } from '@storybook/react-vite'

import { DeckBuilder } from './DeckBuilder'

const meta: Meta<typeof DeckBuilder> = {
  title: 'Farmhand Shuffle/DeckBuilder',
  component: DeckBuilder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DeckBuilder>

export const Default: Story = {
  args: {
    onDone: deck => {
      console.log('Deck selection complete:', deck)
      const selectedCards = Array.from(deck.values()).reduce((a, b) => a + b, 0)

      alert(
        `Deck selected with ${selectedCards} cards. Check console for details.`
      )

      return Promise.resolve()
    },
  },
}

export const Loading: Story = {
  args: {
    onDone: async () => new Promise(resolve => setTimeout(resolve, 3000)),
    isLoading: true,
  },
}
