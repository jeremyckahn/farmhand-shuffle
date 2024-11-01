import { BoxProps } from '@mui/material/Box'
import { PaperProps } from '@mui/material/Paper'

import { forwardRef } from 'react'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import {
  ICard,
  IPlayedCrop,
  isCropCard,
  isWaterCard,
} from '../../../game/types'
import { isCrop } from '../../../game/types/guards'
import { CardSize } from '../../types'

import { CardCropText } from './CardCropText'
import { CardTemplate } from './CardTemplate'

export interface BaseCardProps extends BoxProps {
  card: ICard
  size?: CardSize
  imageScale?: number
}

export interface CropCardProps extends BaseCardProps {
  playedCrop?: IPlayedCrop
}

export type WaterCardProps = BaseCardProps

export type CardProps = (CropCardProps | WaterCardProps) & {
  isFlipped?: boolean
  paperProps?: Partial<Omit<PaperProps, 'sx'>>
}

const isPropsCropCardProps = (props: CardProps): props is CropCardProps => {
  return isCropCard(props.card)
}

const isPropsWaterCardProps = (props: CardProps): props is WaterCardProps => {
  return isWaterCard(props.card)
}

export const CropCard = forwardRef<HTMLDivElement, CropCardProps>(
  ({ playedCrop, ...props }, ref) => {
    return (
      <CardTemplate {...props} ref={ref}>
        {isCrop(props.card) ? (
          <CardCropText crop={props.card} playedCrop={playedCrop} />
        ) : null}
      </CardTemplate>
    )
  }
)

CropCard.displayName = 'CropCard'

export const WaterCard = forwardRef<HTMLDivElement, WaterCardProps>(
  (props, ref) => {
    return <CardTemplate {...props} ref={ref} />
  }
)

WaterCard.displayName = 'WaterCard'

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  if (isPropsCropCardProps(props)) {
    return <CropCard {...props} ref={ref} />
  }

  if (isPropsWaterCardProps(props)) {
    return <WaterCard {...props} ref={ref} />
  }

  throw new UnimplementedError('Unexpected CardType')
})

Card.displayName = 'Card'
