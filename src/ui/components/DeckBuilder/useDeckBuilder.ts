import { useCallback, useMemo, useState } from 'react'

import { sortedCards } from '../../../game/cards'
import { DECK_SIZE } from '../../../game/config'
import { ICard } from '../../../game/types'

interface UseDeckBuilderProps {
  onDone: (deck: Map<ICard, number>) => void
}

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
    if (!isDeckValid) return

    const deckEntries = sortedCards
      .map((card): [ICard, number] | undefined => {
        const quantity = quantities[card.id] || 0
        return quantity > 0 ? [card, quantity] : undefined
      })
      .filter((entry): entry is [ICard, number] => entry !== undefined)

    const deck = new Map<ICard, number>(deckEntries)
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
