import { useCallback, useMemo, useState } from 'react'

import * as AllCards from '../../../game/cards'
import { DECK_SIZE } from '../../../game/config'
import { pricing } from '../../../game/services/Pricing'
import { CardType, ICard, ICrop } from '../../../game/types'
import { isCard } from '../../../game/types/guards'

interface UseDeckBuilderProps {
  onDone: (deck: Map<ICard, number>) => void
}

export const useDeckBuilder = ({ onDone }: UseDeckBuilderProps) => {
  const sortedCards = useMemo(() => {
    const cards = (Object.values(AllCards) as unknown[]).filter(isCard)

    const crops = cards.filter(c => c.type === CardType.CROP) as ICrop[]
    const water = cards.filter(c => c.type === CardType.WATER)
    const tools = cards.filter(c => c.type === CardType.TOOL)
    const events = cards.filter(c => c.type === CardType.EVENT)

    const sortedCrops = [...crops].sort(
      (a, b) => pricing.getCropBaseValue(a) - pricing.getCropBaseValue(b)
    )

    return [...sortedCrops, ...water, ...tools, ...events]
  }, [])

  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const totalCards = useMemo(
    () => Object.values(quantities).reduce((acc, qty) => acc + qty, 0),
    [quantities]
  )

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
    if (totalCards !== DECK_SIZE) return

    const deck = new Map<ICard, number>()
    sortedCards.forEach(card => {
      const qty = quantities[card.id] || 0
      if (qty > 0) {
        // eslint-disable-next-line functional/immutable-data
        deck.set(card, qty)
      }
    })
    onDone(deck)
  }, [totalCards, sortedCards, quantities, onDone])

  return {
    sortedCards,
    quantities,
    totalCards,
    handleQuantityChange,
    handleDone,
  }
}
