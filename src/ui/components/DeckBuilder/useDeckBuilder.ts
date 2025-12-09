import { useCallback, useMemo, useState } from 'react'

import {
  cropCards,
  eventCards,
  toolCards,
  waterCards,
} from '../../../game/cards'
import { DECK_SIZE } from '../../../game/config'
import { CardType, ICard, ICrop } from '../../../game/types'
import { pricing } from '../../../game/services/Pricing'

interface UseDeckBuilderProps {
  onDone: (deck: Map<ICard, number>) => void
}

export const sortedCards = (() => {
  const crops = Object.values(cropCards).filter(
    (c): c is ICrop => c.type === CardType.CROP
  )

  const sortedCrops = [...crops].sort(
    (a, b) => pricing.getCropBaseValue(a) - pricing.getCropBaseValue(b)
  )

  const water = Object.values(waterCards)
  const tools = Object.values(toolCards)
  const events = Object.values(eventCards)

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
