import { useCallback, useMemo, useState } from 'react'

import * as AllCards from '../../../game/cards'
import { DECK_SIZE } from '../../../game/config'
import { pricing } from '../../../game/services/Pricing'
import { CardType, ICard, ICrop } from '../../../game/types'
import { isCard } from '../../../game/types/guards'

interface UseDeckBuilderProps {
  onDone: (deck: Map<ICard, number>) => void
}

const sortedCards = (() => {
  const cards = (Object.values(AllCards) as unknown[]).filter(isCard)

  const crops = cards.filter(c => c.type === CardType.CROP) as ICrop[]
  const water = cards.filter(c => c.type === CardType.WATER)
  const tools = cards.filter(c => c.type === CardType.TOOL)
  const events = cards.filter(c => c.type === CardType.EVENT)

  const sortedCrops = [...crops].sort(
    (a, b) => pricing.getCropBaseValue(a) - pricing.getCropBaseValue(b)
  )

  return [...sortedCrops, ...water, ...tools, ...events]
})()

export const useDeckBuilder = ({ onDone }: UseDeckBuilderProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const totalCards = useMemo(
    () => Object.values(quantities).reduce((acc, qty) => acc + qty, 0),
    [quantities]
  )

  const isDoneDisabled = totalCards !== DECK_SIZE

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
    if (isDoneDisabled) return

    const deckEntries = sortedCards
      .map((card): [ICard, number] | undefined => {
        const qty = quantities[card.id] || 0
        return qty > 0 ? [card, qty] : undefined
      })
      .filter((entry): entry is [ICard, number] => entry !== undefined)

    const deck = new Map<ICard, number>(deckEntries)
    onDone(deck)
  }, [isDoneDisabled, quantities, onDone])

  return {
    sortedCards,
    quantities,
    totalCards,
    handleQuantityChange,
    handleDone,
    isDoneDisabled,
  }
}
