/* eslint-disable functional/immutable-data */
import { carrot, pumpkin } from '../../game/cards'
import { water } from '../../game/cards/water'
import { DECK_SIZE } from '../../game/config'
import { ICard, ICrop } from '../../game/types'

export const stubDeck = (): ICrop['id'][] => {
  const deck = new Array<ICard>(DECK_SIZE)

  deck.fill(water)

  deck[0] = carrot
  deck[1] = carrot
  deck[2] = pumpkin
  deck[3] = pumpkin

  return deck.map(({ id }) => id)
}
