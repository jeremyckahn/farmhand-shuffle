import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Paper, { PaperProps } from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import { darken, lighten } from '@mui/material/styles'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import { CardType, ICrop, IPlayedCrop, IWater } from '../../../game/types'
import { isCrop } from '../../../game/types/guards'
import { cards, isCardImageKey, ui } from '../../img'

import { CardCropText } from './CardCropText'

export interface BaseCardProps extends PaperProps {
  size?: number
}

export interface CropCardProps {
  card: ICrop
  playedCrop?: IPlayedCrop
}

export interface WaterCardProps {
  card: IWater
}

export type CardProps = BaseCardProps & (CropCardProps | WaterCardProps)

const isCropCardProps = (
  props: CardProps
): props is BaseCardProps & CropCardProps => {
  return props.card.type === CardType.CROP
}

const isWaterCardProps = (
  props: CardProps
): props is BaseCardProps & WaterCardProps => {
  return props.card.type === CardType.WATER
}

const CardTemplate = ({
  card,
  size = 0.75,
  sx = [],
  children,
  ...props
}: CardProps) => {
  const theme = useTheme()

  const imageSrc = isCardImageKey(card.id) ? cards[card.id] : ui.pixel

  if (imageSrc === ui.pixel) {
    console.error(`Card ID ${card.id} does not have an image configured`)
  }

  return (
    <Paper
      sx={[
        {
          width: '16rem',
          height: '28rem',
          background:
            theme.palette.mode === 'light'
              ? darken(theme.palette.background.paper, 0.05)
              : lighten(theme.palette.background.paper, 0.15),
          display: 'flex',
          flexDirection: 'column',
          p: theme.spacing(1),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
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
          background: theme.palette.common.white,
          backgroundImage: `url(${ui.dirt})`,
          backgroundSize: '100%',
          backgroundRepeat: 'repeat',
          borderColor: theme.palette.divider,
          borderRadius: `${theme.shape.borderRadius}px`,
          borderWidth: 1,
          borderStyle: 'solid',
          imageRendering: 'pixelated',
        }}
      >
        <Avatar
          src={imageSrc}
          alt={card.name}
          variant="square"
          sx={{
            height: `${100 * size}%`,
            width: 'auto',
            p: 0,
            m: 'auto',
            imageRendering: 'pixelated',
            filter: `drop-shadow(0 0 5px ${theme.palette.common.white})`,
          }}
        />
      </Box>
      <Divider sx={{ my: theme.spacing(1) }} />
      <Box sx={{ height: '50%' }}>{children}</Box>
    </Paper>
  )
}

export const CropCard = ({
  playedCrop,
  ...props
}: BaseCardProps & CropCardProps) => {
  return (
    <CardTemplate {...props}>
      {isCrop(props.card) ? (
        <CardCropText crop={props.card} playedCrop={playedCrop} />
      ) : null}
    </CardTemplate>
  )
}

export const WaterCard = (props: BaseCardProps & WaterCardProps) => {
  return <CardTemplate {...props} />
}

export const Card = (props: CardProps) => {
  if (isCropCardProps(props)) {
    return <CropCard {...props} />
  }

  if (isWaterCardProps(props)) {
    return <WaterCard {...props} />
  }

  throw new UnimplementedError('Unexpected CardType')
}
