import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Paper, { PaperProps } from '@mui/material/Paper'
import useTheme from '@mui/material/styles/useTheme'

import { ICard } from '../../../game/types'
import { cards, isCardKey } from '../../img/index'

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
          p: theme.spacing(1),
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
          }}
        />
      </Box>
      <Box sx={{ height: '50%' }}></Box>
    </Paper>
  )
}
