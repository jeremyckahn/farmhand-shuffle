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

export enum CardFocusMode {
  CROP_PLACEMENT,
}

export interface BaseCardProps extends BoxProps {
  card: ICard
  cardIdx: number
  playerId: string
  size?: CardSize
  imageScale?: number
  cardFocusMode?: CardFocusMode
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
  function CropCard({ playedCrop, ...props }, ref) {
    return (
      <CardTemplate {...props} ref={ref}>
        {isCrop(props.card) ? (
          <CardCropText crop={props.card} playedCrop={playedCrop} />
        ) : null}
      </CardTemplate>
    )
  }
)

export const WaterCard = forwardRef<HTMLDivElement, WaterCardProps>(
  function WaterCard(props, ref) {
    return <CardTemplate {...props} ref={ref} />
  }
)

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  props,
  ref
) {
  if (isPropsCropCardProps(props)) {
    return <CropCard {...props} ref={ref} />
  }

  if (isPropsWaterCardProps(props)) {
    return <WaterCard {...props} ref={ref} />
  }

  throw new UnimplementedError('Unexpected CardType')
})
