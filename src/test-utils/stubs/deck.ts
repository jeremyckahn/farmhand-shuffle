import { carrot } from '../../game/cards/crops/carrot/carrot'
import { pumpkin } from '../../game/cards/crops/pumpkin/pumpkin'
import { water } from '../../game/cards/water/water'
import { deckSize } from '../../game/config'
import { ICrop } from '../../game/types'

export const stubDeck = (): ICrop['id'][] => {
  const deck = new Array(deckSize)

  deck.fill(water)

  deck[0] = carrot
  deck[1] = carrot
  deck[2] = pumpkin
  deck[3] = pumpkin

  return deck.map(({ id }) => id)
}
