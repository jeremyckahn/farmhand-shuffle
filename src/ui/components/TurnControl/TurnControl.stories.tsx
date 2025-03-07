import type { Meta, StoryObj } from '@storybook/react'
import { spyOn } from '@storybook/test'

import { updatePlayer } from '../../../game/reducers/update-player'
import { GameState } from '../../../game/types'
import { stubCarrot } from '../../../test-utils/stubs/cards'
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
      const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

      let game = stubGame()
      game = updatePlayer(game, stubPlayer1.id, {
        field: {
          crops: [
            {
              instance: stubCarrot,
              wasWateredTuringTurn: false,
              waterCards: 0,
            },
          ],
        },
      })

      spyOn(ActorContext, 'useSelector').mockReturnValueOnce({
        gameState,
        game,
      })

      return <Story args={{ game }} />
    },
  ],
}
