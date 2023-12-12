import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Paper, { PaperProps } from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import useTheme from '@mui/material/styles/useTheme'

import { Typography } from '@mui/material'

import { ICard, ICrop, IPlayedCrop } from '../../../game/types'
import { isCrop } from '../../../game/types/guards'
import { cards, isCardKey } from '../../img'

import { CardCropText } from './CardCropText'

type CardProps = PaperProps & {
  card: ICard
  size?: number
} & {
  card: ICrop
  playedCrop?: IPlayedCrop
}

export const Card = ({
  card,
  playedCrop,
  size = 0.75,
  sx = [],
  ...rest
}: CardProps) => {
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
          p: cardPadding,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      <Typography
        variant="overline"
        sx={{ fontWeight: theme.typography.fontWeightBold }}
      >
        {card.name}
      </Typography>
      <Box
        sx={{
          height: '50%',
          display: 'flex',
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
            width: 'auto',
            p: 0,
            m: 'auto',
            imageRendering: 'pixelated',
            filter: `drop-shadow(0 0 10px ${theme.palette.secondary.dark})`,
          }}
        />
      </Box>
      <Divider sx={{ my: cardPadding }} />
      <Box sx={{ height: '50%' }}>
        {isCrop(card) ? (
          <CardCropText crop={card} playedCrop={playedCrop} />
        ) : null}
      </Box>
    </Paper>
  )
}
