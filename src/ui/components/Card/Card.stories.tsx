import type { Meta, StoryObj } from '@storybook/react-vite'
import { spyOn } from 'storybook/test'

import { MatchState } from '../../../game/types'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { CardSize } from '../../types'
import { ActorContext } from '../Match/ActorContext'

import {
  stubCarrot,
  stubPumpkin,
  stubRain,
  stubShovel,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubSelectorState } from '../../../test-utils/stubs/selectorState'
import { updateMatch } from '../../../game/reducers/update-match'

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
    playerId: '',
    isFlipped: false,
  },
}

export const PlayableCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
    cardIdxInHand: 0,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}

export const PlayableWaterCard: Story = {
  args: {
    cardInstance: stubWater,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
    cardIdxInHand: 0,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}

export const PlayableEventCard: Story = {
  args: {
    cardInstance: stubRain,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
    cardIdxInHand: 0,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}

export const PlayableToolCard: Story = {
  args: {
    cardInstance: stubShovel,
    playerId: stubPlayer1.id,
    isFlipped: false,
    size: CardSize.MEDIUM,
    isFocused: true,
    cardIdxInHand: 0,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}

export const WaterableCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    playerId: stubPlayer1.id,
    isFlipped: false,
    isInField: true,
    size: CardSize.MEDIUM,
    isFocused: true,
    canBeWatered: true,
    cropIdxInFieldToWater: 0,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.PLAYER_WATERING_CROP,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}

export const HarvestableSessionOwnerCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    playerId: stubPlayer1.id,
    isFlipped: false,
    isInField: true,
    size: CardSize.MEDIUM,
    isFocused: true,
    canBeHarvested: true,
    cropIdxInFieldToHarvest: 0,
  },
  decorators: [
    Story => {
      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}

export const HarvestableBuffedSessionOwnerCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    playerId: stubPlayer1.id,
    isFlipped: false,
    isInField: true,
    size: CardSize.MEDIUM,
    isFocused: true,
    canBeHarvested: true,
    cropIdxInFieldToHarvest: 0,
  },
  decorators: [
    Story => {
      let match = stubMatch()

      match = updateMatch(match, {
        buffedCrop: { crop: stubPumpkin, multiplier: 2 },
      })

      spyOn(ActorContext, 'useSelector').mockReturnValueOnce(
        stubSelectorState({
          matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          match,
        })
      )

      return <Story />
    },
  ],
}

export const HarvestableOpponentCropCard: Story = {
  args: {
    cardInstance: stubPumpkin,
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
          matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          match: stubMatch(),
        })
      )

      return <Story />
    },
  ],
}

export const WaterCard: Story = {
  args: {
    cardInstance: stubWater,
    playerId: '',
    isFlipped: false,
  },
}

export const SmallRainCard: Story = {
  args: {
    cardInstance: stubRain,
    playerId: '',
    size: CardSize.SMALL,
    isFlipped: false,
  },
}

export const RainCard: Story = {
  args: {
    cardInstance: stubRain,
    playerId: '',
    isFlipped: false,
  },
}

export const SmallShovelCard: Story = {
  args: {
    cardInstance: stubShovel,
    playerId: '',
    size: CardSize.SMALL,
    isFlipped: false,
  },
}

export const ShovelCard: Story = {
  args: {
    cardInstance: stubShovel,
    playerId: '',
    isFlipped: false,
  },
}

export const SmallCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    playerId: '',
    size: CardSize.SMALL,
    isFlipped: false,
  },
}

export const MediumCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    playerId: '',
    isFlipped: false,
    size: CardSize.MEDIUM,
  },
}

export const LargeCard: Story = {
  args: {
    cardInstance: stubPumpkin,
    playerId: '',
    isFlipped: false,
    size: CardSize.LARGE,
  },
}
