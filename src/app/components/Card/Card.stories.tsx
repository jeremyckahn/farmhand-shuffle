import type { Meta, StoryObj } from '@storybook/react'
import { fn, spyOn } from '@storybook/test'

import { carrot, pumpkin, water } from '../../../game/cards'
import { CardSize } from '../../types'
import { ActorContext } from '../Game/ActorContext'

import { Card, CardFocusMode } from './Card'

const meta = {
  title: 'Farmhand Shuffle/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: Story => {
    // @ts-expect-error Irrelevant useActorRef return properties are omitted
    spyOn(ActorContext, 'useActorRef').mockReturnValue({
      send: fn().mockImplementation(console.log),
    })

    return (
      <ActorContext.Provider>
        <Story />
      </ActorContext.Provider>
    )
  },
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
    playerId: '',
    isFlipped: false,
    size: CardSize.MEDIUM,
    cardFocusMode: CardFocusMode.CROP_PLACEMENT,
  },
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
