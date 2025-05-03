import { v4 as uuid } from 'uuid'

import { ICard, Instance } from '../types'

export * from './crops'
export * from './events'
export * from './water'

export const instantiate = <T = ICard>(card: T): T & Instance => {
  return { ...card, instanceId: uuid() }
}
