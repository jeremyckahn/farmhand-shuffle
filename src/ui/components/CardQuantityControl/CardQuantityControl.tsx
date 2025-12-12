import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { DECK_SIZE } from '../../../game/config'
import { CardInstance } from '../../../game/types'
import { CardSize } from '../../types'
import { CardCore } from '../Card/CardCore'

import { CardQuantityControlProps } from './types'

export const CardQuantityControl = ({
  card,
  quantity,
  onChange,
  cardSize = CardSize.SMALL,
  isIncreaseDisabled = false,
}: CardQuantityControlProps) => {
  const dummyCardInstance = useMemo<CardInstance>(
    () =>
      ({
        ...card,
        // NOTE: Strictly typing the variable as `CardInstance` without a cast
        // causes a TypeScript error because `card` is `ICard`, which is a
        // subset of `CardInstance`.
        instanceId: uuidv4(),
      } as CardInstance),
    [card]
  )

  const handleDecrease = () => {
    if (quantity > 0) {
      onChange(prev => prev - 1)
    }
  }

  const handleIncrease = () => {
    if (quantity < DECK_SIZE && !isIncreaseDisabled) {
      onChange(prev => prev + 1)
    }
  }

  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}>
      <CardCore
        cardInstance={dummyCardInstance}
        size={cardSize}
        cardIdx={0}
        playerId=""
        disableEnterAnimation
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Tooltip title="Remove card">
          {/* NOTE: The `<span>` wrappers are necessary because `Fab` (like
              `IconButton`) can be disabled. Disabled elements do not emit mouse
              events, preventing the Tooltip from appearing. Wrapping them in a
              `<span>` ensures the Tooltip works even when the button is
              disabled. */}
          <span>
            <Fab
              size="small"
              color="secondary"
              onClick={handleDecrease}
              disabled={quantity <= 0}
              aria-label="decrease quantity"
            >
              <RemoveIcon />
            </Fab>
          </span>
        </Tooltip>
        <Typography
          variant="h6"
          sx={{ minWidth: '1.5rem', textAlign: 'center' }}
        >
          {new Intl.NumberFormat().format(quantity)}
        </Typography>
        <Tooltip title="Add card">
          <span>
            <Fab
              size="small"
              color="primary"
              onClick={handleIncrease}
              disabled={quantity >= DECK_SIZE || isIncreaseDisabled}
              aria-label="increase quantity"
            >
              <AddIcon />
            </Fab>
          </span>
        </Tooltip>
      </Box>
    </Paper>
  )
}
