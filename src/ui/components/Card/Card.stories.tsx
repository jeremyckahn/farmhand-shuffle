import type { Meta, StoryObj } from '@storybook/react'
import { spyOn } from '@storybook/test'

import { GameState } from '../../../game/types'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { CardSize } from '../../types'
import { ActorContext } from '../Game/ActorContext'

import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubSelectorState } from '../../../test-utils/stubs/selectorState'
import { updateGame } from '../../../game/reducers/update-game'

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
    cardInstance: stubCarrot,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
  },
}

export const PlayableCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    cardIdx: 0,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
          game: stubGame(),
        })
      )

      return <Story />
    },
  ],
}

export const PlayableWaterCard: Story = {
  args: {
    cardInstance: stubWater,
    cardIdx: 0,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
          game: stubGame(),
        })
      )

      return <Story />
    },
  ],
}

export const WaterableCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
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
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          gameState: GameState.PLAYER_WATERING_CROP,
          game: stubGame(),
        })
      )

      return <Story />
    },
  ],
}

export const HarvestableSessionOwnerCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    cardIdx: 0,
    playerId: stubPlayer1.id,
    isFlipped: false,
    isInField: true,
    size: CardSize.MEDIUM,
    isFocused: true,
    canBeHarvested: true,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
          game: stubGame(),
        })
      )

      return <Story />
    },
  ],
}

export const HarvestableBuffedSessionOwnerCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    cardIdx: 0,
    playerId: stubPlayer1.id,
    isFlipped: false,
    isInField: true,
    size: CardSize.MEDIUM,
    isFocused: true,
    canBeHarvested: true,
  },
  decorators: [
    Story => {
      let game = stubGame()

      game = updateGame(game, {
        buffedCrop: { crop: stubPumpkin, multiplier: 2 },
      })

      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
          game,
        })
      )

      return <Story />
    },
  ],
}

export const HarvestableOpponentCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    cardIdx: 0,
    playerId: stubPlayer2.id,
    isFlipped: false,
    isInField: true,
    size: CardSize.MEDIUM,
    isFocused: true,
    canBeHarvested: true,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          gameState: GameState.WAITING_FOR_PLAYER_TURN_ACTION,
          game: stubGame(),
        })
      )

      return <Story />
    },
  ],
}

export const WaterCard: Story = {
  args: {
    cardInstance: stubWater,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
  },
}

export const SmallCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    cardIdx: 0,
    playerId: '',
    size: CardSize.SMALL,
    isFlipped: false,
  },
}

export const MediumCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
    size: CardSize.MEDIUM,
  },
}

export const LargeCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
    size: CardSize.LARGE,
  },
}
