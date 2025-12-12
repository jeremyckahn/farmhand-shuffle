import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { DECK_SIZE } from '../../../game/config'

import { DeckBuilderSection } from './DeckBuilderSection'
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

      <Box sx={{ display: 'flex', flexDirection: 'column', my: 4 }}>
        <DeckBuilderSection
          title="Crops"
          cards={groupedCards.crops}
          isLast={false}
          quantities={quantities}
          onQuantityChange={handleQuantityChange}
          totalCards={totalCards}
        />
        <DeckBuilderSection
          title="Water"
          cards={groupedCards.water}
          isLast={false}
          quantities={quantities}
          onQuantityChange={handleQuantityChange}
          totalCards={totalCards}
        />
        <DeckBuilderSection
          title="Tools"
          cards={groupedCards.tools}
          isLast={false}
          quantities={quantities}
          onQuantityChange={handleQuantityChange}
          totalCards={totalCards}
        />
        <DeckBuilderSection
          title="Events"
          cards={groupedCards.events}
          isLast={true}
          quantities={quantities}
          onQuantityChange={handleQuantityChange}
          totalCards={totalCards}
        />
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
