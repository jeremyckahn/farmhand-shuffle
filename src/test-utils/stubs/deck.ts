/* eslint-disable functional/immutable-data */
import { carrot, instantiate, pumpkin, rain, shovel } from '../../game/cards'
import { water } from '../../game/cards/water'
import { DECK_SIZE } from '../../game/config'
import { CardInstance } from '../../game/types'

/**
 * Creates a stub deck of cards for testing purposes. The deck is populated
 * with a mixture of crops, water, event, and tool cards.
 *
 * @returns A deck of cards.
 */
export const stubDeck = () => {
  const deck = new Array<CardInstance>(DECK_SIZE)

  for (let i = 0; i < deck.length / 2; i += 2) {
    deck[i] = instantiate(carrot)
  }

  for (let i = 30; i < deck.length; i += 2) {
    deck[i] = instantiate(pumpkin)
  }

  for (let i = 1; i < deck.length / 2; i += 2) {
    deck[i] = instantiate(water)
  }

  for (let i = deck.length / 2 - 1; i < deck.length; i += 2) {
    deck[i] = instantiate(rain)
  }

  for (let i = deck.length / 2; i < deck.length; i += 2) {
    deck[i] = instantiate(shovel)
  }

  return deck
}
