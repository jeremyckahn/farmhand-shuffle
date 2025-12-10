import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

import { DECK_SIZE, MAX_INSTANCES_PER_CARD } from '../../../game/config'
import { CardType, ICard } from '../../../game/types'
import { CardSize } from '../../types'
import { CardQuantityControl } from '../CardQuantityControl/CardQuantityControl'

import { DeckBuilderProps } from './types'
import { useDeckBuilder } from './useDeckBuilder'

export const DeckBuilder = ({ onDone }: DeckBuilderProps) => {
  const {
    groupedCards,
    quantities,
    totalCards,
    handleQuantityChange,
    handleDone,
    isDeckValid,
  } = useDeckBuilder({ onDone })

  const renderCardSection = (
    title: string,
    cards: ICard[],
    isLast: boolean
  ) => (
    <Box key={title}>
      <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
        {cards.map(card => (
          <CardQuantityControl
            key={card.id}
            card={card}
            quantity={quantities[card.id] || 0}
            onChange={handleQuantityChange(card.id)}
            cardSize={CardSize.SMALL}
            isIncreaseDisabled={
              totalCards >= DECK_SIZE ||
              (card.type !== CardType.WATER &&
                (quantities[card.id] || 0) >= MAX_INSTANCES_PER_CARD)
            }
          />
        ))}
      </Box>
      {!isLast && <Divider sx={{ my: 2 }} />}
    </Box>
  )

  return (
    <Paper sx={{ p: 4, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Select your cards
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        align="center"
        gutterBottom
        role="status"
        aria-live="polite"
      >
        Total: {totalCards} / {DECK_SIZE}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 4 }}>
        {renderCardSection('Crops', groupedCards.crops, false)}
        {renderCardSection('Water', groupedCards.water, false)}
        {renderCardSection('Tools', groupedCards.tools, false)}
        {renderCardSection('Events', groupedCards.events, true)}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleDone}
          disabled={!isDeckValid}
        >
          Done
        </Button>
      </Box>
    </Paper>
  )
}
