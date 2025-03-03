/* eslint-disable functional/immutable-data */
import { carrot, instantiate, pumpkin } from '../../game/cards'
import { water } from '../../game/cards/water'
import { DECK_SIZE } from '../../game/config'
import { CardInstance } from '../../game/types'

export const stubDeck = () => {
  const deck = new Array<CardInstance>(DECK_SIZE)

  for (let i = 0; i < deck.length; i++) {
    deck[i] = instantiate(water)
  }

  deck[0] = instantiate(carrot)
  deck[1] = instantiate(carrot)
  deck[2] = instantiate(pumpkin)
  deck[3] = instantiate(pumpkin)

  return deck
}
