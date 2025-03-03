import Box from '@mui/material/Box'
import type { Meta, StoryObj } from '@storybook/react'
import { Mock } from 'vitest'

import { carrot, instantiate, pumpkin } from '../../../game/cards'
import { stubDeck } from '../../../test-utils/stubs/deck'
import { stubPlayer } from '../../../test-utils/stubs/players'

import { ActorContext } from './ActorContext'
import { Game } from './Game'

const meta = {
  title: 'Farmhand Shuffle/Game',
  component: Game,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {
    sx: {
      height: 1,
      width: 1,
    },
  },
  decorators: [
    Story => {
      ;(ActorContext.useActorRef as Mock).mockRestore()

      return (
        <Box height="100vh" width="100vw">
          <Story />
        </Box>
      )
    },
  ],
} satisfies Meta<typeof Game>

export default meta
type Story = StoryObj<typeof meta>

const deck = stubDeck()

// TODO: Move this setup to stubDeck
for (let i = 0; i < 15; i++) {
  // eslint-disable-next-line functional/immutable-data
  deck[i] = instantiate(carrot)
}

for (let i = 15; i < 30; i++) {
  // eslint-disable-next-line functional/immutable-data
  deck[i] = instantiate(pumpkin)
}

const player1 = stubPlayer({ id: 'player-1', deck })
const player2 = stubPlayer({ id: 'player-2', deck })

export const BaseGame: Story = {
  args: {
    playerSeeds: [player1, player2],
    userPlayerId: player1.id,
  },
}
