import Box from '@mui/material/Box'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Mock } from 'vitest'

import { stubDeck } from '../../../test-utils/stubs/deck'
import { stubPlayer } from '../../../test-utils/stubs/players'

import { ActorContext } from './ActorContext'
import { Match } from './Match'

const meta = {
  title: 'Farmhand Shuffle/Match',
  component: Match,
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
      ;(ActorContext.useActorRef as Mock).mockRestore?.()

      return (
        <Box height="100vh" width="100vw">
          <Story />
        </Box>
      )
    },
  ],
} satisfies Meta<typeof Match>

export default meta
type Story = StoryObj<typeof meta>

const deck = stubDeck()

const player1 = stubPlayer({ id: 'player-1', deck })
const player2 = stubPlayer({ id: 'player-2', deck })

export const BaseMatch: Story = {
  args: {
    playerSeeds: [player1, player2],
    userPlayerId: player1.id,
  },
}
