import { v4 as uuid } from 'uuid'

import { pricing } from '../services/Pricing'
import { CardType, ICard, ICrop, Instance } from '../types'

import * as cropCards from './crops'
import * as eventCards from './events'
import * as toolCards from './tools'
import * as waterCards from './water'

export * from './crops'
export * from './events'
export * from './water'
export * from './tools'

export const instantiate = <T = ICard>(card: T): T & Instance => {
  return { ...card, instanceId: uuid() }
}

export const sortedCards = (() => {
  const crops = Object.values(cropCards).filter(
    (c): c is ICrop => (c as ICard).type === CardType.CROP
  )

  const sortedCrops = [...crops].sort(
    (a, b) => pricing.getCropBaseValue(a) - pricing.getCropBaseValue(b)
  )

  const water = Object.values(waterCards)
  const tools = Object.values(toolCards)
  const events = Object.values(eventCards)

  return [...sortedCrops, ...water, ...tools, ...events]
})()
