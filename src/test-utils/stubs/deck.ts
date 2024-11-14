/* eslint-disable functional/immutable-data */
import { v4 as uuid } from 'uuid'

import { carrot, pumpkin } from '../../game/cards'
import { water } from '../../game/cards/water'
import { DECK_SIZE } from '../../game/config'
import { ICard } from '../../game/types'

export const stubDeck = (): ICard[] => {
  const deck = new Array<ICard>(DECK_SIZE)
    .fill(water)
    .reduce((acc: ICard[], card) => {
      return [...acc, { ...card, instanceId: uuid() }]
    }, [])

  deck[0] = { ...carrot, instanceId: uuid() }
  deck[1] = { ...carrot, instanceId: uuid() }
  deck[2] = { ...pumpkin, instanceId: uuid() }
  deck[3] = { ...pumpkin, instanceId: uuid() }

  return deck
}
