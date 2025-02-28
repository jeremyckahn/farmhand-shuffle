import type { Meta, StoryObj } from '@storybook/react'
import { spyOn } from '@storybook/test'

import { carrot, pumpkin, water } from '../../../game/cards'
import { GameState } from '../../../game/types'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { CardSize } from '../../types'
import { ActorContext } from '../Game/ActorContext'

import { Card } from './Card'

const meta = {
  title: 'Farmhand Shuffle/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CropCard: Story = {
  args: {
    card: carrot,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
  },
}

export const PlayableCropCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce({
        gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
        game: stubGame(),
      })

      return <Story />
    },
  ],
}

export const PlayableWaterCard: Story = {
  args: {
    card: water,
    cardIdx: 0,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce({
        gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
        game: stubGame(),
      })

      return <Story />
    },
  ],
}

export const WaterableCropCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: stubPlayer1.id,
    isFlipped: false,
    isInField: true,
    size: CardSize.MEDIUM,
    isFocused: true,
    canBeWatered: true,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce({
        gameState: GameState.PLAYER_WATERING_CROP,
        game: stubGame(),
      })

      return <Story />
    },
  ],
}

export const WaterCard: Story = {
  args: {
    card: water,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
  },
}

export const SmallCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: '',
    size: CardSize.SMALL,
    isFlipped: false,
  },
}

export const MediumCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
    size: CardSize.MEDIUM,
  },
}

export const LargeCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
    size: CardSize.LARGE,
  },
}
