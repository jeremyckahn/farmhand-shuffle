import {
  carrot,
  corn,
  garlic,
  instantiate,
  pea,
  potato,
  pumpkin,
  shovel,
  tomato,
} from '../../game/cards'
import { sprinkler } from '../../game/cards/tools/sprinkler'
import { water } from '../../game/cards/water'
import { CardInstance, ICard } from '../../game/types'

const CROPS = [
  [carrot, 5],
  [pumpkin, 5],
  [potato, 4],
  [corn, 4],
  [pea, 4],
  [garlic, 4],
  [tomato, 4],
] as const

const WATER_COUNT = 18
const SPRINKLER_COUNT = 6
const SHOVEL_COUNT = 6

const buildCardGroup = <T extends ICard>(card: T, count: number) =>
  Array.from({ length: count }, () => instantiate(card))

/**
 * Alternates between two groups of cards (e.g. crops and water) so that
 * every other card is drawn from each group. Once the shorter group is
 * exhausted, the remaining cards from the longer group are appended.
 *
 * Several Rules tests mock `randomNumber` to be deterministic and draw
 * from the front of the deck, so this alternation (rather than a random
 * or clustered arrangement) is what guarantees a healthy mix of card
 * types shows up early in the deck.
 */
const alternate = (a: CardInstance[], b: CardInstance[]): CardInstance[] => {
  const pairedCount = Math.min(a.length, b.length)
  const paired = Array.from({ length: pairedCount }, (_, i) => [
    a[i] as CardInstance,
    b[i] as CardInstance,
  ]).flat()

  return [...paired, ...a.slice(pairedCount), ...b.slice(pairedCount)]
}

/**
 * Creates a stub deck of cards for testing purposes. The deck is populated
 * with a mixture of crops, water, event, and tool cards.
 *
 * @returns A deck of cards.
 */
export const stubDeck = () => {
  const crops = CROPS.flatMap(([card, count]) => buildCardGroup(card, count))
  const waterCards = buildCardGroup(water, WATER_COUNT)
  const sprinklers = buildCardGroup(sprinkler, SPRINKLER_COUNT)
  const shovels = buildCardGroup(shovel, SHOVEL_COUNT)

  const deck: CardInstance[] = [
    ...alternate(crops, waterCards),
    ...alternate(sprinklers, shovels),
  ]

  return deck
}
