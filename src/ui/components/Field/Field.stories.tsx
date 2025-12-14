import type { Meta, StoryObj } from '@storybook/react-vite'

import { carrot, instantiate, pumpkin } from '../../../game/cards'
import { updateField } from '../../../game/reducers/update-field'
import { factory } from '../../../game/services/Factory'
import { stubMatch } from '../../../test-utils/stubs/match'
import { StubShellContext } from '../../test-utils/StubShellContext'

import { Field } from './Field'

const meta = {
  title: 'Farmhand Shuffle/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => {
      return (
        <StubShellContext>
          <Story />
        </StubShellContext>
      )
    },
  ],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

let match = stubMatch()

const selfPlayerId = match.sessionOwnerPlayerId
const opponentPlayerId = Object.keys(match.table.players)[1]

if (!opponentPlayerId) {
  throw new Error('Opponent player not found')
}

match = updateField(match, selfPlayerId, {
  crops: [
    { ...factory.buildPlayedCrop(instantiate(carrot)), waterCards: 1 },
    { ...factory.buildPlayedCrop(instantiate(pumpkin)), waterCards: 3 },
    { ...factory.buildPlayedCrop(instantiate(pumpkin)), waterCards: 12 },
  ],
})

match = updateField(match, opponentPlayerId, {
  crops: [
    { ...factory.buildPlayedCrop(instantiate(carrot)), waterCards: 1 },
    { ...factory.buildPlayedCrop(instantiate(pumpkin)), waterCards: 3 },
    { ...factory.buildPlayedCrop(instantiate(pumpkin)), waterCards: 12 },
  ],
})

export const SelfField: Story = {
  args: {
    playerId: match.sessionOwnerPlayerId,
    match,
  },
}

export const OpponentField: Story = {
  args: {
    playerId: opponentPlayerId,
    match,
  },
}
