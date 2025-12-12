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

  // 0, 2, ..., 28: Carrot
  for (let i = 0; i < deck.length / 2; i += 2) {
    deck[i] = instantiate(carrot)
  }

  // 30, 32, ..., 58: Pumpkin
  for (let i = 30; i < deck.length; i += 2) {
    deck[i] = instantiate(pumpkin)
  }

  // 1, 3, ..., 29: Water
  for (let i = 1; i < deck.length / 2; i += 2) {
    deck[i] = instantiate(water)
  }

  // 29, 31, ..., 59: Rain
  // Note: i=29 overwrites Water at 29?
  // deck.length / 2 - 1 = 29.
  // 1, 3... 29 included 29.
  // So yes, Water at 29 is overwritten by Rain.
  for (let i = deck.length / 2 - 1; i < deck.length; i += 2) {
    deck[i] = instantiate(rain)
  }

  // Overwrite some Pumpkins with Shovels, but leave some Pumpkins.
  // Originally it was overwriting ALL Pumpkins (30, 32... 58).
  // Let's start Shovels halfway through the second half.
  // 30...58 has (58-30)/2 + 1 = 15 slots.
  // Let's leave first 8 as Pumpkins (30, 32, 34, 36, 38, 40, 42, 44).
  // Start Shovels at 46.
  for (let i = 46; i < deck.length; i += 2) {
    deck[i] = instantiate(shovel)
  }

  return deck
}
