import { PaperProps } from '@mui/material/Paper'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import {
  ICard,
  IPlayedCrop,
  isCropCard,
  isWaterCard,
} from '../../../game/types'
import { isCrop } from '../../../game/types/guards'

import { CardCropText } from './CardCropText'
import { CardTemplate } from './CardTemplate'

export interface BaseCardProps extends PaperProps {
  card: ICard
  size?: number
}

export interface CropCardProps {
  playedCrop?: IPlayedCrop
}

export interface WaterCardProps {}

export type CardProps = BaseCardProps & (CropCardProps | WaterCardProps)

const isCropCardProps = (
  props: CardProps
): props is BaseCardProps & CropCardProps => {
  return isCropCard(props.card)
}

const isWaterCardProps = (
  props: CardProps
): props is BaseCardProps & WaterCardProps => {
  return isWaterCard(props.card)
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
