import type { Meta, StoryObj } from '@storybook/react-vite'

import { DeckBuilder } from './DeckBuilder'

const meta: Meta<typeof DeckBuilder> = {
  component: DeckBuilder,
}

export default meta

type Story = StoryObj<typeof DeckBuilder>

export const Default: Story = {
  args: {
    onDone: deck => {
      console.log('Deck selection complete:', deck)
      alert(
        `Deck selected with ${Array.from(deck.values()).reduce(
          (a, b) => a + b,
          0
        )} cards. Check console for details.`
      )
    },
  },
}
