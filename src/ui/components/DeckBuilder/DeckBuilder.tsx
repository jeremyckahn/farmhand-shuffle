import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

import { DECK_SIZE } from '../../../game/config'
import { CardSize } from '../../types'
import { CardQuantityControl } from '../CardQuantityControl/CardQuantityControl'

import { DeckBuilderProps } from './types'
import { useDeckBuilder } from './useDeckBuilder'

export const DeckBuilder = ({ onDone }: DeckBuilderProps) => {
  const {
    sortedCards,
    quantities,
    totalCards,
    handleQuantityChange,
    handleDone,
  } = useDeckBuilder({ onDone })

  return (
    <Paper sx={{ p: 4, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Select your cards
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Total: {totalCards} / {DECK_SIZE}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 4 }}>
        {sortedCards.map(card => (
          <CardQuantityControl
            key={card.id}
            card={card}
            quantity={quantities[card.id] || 0}
            onChange={handleQuantityChange(card.id)}
            cardSize={CardSize.SMALL}
            isIncreaseDisabled={totalCards >= DECK_SIZE}
          />
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleDone}
          disabled={totalCards !== DECK_SIZE}
        >
          Done
        </Button>
      </Box>
    </Paper>
  )
}
