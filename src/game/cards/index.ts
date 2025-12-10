import { v4 as uuid } from 'uuid'

import { ICard, Instance } from '../types'

export * as cropCards from './crops'
export * as eventCards from './events'
export * as toolCards from './tools'
export * as waterCards from './water'

export * from './crops'
export * from './events'
export * from './tools'
export * from './water'

export const instantiate = <T = ICard>(card: T): T & Instance => {
  return { ...card, instanceId: uuid() }
}
