import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import React from 'react'

import { DECK_SIZE, MAX_INSTANCES_PER_CARD } from '../../../game/config'
import { CardType, ICard } from '../../../game/types'
import { CardSize } from '../../types'
import { CardQuantityControl } from '../CardQuantityControl/CardQuantityControl'

interface DeckBuilderSectionProps {
  title: string
  cards: ICard[]
  isLast: boolean
  quantities: Record<string, number>
  onQuantityChange: (
    cardId: string
  ) => (action: React.SetStateAction<number>) => void
  totalCards: number
}

export const DeckBuilderSection = ({
  title,
  cards,
  isLast,
  quantities,
  onQuantityChange,
  totalCards,
}: DeckBuilderSectionProps) => {
  return (
    <Box key={title}>
      <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
        {cards.map(card => {
          const isIncreaseDisabled =
            totalCards >= DECK_SIZE ||
            (card.type !== CardType.WATER &&
              (quantities[card.id] || 0) >= MAX_INSTANCES_PER_CARD)

          return (
            <CardQuantityControl
              key={card.id}
              card={card}
              quantity={quantities[card.id] || 0}
              onChange={onQuantityChange(card.id)}
              cardSize={CardSize.SMALL}
              isIncreaseDisabled={isIncreaseDisabled}
            />
          )
        })}
      </Box>
      {!isLast && <Divider sx={{ my: 2 }} />}
    </Box>
  )
}
