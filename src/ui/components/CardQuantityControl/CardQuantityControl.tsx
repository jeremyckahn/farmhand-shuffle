import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React, { useMemo } from 'react'
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
}: CardQuantityControlProps) => {
  const dummyCardInstance = useMemo<CardInstance>(
    () =>
      ({
        ...card,
        instanceId: uuidv4(),
      } as CardInstance),
    [card]
  )

  const handleDecrease = () => {
    if (quantity > 0) {
      onChange(quantity - 1)
    }
  }

  const handleIncrease = () => {
    if (quantity < DECK_SIZE) {
      onChange(quantity + 1)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <CardCore
        cardInstance={dummyCardInstance}
        size={CardSize.SMALL}
        cardIdx={0}
        playerId=""
        disableEnterAnimation
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Tooltip title="Remove card">
          <span>
            <IconButton
              onClick={handleDecrease}
              disabled={quantity <= 0}
              aria-label="decrease quantity"
            >
              <RemoveIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Typography
          variant="h6"
          sx={{ minWidth: '1.5rem', textAlign: 'center' }}
        >
          {quantity}
        </Typography>
        <Tooltip title="Add card">
          <span>
            <IconButton
              onClick={handleIncrease}
              disabled={quantity >= DECK_SIZE}
              aria-label="increase quantity"
            >
              <AddIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
    </Box>
  )
}
