/* eslint-disable functional/immutable-data */
import { carrot, instantiate, pumpkin } from '../../game/cards'
import { water } from '../../game/cards/water'
import { DECK_SIZE } from '../../game/config'
import { CardInstance } from '../../game/types'

export const stubDeck = () => {
  const deck = new Array<CardInstance>(DECK_SIZE)

  for (let i = 0; i < 30; i += 2) {
    deck[i] = instantiate(carrot)
  }

  for (let i = 30; i < deck.length; i += 2) {
    deck[i] = instantiate(pumpkin)
  }

  for (let i = 1; i < deck.length; i += 2) {
    deck[i] = instantiate(water)
  }

  return deck
}
