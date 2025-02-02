import Box from '@mui/material/Box'
import type { Meta, StoryObj } from '@storybook/react'
import { Mock } from 'vitest'

import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

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

export const BaseGame: Story = {
  args: {
    playerSeeds: [stubPlayer1, stubPlayer2],
    userPlayerId: stubPlayer1.id,
  },
}
