import type { Meta, StoryObj } from '@storybook/react'
import { spyOn } from '@storybook/test'

import { carrot } from '../../../game/cards'
import { updatePlayer } from '../../../game/reducers/update-player'
import { GameState } from '../../../game/types'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { ActorContext } from '../Game/ActorContext'

import { TurnControl } from './TurnControl'

const meta = {
  title: 'Farmhand Shuffle/TurnControl',
  component: TurnControl,
  parameters: {
    layout: 'centered',
  },
  args: {
    game: stubGame(),
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
      const state = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

      let game = stubGame()
      game = updatePlayer(game, stubPlayer1.id, {
        field: { crops: [{ id: carrot.id, waterCards: 0 }] },
      })

      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(state)

      return <Story args={{ game }} />
    },
  ],
}
