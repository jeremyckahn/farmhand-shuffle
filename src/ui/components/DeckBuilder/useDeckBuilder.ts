import { useCallback, useMemo, useState } from 'react'

import {
  cropCards,
  eventCards,
  toolCards,
  waterCards,
} from '../../../game/cards'
import { DECK_SIZE } from '../../../game/config'
import { pricing } from '../../../game/services/Pricing'
import { ICard } from '../../../game/types'

interface UseDeckBuilderProps {
  onDone: (deck: Map<ICard, number>) => void
}

export const sortedCards = (() => {
  const sortedCrops = Object.values(cropCards).sort(
    (a, b) => pricing.getCropBaseValue(a) - pricing.getCropBaseValue(b)
  )

  const sortByCardNameAscending = (a: ICard, b: ICard): number =>
    a.name.localeCompare(b.name)

  const water = Object.values(waterCards).sort(sortByCardNameAscending)
  const tools = Object.values(toolCards).sort(sortByCardNameAscending)
  const events = Object.values(eventCards).sort(sortByCardNameAscending)

  return [...sortedCrops, ...water, ...tools, ...events]
})()

export const useDeckBuilder = ({ onDone }: UseDeckBuilderProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const totalCards = useMemo(
    () =>
      Object.values(quantities).reduce((acc, quantity) => acc + quantity, 0),
    [quantities]
  )

  const isDeckValid = totalCards === DECK_SIZE

  const handleQuantityChange = useCallback(
    (cardId: string) => (action: React.SetStateAction<number>) => {
      setQuantities(prev => {
        const current = prev[cardId] || 0
        const next = typeof action === 'function' ? action(current) : action

        return { ...prev, [cardId]: next }
      })
    },
    []
  )

  const handleDone = useCallback(() => {
    if (!isDeckValid) {
      return
    }

    const deckEntries = sortedCards.reduce<[ICard, number][]>((acc, card) => {
      const quantity = quantities[card.id] || 0

      if (quantity > 0) {
        acc = [...acc, [card, quantity]]
      }

      return acc
    }, [])

    const deck = new Map(deckEntries)

    onDone(deck)
  }, [isDeckValid, quantities, onDone])

  return {
    sortedCards,
    quantities,
    totalCards,
    handleQuantityChange,
    handleDone,
    isDeckValid,
  }
}
