import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Paper, { PaperProps } from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import useTheme from '@mui/material/styles/useTheme'

import { ICard } from '../../../game/types'
import { isCrop } from '../../../game/types/guards'
import { cards, isCardKey } from '../../img'

interface CardProps extends PaperProps {
  card: ICard
  size?: number
}

export const Card = ({ card, size = 0.75, sx = [], ...rest }: CardProps) => {
  const theme = useTheme()

  const { id: cardId } = card

  if (!isCardKey(cardId)) {
    // FIXME: Render a fallback image instead
    throw new Error(`Card ID ${cardId} does not have an image configured`)
  }

  const imageSrc = cards[cardId]

  // FIXME: Use name for alt text

  // FIXME: Render played crop data (how many water cards are attached)

  const cardPadding = theme.spacing(1)

  return (
    <Paper
      sx={[
        {
          width: 300,
          height: 500,
          background: theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      <Box
        sx={{
          height: '50%',
          display: 'flex',
          p: cardPadding,
          m: theme.spacing(1),
          background: theme.palette.primary.light,
          borderColor: theme.palette.primary.dark,
          borderRadius: `${theme.shape.borderRadius}px`,
          borderWidth: 1,
          borderStyle: 'solid',
        }}
      >
        <Avatar
          src={imageSrc}
          alt={card.id}
          variant="square"
          sx={{
            height: `${100 * size}%`,
            width: `${100 * size}%`,
            m: 'auto',
            imageRendering: 'pixelated',
            filter: `drop-shadow(0 0 10px ${theme.palette.secondary.dark})`,
          }}
        />
      </Box>
      <Divider sx={{ mx: cardPadding, mt: theme.spacing(0.75) }} />
      <Box sx={{ height: '50%', p: cardPadding }}>
        {isCrop(card) ? (
          <Typography>Water needed to mature: {card.waterToMature}</Typography>
        ) : null}
      </Box>
    </Paper>
  )
}
