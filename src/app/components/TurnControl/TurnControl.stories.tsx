import type { Meta, StoryObj } from '@storybook/react'
import { spyOn } from '@storybook/test'

import { ActorContext } from '../Game/ActorContext'

import { GameState } from '../../../game/types'
import { stubGame } from '../../../test-utils/stubs/game'

import { carrot } from '../../../game/cards'
import { updatePlayer } from '../../../game/reducers/update-player'
import { stubPlayer1 } from '../../../test-utils/stubs/players'

import { TurnControl } from './TurnControl'

const meta = {
  title: 'Farmhand Shuffle/TurnControl',
  component: TurnControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TurnControl>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTurnControl: Story = {
  args: {},
}

export const WaitingForPlayerSetupActionTurnControl: Story = {
  args: {},
  decorators: [
    Story => {
      const mockState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

      let mockGame = stubGame()
      mockGame = updatePlayer(mockGame, stubPlayer1.id, {
        field: { crops: [{ id: carrot.id, waterCards: 0 }] },
      })
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce([
        mockState,
        mockGame,
      ])

      return <Story />
    },
  ],
}
