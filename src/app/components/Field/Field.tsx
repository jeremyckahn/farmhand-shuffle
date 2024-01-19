import { useRef, useState } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'

import * as cards from '../../../game/cards'
import { lookup } from '../../../game/services/Lookup'
import { IGame, IPlayer } from '../../../game/types'
import { Card } from '../Card'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'

const deselectedIdx = -1

export interface FieldProps extends BoxProps {
  game: IGame
  playerId: IPlayer['id']
}

export const Field = ({ playerId, game, ...rest }: FieldProps) => {
  const player = lookup.getPlayer(game, playerId)

  const containerRef = useRef<HTMLDivElement>()
  const theme = useTheme()
  const [selectedCardIdx, setSelectedCardIdx] = useState(deselectedIdx)

  const resetSelectedCard = () => {
    setSelectedCardIdx(deselectedIdx)

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  const handleCardFocus = (cardIdx: number) => {
    setSelectedCardIdx(cardIdx)
  }

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    switch (evt.key) {
      case 'Escape':
        resetSelectedCard()
        break
    }
  }

  const handleBlur = (evt: React.FocusEvent<HTMLDivElement, Element>) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(evt.relatedTarget)
    ) {
      resetSelectedCard()
    }
  }

  return (
    <Box
      {...rest}
      data-testid={`field_${playerId}`}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <Grid container spacing={2}>
        {player.field.crops.map(({ id, waterCards }, idx) => {
          if (!isCardId(id)) {
            throw new UnimplementedError(`${id} is not a card`)
          }

          const card = cards[id]
          const isSelected = selectedCardIdx === idx

          return (
            <Grid key={`${idx}_${id}_${waterCards}`} item xs>
              <Card
                card={card}
                onFocus={() => handleCardFocus(idx)}
                tabIndex={0}
                sx={{
                  transition: theme.transitions.create([
                    'transition',
                    'transform',
                  ]),
                  ...(isSelected && {
                    // FIXME: Use a dynamically centered transform here
                    transform: `translateX(200px) translateY(200px)`,
                  }),
                }}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
