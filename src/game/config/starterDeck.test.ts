import { DECK_SIZE } from '../config'

import { starterDeck } from './starterDeck'

describe('starterDeck', () => {
  test('builds a full deck of freshly-instantiated cards', () => {
    const deck = starterDeck()

    expect(deck).toHaveLength(DECK_SIZE)
  })

  test('two calls produce disjoint instanceIds', () => {
    // NOTE: Both players in a symmetric match call starterDeck() separately,
    // so their CardInstances must never collide.
    const deckA = starterDeck()
    const deckB = starterDeck()

    const instanceIdsA = new Set(deckA.map(card => card.instanceId))
    const instanceIdsB = new Set(deckB.map(card => card.instanceId))

    expect(instanceIdsA.size).toBe(deckA.length)
    expect(instanceIdsB.size).toBe(deckB.length)

    const intersection = [...instanceIdsA].filter(id => instanceIdsB.has(id))

    expect(intersection).toHaveLength(0)
  })
})
