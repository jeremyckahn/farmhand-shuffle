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

export interface CropCardProps extends BaseCardProps {
  playedCrop?: IPlayedCrop
}

export interface WaterCardProps extends BaseCardProps {}

export type CardProps = CropCardProps | WaterCardProps

const isPropsCropCardProps = (props: CardProps): props is CropCardProps => {
  return isCropCard(props.card)
}

const isPropsWaterCardProps = (props: CardProps): props is WaterCardProps => {
  return isWaterCard(props.card)
}

export const CropCard = ({ playedCrop, ...props }: CropCardProps) => {
  return (
    <CardTemplate {...props}>
      {isCrop(props.card) ? (
        <CardCropText crop={props.card} playedCrop={playedCrop} />
      ) : null}
    </CardTemplate>
  )
}

export const WaterCard = (props: WaterCardProps) => {
  return <CardTemplate {...props} />
}

export const Card = (props: CardProps) => {
  if (isPropsCropCardProps(props)) {
    return <CropCard {...props} />
  }

  if (isPropsWaterCardProps(props)) {
    return <WaterCard {...props} />
  }

  throw new UnimplementedError('Unexpected CardType')
}
