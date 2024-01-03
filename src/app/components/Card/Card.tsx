import { PaperProps } from '@mui/material/Paper'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import { CardType, ICrop, IPlayedCrop, IWater } from '../../../game/types'
import { isCrop } from '../../../game/types/guards'

import { CardCropText } from './CardCropText'
import { CardTemplate } from './CardTemplate'

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
