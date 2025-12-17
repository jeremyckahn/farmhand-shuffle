import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { stubMatch } from '../../../test-utils/stubs/match'
import { PlayerNotFoundError } from '../../../game/services/Rules/errors'

import { Deck, defaultDeckCardSize, defaultDeckThicknessPx } from './Deck'

const meta = {
  title: 'Farmhand Shuffle/Deck',
  component: Deck,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cardSize: {
      control: { type: 'number' },
      description: 'The card size of the deck',
    },
    deckThicknessPx: {
      control: { type: 'number' },
      description: 'The thickness of the deck in pixels',
    },
  },
} satisfies Meta<typeof Deck>

export default meta
type Story = StoryObj<typeof meta>

const match = stubMatch()
const opponentPlayerId = Object.keys(match.table.players)[1]

if (!opponentPlayerId) {
  throw new PlayerNotFoundError('opponentPlayerId')
}

export const SelfDeck: Story = {
  args: {
    playerId: match.sessionOwnerPlayerId,
    match,
    cardSize: defaultDeckCardSize,
    deckThicknessPx: defaultDeckThicknessPx,
  },
  decorators: [
    (Story, ctx) => {
      const [isTopCardSelected, setIsTopCardSelected] = useState(false)

      const handleClickTopCard = () => {
        setIsTopCardSelected(!isTopCardSelected)
      }

      return (
        <Story
          args={{
            ...ctx.args,
            handleClickTopCard,
            isTopCardSelected,
          }}
        />
      )
    },
  ],
}

export const OpponentDeck: Story = {
  args: {
    playerId: opponentPlayerId,
    match,
    cardSize: defaultDeckCardSize,
    deckThicknessPx: defaultDeckThicknessPx,
  },
}
