import type { Meta, StoryObj } from '@storybook/react-vite'
import { spyOn } from 'storybook/test'

import { updatePlayer } from '../../../game/reducers/update-player'
import { MatchState } from '../../../game/types'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { ActorContext } from '../Match/ActorContext'

import { TurnControl } from './TurnControl'

const meta = {
  title: 'Farmhand Shuffle/TurnControl',
  component: TurnControl,
  parameters: {
    layout: 'centered',
  },
  args: {
    match: stubMatch(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TurnControl>

export default meta
type Story = StoryObj<typeof meta>

export const WaitingForPlayerSetupActionTurnControl: Story = {
  args: {},
  decorators: [
    Story => {
      const matchState = MatchState.WAITING_FOR_PLAYER_SETUP_ACTION

      let match = stubMatch()
      match = updatePlayer(match, stubPlayer1.id, {
        field: {
          crops: [
            {
              instance: stubCarrot,
              wasWateredDuringTurn: false,
              waterCards: 0,
            },
          ],
        },
      })

      spyOn(ActorContext, 'useSelector').mockReturnValueOnce({
        matchState,
        match,
      })

      return <Story args={{ match }} />
    },
  ],
}
