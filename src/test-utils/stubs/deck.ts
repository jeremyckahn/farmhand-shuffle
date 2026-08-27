import {
  carrot,
  corn,
  garlic,
  instantiate,
  pea,
  potato,
  pumpkin,
  rain,
  shovel,
  tomato,
} from '../../game/cards'
import { sprinkler } from '../../game/cards/tools/sprinkler'
import { water } from '../../game/cards/water'
import { CardInstance, ICard } from '../../game/types'
import { DECK_SIZE, MAX_INSTANCES_PER_CARD } from '../../game/config'

const CROPS = [
  [carrot, MAX_INSTANCES_PER_CARD],
  [pumpkin, MAX_INSTANCES_PER_CARD],
  [potato, MAX_INSTANCES_PER_CARD],
  [corn, MAX_INSTANCES_PER_CARD],
  [pea, MAX_INSTANCES_PER_CARD],
  [garlic, MAX_INSTANCES_PER_CARD],
  [tomato, MAX_INSTANCES_PER_CARD],
] as const

const RAIN_COUNT = MAX_INSTANCES_PER_CARD
const SPRINKLER_COUNT = MAX_INSTANCES_PER_CARD
const SHOVEL_COUNT = MAX_INSTANCES_PER_CARD

// 7 crops + rain + sprinkler + shovel
const NON_WATER_CARD_TYPE_COUNT = CROPS.length + 3

// DECK_SIZE - NON_WATER_CARD_TYPE_COUNT * MAX_INSTANCES_PER_CARD = 60 - 10 * 4 = 20
const WATER_COUNT =
  DECK_SIZE - NON_WATER_CARD_TYPE_COUNT * MAX_INSTANCES_PER_CARD

if (WATER_COUNT <= 0) {
  console.warn(
    `stubDeck: WATER_COUNT computed as ${WATER_COUNT}. DECK_SIZE (${DECK_SIZE}) may be too small for NON_WATER_CARD_TYPE_COUNT (${NON_WATER_CARD_TYPE_COUNT}) at MAX_INSTANCES_PER_CARD (${MAX_INSTANCES_PER_CARD}) copies each.`
  )
}

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
  const rainCards = buildCardGroup(rain, RAIN_COUNT)
  const sprinklers = buildCardGroup(sprinkler, SPRINKLER_COUNT)
  const shovels = buildCardGroup(shovel, SHOVEL_COUNT)

  const deck: CardInstance[] = [
    ...alternate(crops, waterCards),
    ...alternate(alternate(rainCards, sprinklers), shovels),
  ]

  return deck
}
